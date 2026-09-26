# ScholarSphere

A study companion for CBSE students in Classes 8–12. It opens straight to a dashboard with no sign-up, and everything a student creates (notes, bookmarks, progress, quiz scores) is saved in their browser's `localStorage`.

Built with Next.js 16 (App Router), Tailwind CSS 4 and Lucide React.

## Run it

```bash
cd scholarsphere
npm install
npm run dev        # http://localhost:3000
npm run build      # prerenders every class/subject/chapter/topic page
```

### Optional: live AI

The AI Explainer and AI Notes Generator work offline out of the box. Their answers are built from each topic's curated content in `lib/data/`. To use a live model, set an Anthropic API key:

```bash
ANTHROPIC_API_KEY=sk-ant-... npm run dev
```

`app/api/ai/route.ts` then calls Claude (`claude-opus-5`, low effort for fast answers, with server-side refusal fallback). If the key is missing or a call fails, the client quietly uses the offline answer.

## Features

| Area | Where |
| --- | --- |
| Dashboard: class picker, subject cards with progress, continue learning, bookmarks, stats | `/` · `components/Dashboard.tsx` |
| Curriculum explorer: Class → Subject → Textbook → Chapter → Topic → Subtopic | `/explore` |
| Subject and chapter pages with per-topic completion | `/learn/[grade]/[subject]`, `/learn/[grade]/[subject]/[chapter]` |
| Topic reading view: intro, simplified sections, definitions, formulas, dates timeline, exam points | `/learn/[grade]/[subject]/[chapter]/[topic]` |
| AI Explainer: *Explain like I'm 10*, *Real-world example*, *Mnemonic trick* (with an on/off toggle) | `components/ai/AIExplainer.tsx` |
| AI Notes Generator: summary, key takeaways and flashcards in one click, then save to My Notes | `components/ai/AINotes.tsx` |
| My Notes: rich-text-lite editor (bold, italic, highlight, headings, lists, colours, pin), per topic, per chapter, or from the hub; bookmarks; JSON export | `/notes` · `components/NoteEditor.tsx` |
| Practice: per-chapter quick quiz with explanations, mistake review and best scores; flip-card flashcards with "got it / still learning" | `/practice`, `/learn/.../[chapter]/practice` |
| Global search (press `/` or ⌘K) over every chapter, topic and subtopic | `components/SearchBox.tsx`, `/search-index.json` |

## Project layout

```
app/                     routes (all curriculum pages are statically generated)
  api/ai/route.ts        optional live-AI endpoint
  search-index.json/     static search index
components/              UI (client components are marked "use client")
lib/
  types.ts               curriculum schema
  data/class8..12.ts     curriculum content (mock data)
  curriculum.ts          lookups, URLs, counts, quiz/flashcard generation
  storage.ts             localStorage store on useSyncExternalStore
  store.ts               notes, bookmarks, progress, quiz results, prefs
  ai.ts                  offline explainer/notes + client for /api/ai
```

## Curriculum data

`lib/types.ts` defines the hierarchy. Every chapter lists its topics and subtopics. A topic with a `content` block gets the full reading view. A topic without one shows its outline, and the AI tools still work on it. Chapters can carry a hand-written `quiz`. If they don't, and they have enough definitions, questions are generated from those definitions. Flashcards come from definitions, formulas and dates.

This is **demo data**. Chapter lists follow the rationalised NCERT textbooks. Full reading content and quizzes are written for a set of sample chapters, which are marked "Full notes" in the app. NCERT released new textbooks for some classes (for example Class 8 from 2025–26), so check chapter lists against the current syllabus before real use. To add content, fill in `content` and `quiz` on more topics and chapters. No UI changes are needed.

## Storage keys

All keys are prefixed `scholarsphere:`: `prefs`, `notes`, `bookmarks`, `recent`, `completed`, `quiz`. Clearing site data resets the app.
