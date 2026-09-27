const STYLE_DESC = {
  villa: 'a modern minimalist luxury villa with clean geometric lines',
  tower: 'a sleek glass penthouse tower rising above the skyline',
  lodge: 'a rustic alpine mountain lodge with a steep pitched roof',
  pavilion: 'a low-slung glass pavilion house set among gardens',
};
const PALETTE_DESC = {
  gold: 'a charcoal-grey facade with warm brushed-gold accents and bronze window frames',
  ivory: 'an ivory stone and warm sandstone facade with soft natural tones',
  timber: 'dark shou-sugi-ban charred timber cladding with black steel accents',
  platinum: 'floor-to-ceiling glass curtain walls with brushed platinum and steel framing',
};
const FOOTPRINT_DESC = {
  small: 'a compact, intimate footprint',
  medium: 'a generously proportioned footprint',
  large: 'a grand, sprawling footprint',
};
const ADDON_DESC = {
  pool: 'a cantilevered infinity pool',
  guesthouse: 'a matching guest house',
  garden: 'a landscaped rooftop garden',
  theater: 'a private home theater wing',
  solar: 'an integrated solar panel roof',
};

function buildPrompt({ style, palette, footprint, stories, addons }) {
  const addonPhrases = (Array.isArray(addons) ? addons : [])
    .map((a) => ADDON_DESC[a])
    .filter(Boolean);
  const addonText = addonPhrases.length ? `, featuring ${addonPhrases.join(' and ')}` : '';
  const storyCount = Math.max(1, Math.min(4, parseInt(stories, 10) || 1));

  return (
    `A professional real estate architectural photograph of ${STYLE_DESC[style] || STYLE_DESC.villa}, ` +
    `${PALETTE_DESC[palette] || PALETTE_DESC.gold}, ${FOOTPRINT_DESC[footprint] || FOOTPRINT_DESC.medium}, ` +
    `${storyCount} ${storyCount === 1 ? 'story' : 'stories'}${addonText}. ` +
    `Golden hour lighting, landscaped grounds, ultra-realistic, magazine-quality luxury real estate photography, ` +
    `8k, wide exterior shot, no people, no text, no watermark.`
  );
}

const REPLICATE_MODEL = 'black-forest-labs/flux-schnell';
const POLL_INTERVAL_MS = 1000;
const POLL_TIMEOUT_MS = 55000;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiToken = process.env.REPLICATE_API_TOKEN;
  if (!apiToken) {
    res.status(500).json({ error: 'Realistic previews are not configured yet.' });
    return;
  }

  const body = req.body || {};
  const prompt = buildPrompt(body);

  try {
    const createResp = await fetch(`https://api.replicate.com/v1/models/${REPLICATE_MODEL}/predictions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        Prefer: 'wait',
      },
      body: JSON.stringify({
        input: {
          prompt,
          aspect_ratio: '1:1',
          num_outputs: 1,
          output_format: 'jpg',
          output_quality: 85,
        },
      }),
    });

    if (!createResp.ok) {
      const errText = await createResp.text();
      console.error('Replicate API error:', errText);
      res.status(502).json({ error: 'Image generation failed. Please try again.' });
      return;
    }

    let prediction = await createResp.json();
    const startedAt = Date.now();

    while (
      prediction.status !== 'succeeded' &&
      prediction.status !== 'failed' &&
      prediction.status !== 'canceled' &&
      Date.now() - startedAt < POLL_TIMEOUT_MS
    ) {
      await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
      const pollResp = await fetch(prediction.urls.get, {
        headers: { Authorization: `Bearer ${apiToken}` },
      });
      prediction = await pollResp.json();
    }

    if (prediction.status !== 'succeeded') {
      console.error('Replicate prediction did not succeed:', prediction.status, prediction.error);
      res.status(502).json({ error: 'Image generation timed out. Please try again.' });
      return;
    }

    const output = prediction.output;
    const imageUrl = Array.isArray(output) ? output[0] : output;
    if (!imageUrl) {
      res.status(502).json({ error: 'No image was returned. Please try again.' });
      return;
    }

    res.status(200).json({ image: imageUrl });
  } catch (err) {
    console.error('Dream home generation error:', err);
    res.status(500).json({ error: 'Something went wrong generating your dream home.' });
  }
};
