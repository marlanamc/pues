# Pues — Curriculum

The year-long plan behind the daily content. Written for Marlana — 35, ESOL
teacher + aspiring developer, Boston by way of Atlanta. Goal: **speak Spanish
comfortably and confidently within a year.** Latin American Spanish, tú-form,
real life over textbook.

This file is the source of truth for future authoring sessions. The daily
content itself lives in the coupled pair `content/frames.ts` +
`content/prompts.ts` (see [Authoring conventions](#authoring-conventions)).

---

## The year in four temporadas

Seasons are calendar quarters (`lib/season.ts`); titles and goals live in the
`TEMPORADAS` array in `app/camino/page.tsx` and are already aligned with this
plan — no copy changes needed there.

**T1 Verano (Jun–Ago) — "El verano que hablo."** Say things out loud, every
day, until a simple conversation stops being scary. Arc: *assert* (weeks 1–2)
→ *interact* (weeks 3–6: ask, request, react, narrate) → *deepen* (weeks 7–13:
describe, advise, coordinate, hedge, repair, feel, integrate). Ends at the
season goals: una conversación simple sin pánico; leer una noticia corta
entera.

**T2 Otoño (Sep–Nov) — "Seguir el hilo."** Comprehension-led speaking: retell
and react. Weekly arcs around summarizing something read or heard, reported
speech (*dijo que…*, *según…*), past perfect, discourse connectors (*sin
embargo*, *además*, *por eso*), and building to one minute of unbroken
speech. `content/readings.ts` (currently 14 days) is the natural companion to
extend this season.

**T3 Invierno (Dic–Feb) — "Sin subtítulos."** Natural, fast, real. Colloquial
fillers (*pues*, *o sea*, *bueno*, *fíjate*), the core subjunctive taught as
chunks (*quiero que…*, *cuando llegues…*, *ojalá…*), phone-call Spanish,
interrupting and turn-taking, and gist-listening strategies — understanding
without catching every word.

**T4 Primavera (Mar–May) — "Conversación completa."** Personality and length.
Humor and light teasing, storytelling with color, gentle debate,
register-switching tú/usted on the fly, keeping a 15-minute conversation
alive, and speaking with no prep at all.

---

## Verano, week by week

Each week: **6 new days + 1 repaso day** (see the repaso recipe below).
Days 1–14 predate the weekly-arc structure and stay as-is.

| Wk | Days | Tema | Theme | Focus | Status |
|---|---|---|---|---|---|
| 1 | 1–7 | (varios) | Assert I | Wants, daily life, opinions, likes, people, past, learning | ✅ authored |
| 2 | 8–14 | (varios) | Assert II | Feelings, challenges, future, work, experiences, possibilities, identity | ✅ authored |
| 3 | 15–21 | Hacer preguntas | Asking questions | Interrogatives; turning statements into two-way talk | ✅ authored |
| 4 | 22–28 | Pedir con confianza | Asking for what you need | Transactional Spanish; day 25 = **usted register day** (school families) | ✅ authored |
| 5 | 29–35 | Reaccionar y seguir | Reacting & keeping it going | Reactions, soft agree/disagree, follow-ups, encouragement (first tú commands) | ✅ authored |
| 6 | 36–42 | Contar historias | Telling stories | Preterite vs. imperfect in narration; sequence connectors | ✅ authored |
| 7 | 43–49 | Explicar y describir | Explaining & describing | Comparisons (*más/menos que*, *tan… como*), *es como…*, *sirve para…* | ✅ authored |
| 8 | 50–56 | Consejos y ánimo | Advice & encouragement | *Deberías*, *¿por qué no…?*, *te recomiendo*, *si yo fuera tú*, *hay que* | ✅ authored |
| 9 | 57–63 | Hacer planes juntos | Making plans together | *¿Te parece si…?*, *quedamos a las…*, *me viene bien*, *nos vemos en…* | ✅ authored |
| 10 | 64–70 | Opiniones con matices | Opinions with nuance | *Depende*, *por un lado… por otro*, *puede ser*; light subjunctive after *no creo que* | ✅ authored |
| 11 | 71–77 | Resolver problemas | Fixing problems | *Hubo un problema con*, *no funciona*, *disculpe*, *creo que hay un error*; misunderstanding recovery | ✅ authored |
| 12 | 78–84 | Decir lo que sientes | Saying what you feel | *Extraño*, *estoy agradecida por*, *me da miedo*, *me hace ilusión*, *quiero que sepas* | ✅ authored |
| 13 | 85–91 | La conversación entera | The whole conversation | Capstone: openings, small talk, transitions (*bueno*, *pues*, *oye*), graceful exits; day 90 = season retrospective | ✅ authored |

Season total: 91 days (Verano has 92 calendar days; day advance is
index-based and guilt-free, so the fit is comfortable).

Context coverage across days (all four should keep appearing):
🏫 school — students & families · 🏙 everyday Boston life · ✈️ travel ·
💛 friends & personal life.

### Weeks 3–6 day specs (authored days 15–42)

**Week 3 — Hacer preguntas / Asking questions**

| Day | Theme | Stems | Contexts |
|---|---|---|---|
| 15 | Preguntas básicas | ¿Dónde está…? · ¿Dónde puedo…? · ¿Cuándo es…? · ¿Qué es…? · ¿A qué hora…? | 🏙 ✈️ 🏫 |
| 16 | Pedir aclaración (the "sin pánico" toolkit) | ¿Cómo se dice…? · ¿Qué significa…? · ¿Puedes repetir…? · ¿Puedes hablar más despacio? · No entendí… | 🏫 💛 ✈️ |
| 17 | Preguntas sobre personas | ¿De dónde eres? · ¿Quién es…? · ¿Con quién…? · ¿A qué te dedicas? · ¿Tienes…? | 💛 🏫 🏙 |
| 18 | Gustos del otro | ¿Te gusta…? · ¿Qué piensas de…? · ¿Prefieres…? · ¿Qué te pareció…? · ¿Cuál es tu … favorito/a? | 💛 🏫 |
| 19 | Permiso y posibilidad | ¿Puedo…? · ¿Puedes…? · ¿Se puede…? · ¿Hay…? · ¿Me ayudas con…? | ✈️ 🏙 🏫 |
| 20 | Preguntas de planes | ¿Qué vas a hacer…? · ¿Quieres…? · ¿Tienes tiempo para…? · ¿Qué hiciste…? · ¿Cómo estuvo…? | 💛 🏫 |
| 21 | **Repaso: preguntas** | one stem per day 15–20, new sentences | mixed |

**Week 4 — Pedir con confianza / Asking for what you need**

| Day | Theme | Stems | Contexts |
|---|---|---|---|
| 22 | En el café | Me da…, por favor · Quisiera… · Para mí… · ¿Me trae…? · ¿Cuánto cuesta…? | 🏙 |
| 23 | En la tienda | Estoy buscando… · ¿Tienen…? · ¿Dónde encuentro…? · ¿Me puede mostrar…? · Me llevo… | 🏙 ✈️ |
| 24 | Moverse por la ciudad | ¿Cómo llego a…? · ¿Este tren va a…? · Necesito llegar a… · Queda… · Está a … de… | 🏙 ✈️ |
| 25 | Con las familias (**usted day**) | ¿Me puede firmar…? · Su hijo/a necesita… · La reunión es… · ¿Puede venir…? · Le voy a mandar… | 🏫 |
| 26 | Favores | ¿Me haces un favor? · ¿Me prestas…? · ¿Me acompañas a…? · ¿Te importa si…? · Te agradezco… | 💛 |
| 27 | En el restaurante | Una mesa para… · ¿Qué me recomienda? · Sin…, por favor · ¿Está incluido…? · ¿Nos trae la cuenta? | ✈️ 🏙 |
| 28 | **Repaso: pedir** | stems from days 22–27, new places | mixed |

**Week 5 — Reaccionar y seguir / Reacting & keeping it going**

| Day | Theme | Stems | Contexts |
|---|---|---|---|
| 29 | Buenas noticias | ¡Qué bueno que…! · ¡Felicidades por…! · Me alegro por… · ¡No me digas! Cuéntame… · Qué emoción… | 💛 🏫 |
| 30 | Acompañar (hard news) | Lo siento mucho por… · Qué difícil… · Espero que se mejore… · Cuenta conmigo para… · Si necesitas algo… | 💛 🏫 |
| 31 | Estar de acuerdo | Estoy de acuerdo con… · Tienes razón en… · Claro que… · Yo también… · A mí también/tampoco… | 💛 |
| 32 | No estar de acuerdo | Sí, pero… · Depende de… · No estoy tan segura de… · No sé, creo que… · En mi caso… | 💛 🏫 |
| 33 | Mostrar interés | ¿En serio? · ¿Y luego qué pasó con…? · Cuéntame más de… · ¿Cómo te fue con…? · Suena… | 💛 |
| 34 | Dar ánimo (first tú commands) | Lo estás haciendo… · Vas muy bien con… · No te preocupes por… · Sigue practicando… · Cada día… mejor | 🏫 |
| 35 | **Repaso: reaccionar** | react five ways to one friend's week | mixed |

**Week 6 — Contar historias / Telling stories**

| Day | Theme | Stems | Grammar |
|---|---|---|---|
| 36 | Paso a paso | Primero… · Después… · Luego… · Al final… · De repente… | preterite chaining |
| 37 | La escena | Era… · Estaba… · Había… · Hacía… · Todos los días… | imperfect backdrop |
| 38 | Lo que pasó | Fui a… · Vi… · Conocí a… · Me pasó algo… · Resulta que… | preterite core |
| 39 | Escena y acción | Estaba… cuando… · Mientras… · Justo cuando… · En ese momento… · Y entonces… | imperfect + preterite (the week's peak) |
| 40 | Dentro de la historia | Pensé que… · No sabía que… · Me di cuenta de que… · Casi… · Por suerte… | inner reactions |
| 41 | Contárselo a alguien | ¿Sabes qué? · Te cuento que… · Adivina qué… · Lo mejor fue… · Total, que… | conversational framing |
| 42 | **Repaso: historias** | Estaba… cuando · Resulta que · Y entonces · Me di cuenta de que · Al final | the 5 prompts are beats of ONE true story |

### Weeks 7–13 day specs (authored days 43–91)

**Week 7 — Explicar y describir**: 43 Describir un lugar (Mi barrio es · Es un lugar · Tiene · Se siente · Está lleno de) · 44 Describir a una persona (Es una persona · Se parece a · Siempre · Lo que me gusta de… es · Es de esas personas que) · 45 Comparar (Es más/menos… que · Es tan… como · No es tan… como · Es el/la más… de) · 46 Cómo funciona (Sirve para · Se usa para · Funciona con · Primero tienes que · Es fácil de) · 47 Es como… (Es como · Es parecido a · Es un tipo de · Imagínate · Es la versión … de) · 48 Explicar por qué (Porque · Por eso · Es que · La razón es que · Como) · 49 **Repaso: explicar**.

**Week 8 — Consejos y ánimo**: 50 Deberías (Deberías · No deberías · Podrías · Sería bueno · Te haría bien) · 51 ¿Por qué no…? (¿Por qué no? · ¿Has probado? · ¿Qué tal si? · ¿Y si? · A lo mejor puedes) · 52 Te recomiendo (Te recomiendo · Te va a encantar · No te pierdas · Tienes que probar · Mi favorito es) · 53 Si yo fuera tú (Si yo fuera tú · Yo en tu lugar · Yo que tú · Lo que yo haría es · Yo empezaría por) · 54 Hay que (Hay que · No hay que · Lo importante es · No hace falta · Con el tiempo) · 55 Consejos de maestra — first tú commands (Intenta · No tengas miedo de · Recuerda que · Poco a poco · Confía en) · 56 **Repaso: consejos**.

**Week 9 — Hacer planes juntos**: 57 Proponer (¿Te parece si? · ¿Qué te parece? · Podemos · ¿Hacemos? · Tengo una idea:) · 58 Cuándo y dónde (Quedamos a las · Nos vemos en · ¿Te queda bien? · Mejor el · ¿A qué hora te viene bien?) · 59 Disponibilidad (Me viene bien · No me viene bien · Estoy libre · Tengo un compromiso · Puedo a partir de) · 60 Invitar (¿Vienes a? · Te invito a · Va a haber · Trae a · Avísame si) · 61 Cambiar planes (¿Podemos dejarlo para? · Se me complicó · ¿Lo movemos a? · Perdón por avisar tarde · Otro día sin falta) · 62 Confirmar (Entonces quedamos así: · Confirmado · Ahí estaré · Nos vemos el · Cualquier cosa, me escribes) · 63 **Repaso: planes**.

**Week 10 — Opiniones con matices**: 64 Por un lado/por otro (+ Lo bueno/malo es que · Al mismo tiempo) · 65 Puede ser (Puede ser que · Quizás · Tal vez · Es posible que · Seguramente) · 66 No creo que — light subjunctive chunks (No creo que · Dudo que · No me parece que · No es que · No estoy convencida de que) · 67 Matizar (Hasta cierto punto · En general… pero · Más bien · No tanto… sino · Digamos que) · 68 Según (Según · Dicen que · He leído que · Por lo que entiendo · En mi experiencia) · 69 Tu opinión con calma (Desde mi punto de vista · Siendo honesta · Lo veo así: · Al final de cuentas · Puede que sí, pero) · 70 **Repaso: matices**.

**Week 11 — Resolver problemas**: 71 Algo no funciona (No funciona · Está roto/a · No prende · Se descompuso · Deja de funcionar cuando) · 72 Reclamar con respeto — **usted** (Disculpe · Hubo un problema con · Creo que hay un error en · Pedí… pero · ¿Me puede ayudar con?) · 73 Malentendidos (Nos entendimos mal · No quise decir eso · Lo que quería decir es · Pensé que habías dicho · Empecemos de nuevo) · 74 Perdí (Perdí · Se me perdió · Dejé … en · ¿Alguien ha visto? · La última vez que lo vi) · 75 Pedir una solución — **usted** (¿Me lo puede cambiar? · ¿Me pueden devolver? · ¿Hay alguna manera de? · ¿Qué me sugiere? · Necesito resolver esto) · 76 Disculparse (Perdón por · Fue mi culpa · No me di cuenta de que · ¿Cómo lo arreglo? · No va a volver a pasar) · 77 **Repaso: problemas**.

**Week 12 — Decir lo que sientes**: 78 Lo que más me gusta (+ Me llena de · Disfruto mucho · Me hace feliz) · 79 Extrañar (Extraño · Echo de menos · Me acuerdo mucho de · Ojalá pudiera · Cuando pienso en…, siento…) · 80 Agradecer (Estoy agradecida por · Gracias a…, yo… · No sé qué haría sin · Significa mucho para mí · Nunca te he dicho que) · 81 Preocupaciones (Últimamente me preocupa · No dejo de pensar en · Me da miedo · A veces siento que · Necesito hablar de) · 82 Ilusiones (Me hace ilusión · Estoy contando los días para · Lo que más espero de… es · Sería un sueño · Ya quiero) · 83 Decírselo a alguien (Quiero que sepas que · Eres muy importante para mí · Admiro cómo · Gracias por estar · Contigo puedo) · 84 **Repaso: sentimientos**.

**Week 13 — La conversación entera**: 85 Abrir (¡Hola! ¿Qué tal? · ¿Cómo has estado? · ¡Tanto tiempo! · ¿Cómo va todo con? · Qué gusto verte) · 86 Charla pequeña (¿Qué me cuentas de? · Por aquí todo · Últimamente · ¿Sigues? · El clima está) · 87 Transiciones (Bueno · Pues · Oye · Hablando de · Cambiando de tema) · 88 Mantener el turno (Espera, déjame pensar · ¿Cómo te explico? · Es decir · O sea · Lo que pasa es que) · 89 Cerrar con gracia (Bueno, me tengo que ir · Fue un gusto · Te dejo, pero · Seguimos hablando · Saludos a) · 90 **Tu temporada** — season retrospective (Hace tres meses · Ahora puedo · Lo más difícil fue · Lo que más me sorprendió fue · El próximo paso es) · 91 **Repaso: la conversación entera** — one conversation in 5 beats (¡Tanto tiempo! → ¿Qué me cuentas de? → Hablando de → Lo que pasa es que → Bueno, me tengo que ir).

---

## Authoring conventions

1. **Coupled files, index-aligned.** `frames.ts` and `prompts.ts` must have
   the same number of days, with matching `day` numbers at each index
   (`app/progress/page.tsx` indexes both with the same counter).
   `content/content.test.ts` enforces this — run `npm run test` after every
   authoring pass.
2. **`prompt.spanish` is copied verbatim from a frame `examples` string** for
   the frame matching `frameStem`. This keeps the pre-generated audio
   pipeline (`npm run audio`, which reads frames) able to cover prompt
   playback. New phrases not yet in `public/audio/manifest.json` fall back to
   live `/api/tts` — fine, but don't break the convention.
3. **Register:** Latin American Spanish, tú-form, pan-Hispanic vocabulary.
   Exception: **day 25 is deliberately usted** (speaking with students'
   families); its `note` fields explain the tú→usted shift. Use that pattern
   for any future usted day — always with notes, never silently.
4. **Repaso-day recipe** (days 21, 28, 35, 42, and one per future week):
   a normal `FrameDay` + `SpeakDay` pair — no special code. Reuse 5 stems
   verbatim from the week, write 3 brand-new `examples` per frame, and give
   the day `themeEs: "Repaso: …"`. Day 42 shows a nice variant: the 5 prompts
   form the beats of a single story.
5. **Word hints:** follow `content/word-hints-prompt.md` (lowercase `en`
   keys, glosses sourced from the model `spanish`, chunk-level glosses for
   phrasal patterns, skip unglossable function words).
6. **Voice:** PRODUCT.md rules — quiet, warm-intellectual, anti-Duolingo.
   Sentences come from Marlana's real life (ESOL classroom, Boston, coding
   projects, Atlanta family, travel dreams), not from a textbook. `why` notes
   are one gentle sentence; *asterisks* mark italics.
7. **Don't split the content files yet.** frames.ts/prompts.ts stay single
   files through Verano (append-only, all consumers import these paths).
   Revisit at the Otoño boundary; if splitting then, use per-season files
   re-exported through the existing paths so imports never change.
8. **No duplicate sentences.** Before finishing a week, scan for `examples`
   or `spanish` strings that already exist on earlier days.

## Authoring checklist (per week)

1. Append 7 `FrameDay` objects to `content/frames.ts` (5 frames × stem /
   english / 3 scenarios / 3 examples / `note` where it earns its place).
2. Append 7 matching `SpeakDay` objects to `content/prompts.ts`
   (ids like `d15-donde-esta`; `spanish` verbatim from an example;
   `situationLabel` short and in Spanish; `why` with italics; `wordHints`).
3. `npm run typecheck && npm run test && npm run lint`.
4. Review pass: register (convention 3), duplicates (convention 8), voice
   (convention 6).
