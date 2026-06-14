# Word hints authoring prompt

Copy everything below the line into your AI chat. Paste the batch of prompts you want glosses for at the bottom.

---

You are authoring **word hints** for *Pues*, a speak-first Spanish practice app. On the Speak screen, learners tap English words in a prompt and see a small Spanish gloss before they say the sentence aloud.

## Your task

For each prompt below, produce a `wordHints` array: curated English → Spanish glosses that help the learner **build toward the model answer**, not a dictionary definition of each word in isolation.

## Output format

Return **only** valid TypeScript-ready blocks, one per prompt, in this shape:

```ts
// d2-tengo
wordHints: [
  { en: "have", es: "tengo" },
  { en: "meeting", es: "una reunión" },
  { en: "teachers", es: "los maestros" },
  { en: "three", es: "las tres" },
],
```

Rules for output:
- `en` is always **lowercase** (the app lowercases at lookup time).
- Contractions stay as one key: `i'm`, `don't`, `i'd`, `it's`.
- One gloss per `en` key per prompt (no duplicates).
- Include articles in the Spanish gloss when natural (`la clase`, `las hojas`, `una reunión`).
- Prefer **how this sentence is actually said in Spanish**, using the provided `spanish` answer as the source of truth.
- Omit function words you can't gloss usefully (`I`, `to`, `the`, `a`, `an`) unless they map cleanly in context.
- For phrasal patterns, gloss the English word that carries meaning in *this* sentence — even if the Spanish is a chunk:
  - `feel` → `tengo ganas` (not a literal “sentir”)
  - `going` → `a` (in “I'm going to…” → *Voy a…*)
  - `would` → `me gustaría` (in “I would like…”)
- Use **Latin American Spanish**, tú-form, pan-Hispanic vocabulary.
- Infinitives for verbs after modal patterns (`need to print` → `print` → `imprimir`, not `imprimo`).
- Conjugated forms when the learner needs the sentence form (`need` → `necesito`, `have` → `tengo`).
- Keep glosses short — what fits in a small popover (usually 1–4 words).

## Gold-standard examples (Day 1 — match this quality)

| id | english | spanish | wordHints |
|---|---|---|---|
| d1-quiero | I want to learn more Spanish. | Quiero aprender más español. | want→quiero, learn→aprender, more→más, spanish→español |
| d1-necesito | I need to print the worksheets for my class. | Necesito imprimir las hojas para mi clase. | need→necesito, print→imprimir, worksheets→las hojas, for→para, my→mi, class→la clase |
| d1-voy-a | I'm going to cook tonight. | Voy a cocinar esta noche. | i'm→voy, going→a, cook→cocinar, tonight→esta noche |
| d1-me-gustaria | I would like to travel more. | Me gustaría viajar más. | would→me gustaría, like→gustaría, travel→viajar, more→más |
| d1-tengo-ganas | I feel like resting. | Tengo ganas de descansar. | feel→tengo ganas, like→de, resting→descansar |

## What NOT to do

- Don't give dictionary Spanish that contradicts the model answer.
- Don't gloss every word mechanically — skip words with no useful mapping.
- Don't use Spain-only forms (vosotros, coger for “take”, etc.) unless the `why` note calls out a regional variant.
- Don't add commentary, tables, or explanations — only the `wordHints` blocks.
- Don't invent prompts; only gloss the batch provided below.

## Review checklist (apply silently before responding)

For each prompt, ask:
1. Does each gloss come from (or align with) the `spanish` answer?
2. Would tapping these words help someone **say** the sentence, not just memorize vocabulary?
3. Are `-ing` / contraction keys spelled the way they appear in the English sentence?
4. Are duplicate `en` keys avoided?

---

## Batch to gloss

Paste prompts here (5 per day is ideal):

```
Day: 2

id: d2-tengo
english: I have a meeting with the teachers at three.
spanish: Tengo una reunión con los maestros a las tres.
why: *Reunión* is the standard word for a meeting; in Mexico *junta* is also common.

id: d2-no-tengo
english: I don't have much free time this week.
spanish: No tengo mucho tiempo libre esta semana.
why: *No tengo* + noun is the plain way to say you lack something.

id: d2-hay
english: There's a good bakery near my house.
spanish: Hay una panadería buena cerca de mi casa.
why: *Hay* never changes form — singular or plural, same word.

id: d2-uso
english: ...
spanish: ...
why: ...

id: d2-...
english: ...
spanish: ...
why: ...
```

Replace the batch above with whichever day or prompts you need. Delete any prompt that already has `wordHints` unless you want them regenerated.
