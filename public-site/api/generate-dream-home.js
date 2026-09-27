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

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Realistic previews are not configured yet.' });
    return;
  }

  const body = req.body || {};
  const prompt = buildPrompt(body);

  try {
    const openaiResp = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-image-1',
        prompt,
        size: '1024x1024',
        quality: 'medium',
        n: 1,
      }),
    });

    if (!openaiResp.ok) {
      const errText = await openaiResp.text();
      console.error('OpenAI image API error:', errText);
      res.status(502).json({ error: 'Image generation failed. Please try again.' });
      return;
    }

    const data = await openaiResp.json();
    const b64 = data && data.data && data.data[0] && data.data[0].b64_json;
    if (!b64) {
      res.status(502).json({ error: 'No image was returned. Please try again.' });
      return;
    }

    res.status(200).json({ image: `data:image/png;base64,${b64}` });
  } catch (err) {
    console.error('Dream home generation error:', err);
    res.status(500).json({ error: 'Something went wrong generating your dream home.' });
  }
};
