# Pues — Curriculum

The year-long plan behind the daily content. Written for Marlana — 35, ESOL
teacher + aspiring developer, Boston by way of Atlanta. Goal: **speak Spanish
comfortably and confidently within a year.** Latin American Spanish, tú-form,
real life over textbook.

This file is the source of truth for future authoring sessions. The daily
content itself lives in the coupled pair `content/frames.ts` +
`content/prompts.ts` (see [Authoring conventions](#authoring-conventions)).

> **The week is load-bearing in the app now.** It used to be a label on top of a
> flat day counter; since the weekly rework it is the unit of rhythm. `/semana`
> reads one week ahead as a single sitting, and each week's 7 days are a queue
> the learner pulls at any pace (`primedWeeks` / `daysDone` in `lib/store.ts`,
> week arithmetic in `lib/planDay.ts`). Two consequences for authoring: a week's
> 7 days must keep working **in any order** — a repaso day can assume the week's
> stems were *seen*, never that day 6 was completed before day 7 — and the
> week's tema in `content/temporadas.ts` is now surfaced prominently, so it
> carries real weight rather than being a table label.

---

## The year in four temporadas

Seasons are calendar quarters (`lib/season.ts`); titles and goals live in the
`TEMPORADAS` array in `app/camino/page.tsx` and are already aligned with this
plan — no copy changes needed there.

**T1 Verano (Jul–Sep) — "El verano que hablo."** Say things out loud, every
day, until a simple conversation stops being scary. Arc: *assert* (weeks 1–2)
→ *interact* (weeks 3–6: ask, request, react, narrate) → *deepen* (weeks 7–13:
describe, advise, coordinate, hedge, repair, feel, integrate). Ends at the
season goals: una conversación simple sin pánico; leer una noticia corta
entera.

**T2 Otoño (Oct–Dic) — "Seguir el hilo."** Comprehension-led speaking: retell
and react. Weekly arcs around summarizing something read or heard, reported
speech (*dijo que…*, *según…*), past perfect, discourse connectors (*sin
embargo*, *además*, *por eso*), and building to one minute of unbroken
speech. `content/readings.ts` (91 Verano days, day-aligned with speak) is the
natural companion to extend further in Otoño.

**T3 Invierno (Ene–Mar) — "Sin subtítulos."** Natural, fast, real. Colloquial
fillers (*pues*, *o sea*, *bueno*, *fíjate*), the core subjunctive taught as
chunks (*quiero que…*, *cuando llegues…*, *ojalá…*), phone-call Spanish,
interrupting and turn-taking, and gist-listening strategies — understanding
without catching every word.

**T4 Primavera (Abr–Jun) — "Conversación completa."** Personality and length.
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
| 3.5 | woven throughout | Sobrevivir en español | Staying in Spanish | Clarification, stalling, repair, and confidence-building phrases: ¿Cómo? · Perdón, otra vez · Más despacio, por favor · Déjame pensar · No sé cómo decirlo · Entiendo más o menos | principle |
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

## Otoño, week by week (arcs)

> **Status: ✅ full season authored (days 92–182).** Weeks 2–13 live in
> `content/drafts/week{N}-*.ts` and are spread into each season's `otono.ts`
> barrel via imports.

Spine: **comprehension-led speaking** — read or hear something, then retell
and react. Season goals: seguir una historia varios días; hablar un minuto
sin parar. Phases: *retell* (weeks 1–4) → *connect* (weeks 5–8) → *react &
sustain* (weeks 9–13). Same shape as Verano: 13 weeks × (6 new days +
1 repaso), 91 days.

| Wk | Tema | Focus | Status |
|---|---|---|---|
| 1 | Resumir | Retell a short read in 3–4 sentences: *Trata de…* · *La idea principal es que…* · *En pocas palabras…* · *Lo importante es que…* · *Al final…* | ✅ authored (days 92–98) |
| 2 | Dice que… | Reported speech, present: *Dice que…* · *Según…* · *Explica que…* · *Se trata de…* · *Cuenta que…* | ✅ authored (days 99–105) |
| 3 | Dijo que… | Reported speech, past: *Dijo que…* · *Me contó que…* · *Mencionó que…* · *Preguntó si…* · *Le dijo que…* | ✅ authored (days 106–112) |
| 4 | Ya había pasado | Past perfect for backstory: *Ya había…* · *Todavía no había…* · *Nunca había…* · *Antes había…* · *Para entonces ya había…* | ✅ authored (days 113–119) |
| 5 | Además | Adding ideas: *Además…* · *También…* · *Aparte de eso…* · *No solo… sino también…* · *Encima…* | ✅ authored (days 120–126) |
| 6 | Sin embargo | Contrasting: *Sin embargo…* · *Aunque…* · *En cambio…* · *A pesar de…* · *Por otro lado…* | ✅ authored (days 127–133) |
| 7 | Por eso | Cause & consequence: *Por eso…* · *Así que…* · *Como…* · *Debido a…* · *Gracias a…* | ✅ authored (days 134–140) |
| 8 | Ordenar las ideas | Discourse skeleton: *Primero que nada…* · *En cuanto a…* · *Por último…* · *Volviendo a lo de…* · *En resumen…* | ✅ authored (days 141–147) |
| 9 | ¿Te enteraste? | Sharing news: *¿Te enteraste de…?* · *Vi que…* · *Resulta que…* · *Al parecer…* · *Me contaron que…* | ✅ authored (days 148–154) |
| 10 | Opinar sobre lo leído | Reacting to input: *Lo que más me llamó la atención fue…* · *Lo que no entiendo es…* · *Me dio gusto leer que…* · *Me sorprendió que…* · *Creo que el autor…* | ✅ authored (days 155–161) |
| 11 | Seguir la historia | Serialized retelling (the season-goal week): *La última vez…* · *Mientras tanto…* · *Al día siguiente…* · *Ahora resulta que…* · *Desde entonces…* | ✅ authored (days 162–168) |
| 12 | El minuto entero | Scaffolded monologue: *Hoy quiero hablar de…* · *Hay tres cosas que…* · *Lo primero es…* · *Lo segundo es…* · *Para terminar…* | ✅ authored (days 169–175) |
| 13 | Capstone | Retell + react + sustain in one; day-90-equivalent season retrospective; repaso = a one-minute retell of the season | ✅ authored (days 176–182) |

**The structural idea for Otoño:** La Lectura graduates from bedtime extra
to the season's input backbone. Each week gets a **serialized mini-story**
(6 installments + a repaso recap) in `readings.ts`, and the day's speaking
prompts retell/react to that day's installment — read → retell → react.
That literally implements "seguir una historia varios días." Verano now has
91 day-aligned readings (bedtime extra); Otoño is where readings become the
input backbone coupled to prompts. `ReadingDay` gained `storyTitle`/`part`/
`partsTotal`/`isRecap` fields for this (optional, additive — Verano's 91
entries are untouched); `content/content.test.ts` has a
`readings.ts serialization` block enforcing them.

### Week 1 day specs (authored days 92–98)

**Week 1 — Resumir / Summing up**

One small toolkit, reused all week (not a new set of stems per day, unlike
Verano) — the point is drilling retelling against fresh input, the way a
reading-strategies lesson would. Story: **"Naty se muda"** — Marlana updates
her coworker Priya, day by day in the teachers' lounge, on her friend Naty's
move from Atlanta to Boston for a junior developer job (mirrors Marlana's own
Atlanta roots and aspiring-developer arc). Six installments in `readings.ts`
(`storyTitle: "Naty se muda"`, `part`/`partsTotal: 6`); day 98's repaso
reading is a fresh recap (`isRecap: true`).

Stems (all 5, every day): *Trata de…* · *La idea principal es que…* ·
*En pocas palabras…* · *Lo importante es que…* · *Al final…*

| Day | Tema | Reading beat (Cap. N de 6) |
|---|---|---|
| 92 | Buenas noticias | Naty got the job; is moving to Boston |
| 93 | Empacando | Chaotic packing, mom coming to help |
| 94 | El camino | 18-hour drive, arrives past midnight |
| 95 | El apartamento nuevo | Tiny apartment, a little homesick |
| 96 | El primer día | Nervous first day; a coworker helps her |
| 97 | Ya se siente en casa | A month in: new friend, favorite coffee shop |
| 98 | **Repaso: resumir** | Recap — Priya asks how Naty's doing a month later |

### Weeks 2–13 serialized stories (authored days 99–182)

Each week reuses one stem toolkit all week (like Week 1), with a new
serialized mini-story (6 installments + repaso):

| Wk | Story | Days |
|---|---|---|
| 2 | La carta de la abuela | 99–105 |
| 3 | La entrevista de Marcos | 106–112 |
| 4 | El día del huracán | 113–119 |
| 5 | La feria escolar | 120–126 |
| 6 | El cambio de horario | 127–133 |
| 7 | La avería del coche | 134–140 |
| 8 | La presentación de Priya | 141–147 |
| 9 | Las noticias del barrio | 148–154 |
| 10 | El artículo | 155–161 |
| 11 | El regreso de Diego | 162–168 |
| 12 | Mi semana de práctica | 169–175 |
| 13 | Mi otoño en Pues | 176–182 |

## Invierno, week by week (authored days 183–273)

Spine: **natural, fast, real** — colloquial glue, the subjunctive as
chunks (the way week 6 taught preterite/imperfect: as stems you complete,
never as tables), and real-time conversation mechanics. Phases: *sound
natural* (weeks 1–4) → *subjunctive chunks* (weeks 5–8) → *real-time*
(weeks 9–13). Invierno has 90 calendar days for 91 content days — fine;
day advance is index-based and guilt-free.

Each week reuses one five-stem toolkit all week, with a serialized
mini-story (6 installments + repaso), same as Otoño.

| Wk | Tema · story | Days | Five stems |
|---|---|---|---|
| 1 | Muletillas I · El intercambio | 183–189 | *Pues* · *Bueno* · *O sea* · *Es que* · *A ver* — the app's namesake week |
| 2 | Muletillas II · Las muletillas de Camila | 190–196 | *Fíjate que* · *La verdad es que* · *Digo* · *¿Me entiendes?* · *En fin…* |
| 3 | Al teléfono · Sin cara, solo voz | 197–203 | *¿Aló?* · *Le habla…* · *¿De parte de quién?* · *¿Me escuchas?* · *Se cortó* — day 198 is deliberately usted |
| 4 | Notas de voz · Un audio de dos minutos | 204–210 | *Te mando un audio porque…* · *Era para decirte que…* · *Te cuento rapidito* · *Avísame cuando puedas* · *Cualquier cosa, me escribes* |
| 5 | Quiero que… · La noche de las familias | 211–217 | Subjunctive chunk 1, wanting: *quiero que* · *necesito que* · *prefiero que* · *me gustaría que* · *¿quieres que…?* |
| 6 | Cuando llegues… · La tormenta | 218–224 | Subjunctive chunk 2, future time: *cuando* · *en cuanto* · *hasta que* · *antes de que* · *apenas* |
| 7 | Ojalá · La abuela de Camila | 225–231 | Subjunctive chunk 3, wishes: *ojalá* · *espero que* · *que te vaya bien* · *que descanses* · *ojalá pudiera* |
| 8 | Es mejor que… · La estudiante nueva | 232–238 | Subjunctive chunk 4, advice II: *es mejor que* · *es importante que* · *no hace falta que* · *te sugiero que* · *más vale que* |
| 9 | Interrumpir · La junta del comité | 239–245 | *Perdona que te interrumpa* · *Espera, espera* · *Antes de que se me olvide* · *Una cosa…* · *Sí, sí, pero* |
| 10 | El turno · La conversación de tres | 246–252 | *¿Y tú qué opinas?* · *Déjame terminar* · *A eso voy* · *Como te decía* · *Ajá, claro* |
| 11 | Sin captar todo · Sin subtítulos | 253–259 | Gist toolkit — extends, never repeats, day 16's clarification stems: *Más o menos entendí que…* · *Lo que sí entendí fue…* · *¿Dijiste que…?* · *Se me escapó la parte de…* · *Por el contexto entiendo que…* |
| 12 | A velocidad real · La panadería | 260–266 | Linking & reductions, applied to whole chunks (`content/linking.ts` teaches the mechanics): *¿Qué hubo?* → quiubo · *Voy a* · *Para que* → pa' que · *Está bien* → tá bien · *¿Y eso?* |
| 13 | Ida y vuelta · El invierno entero | 267–273 | Capstone — one stem per movement of the season: *Pues* (wk 1) · *Quiero que* (wk 5) · *Perdona que te interrumpa* (wk 9) · *¿Y tú qué opinas?* (wk 10) · *Más o menos entendí que* (wk 11). Day 271 uses the day-42 variant: its five prompts are the beats of one conversation. |

**Listener signals (the former "week 2.5").** An extra half-week was
sketched here for *ajá · claro · ya · exacto · entiendo · sí, sí*. It was
folded in rather than added: the season is 13 weeks / 91 days, which
`app/camino/page.tsx` and `lib/planDay.ts` both hard-code. Day 195 gives
it a story beat ("Escuchar en voz alta"), and week 10's fifth stem
(*Ajá, claro…*) is the dedicated frame.

**Boundary decision — resolved, deferred.** The "sin subtítulos" goal
wanted listen-first La Lectura days (audio before the text reveals).
Invierno was authored in the standard Otoño shape instead, so the
decision now has 91 days of real content to be tried against rather than
being made in the abstract. Revisit at the Primavera boundary.

## Primavera, week by week (authored days 274–364)

Spine: **personality and length** — humor, color, gentle debate, and the
15-minute conversation. Phases: *your voice* (weeks 1–4) → *holding your
own* (weeks 5–8) → *going long* (weeks 9–13). Same shape as Invierno:
13 weeks × (6 new days + 1 repaso), five stems per week, serialized
mini-story in La Lectura.

| Wk | Tema · story | Days | Five stems |
|---|---|---|---|
| 1 | Cómo reacciono · Sonar como yo | 274–280 | *Ay, no…* · *Te juro que…* · *La verdad es que…* · *Me da una cosa…* · *No sé, a mí…* — personality lives in reactions, not in self-description |
| 2 | Humor ligero · La broma que salió sola | 281–287 | *Te estoy tomando el pelo* · *¡Qué va!* · *No exageres* · *Mira quién habla* · *¿En serio?* |
| 3 | Exagerar con gracia · Mil años en el metro | 288–294 | *Me muero de…* · *Tardé mil años* · *Es lo mejor del mundo* · *Es lo peor del mundo* · *Es una barbaridad* |
| 4 | Historias con sabor · Lo del ascensor | 295–301 | *No te vas a creer lo que…* · *Para colmo…* · *Y de repente, ¡pum!* · *Y lo peor es que…* · *Imagínate que…* |
| 5 | Debate suave I · El celular en clase | 302–308 | *Entiendo tu punto, pero…* · *Yo lo veo distinto* · *¿No crees que…?* · *Puede ser, pero…* · *No estoy segura de que…* |
| 6 | Debate suave II · La tía en Atlanta | 309–315 | *Puede que tengas razón en…* · *Aun así…* · *No había pensado en eso* · *Tienes un punto* · *Me convenzo hasta cierto punto* |
| 7 | Cambiar de registro · La misma frase, dos formas | 316–322 | *Oye, ¿tienes un momento?* / *Disculpe, ¿tendría un momento?* · *Te quería comentar que…* / *Le quería comentar que…* · *¿Me dejas explicarte?* / *¿Me permite explicarle?* · *Muchas gracias por tu tiempo* / *…por su tiempo* · *Oye, perdona…* / *Con permiso…* — third usted week |
| 8 | Temas grandes · Lo que se pierde | 323–329 | *A mí lo que me molesta es…* · *Lo que pasa es que…* · *No es que…* · *Yo lo que veo es…* · *¿Tú qué harías?* — big topics in spoken register: feeling, context, reframe, evidence, handoff |
| 9 | Profundizar · El problema de Rocío | 330–336 | *¿Y eso?* · *¿Cómo así?* · *¿Y qué pasó con…?* · *¿Y después?* · *¿En serio?* — repaso folds in week 9.5 retell beat |
| 10 | Sin preparación · La pregunta sin aviso | 337–343 | *Lo primero que se me ocurre es…* · *A ver qué sale…* · *Ni idea, pero…* · *Depende, creo que…* · *Creo que diría que…* |
| 11 | Conversación larga I · Cuarenta minutos seguidos | 344–350 | *Volviendo a lo que dijiste…* · *Como te contaba…* · *Eso me recuerda…* · *Antes de que se me olvide…* · *Donde íbamos…* |
| 12 | Conversación larga II · Cuando se enfría | 351–357 | *Bueno, ¿y qué más?* · *Se me olvidaba contarte…* · *Oye, y cambiando de tema…* · *Por cierto…* · *Ah, y otra cosa…* |
| 13 | La última clase · Capstone | 358–364 | One stem per primavera movement: *La verdad es que…* (wk 1) · *Te estoy tomando el pelo* (wk 2) · *Entiendo tu punto, pero…* (wk 5) · *Lo primero que se me ocurre es…* (wk 10) · *Volviendo a lo que dijiste…* (wk 11). The end-of-year potluck for the evening class saved in week 8. Day 361 = **usted day** (Diego's mother); day 363 = one conversation in five beats; day 364 = closing the room. The year is subtext throughout and never the topic |

**Week 9.5 (La misma historia, mejor).** Folded into week 9 repaso dialogue
(Marlana retells Rocío's story with increasing detail) rather than adding a
half-week — the year stays 13 × 7 = 91 days.

---

## Supporting surfaces

The daily frames/prompts are the spine; this section keeps the supporting
content from falling a season behind. (The cautionary tale: Sentence
Former shipped covering days 1–7 while frames were already at 91.)

### Seasonal celebrations

At the end of each season, reinforce identity rather than grammar.

- **Verano:** “You can ask questions, tell simple stories, and survive a basic conversation.”
- **Otoño:** “You can follow a story and explain it to someone else.”
- **Invierno:** “You can understand the general idea even when you miss words.”
- **Primavera:** “You can have a real conversation as yourself.”

These should appear in the Camino experience, season retrospectives, and any future milestone surfaces.

### Sentence Former (`content/sentenceFormer.ts`)

- **Backfill Verano:** extend day-aligned banks from 8 → 91 in weekly
  batches of 7 days. Start with the week around the current in-app day for
  immediate play value, then fill outward.
- Per day: mirror all 5 frame stems; ~5 completions each; hints
  (`que`/`como`/`cuando`) only where natural — omit a group rather than
  force it.
- **Going forward:** banks are authored in the same pass as the week's
  frames/prompts (checklist step 3 below).
- With the first backfill batch (not before), add a `content.test.ts`
  guard: every `SentenceFormerDay.day` exists in frames, every stem
  matches a `Frame.stem` of that day, no duplicate days, `es` lowercase —
  and update the file's header comment, which currently says it isn't
  coupling-tested.
- ~~The flat day-selector UI won't scale to 91 days (group by week/tema, or
  default to the current day).~~ **Resolved** by the weekly rework:
  `components/PlanSchedule.tsx` now renders one row per week (26, not 182),
  each opening onto its days via `components/WeekDayList.tsx`, with the
  current week expanded by default. Sentence Former's own day selector is
  the remaining instance of this pattern.
- ~~One flag still open: the `category` enum
  (`food/time/activity/opinion/other`) may need widening for later weeks
  (feelings, problems) — or just default to `other`.~~ **Resolved** in
  Invierno: the enum stays as-is, and the season's conversational and
  subjunctive completions use `"other"` wherever none of the narrower
  buckets fit. No type change was needed across 91 days.

### La Lectura (`content/readings.ts`)

- **Verano: 91 days**, day-aligned with the speak plan — a purely receptive
  bedtime extra; themes match `speakDays[i].themeEs` at each index.
- **Otoño: daily and load-bearing** — the serialized weekly mini-stories
  described above, coupled to the day's prompts.
- **Invierno: daily and load-bearing**, same shape as Otoño — thirteen
  self-contained weekly mini-stories with a new cast (Camila, a Colombian
  nurse working nights in Boston; Rocío, a Guatemalan colleague two
  classrooms away; Yesenia, a new adult student), unconnected to Otoño's
  "Naty se muda". The listen-first variant was deferred, not dropped —
  see the Invierno section above.
- **Primavera: daily and load-bearing**, same shape — continues the
  Marlana/Camila Thursday arc through personality, debate, long conversation,
  and a year capstone on day 364.

### Las palabras (`content/vocab.ts`)

The Fluent Forever 625 — 624 authored high-frequency words in 27 themes,
surfaced at `/palabras` as a triage sweep plus a recall drill. Unlike every
other supporting surface this one is **not per-week work**: it is a one-time
backfill, complete as of this pass, and it does not appear in the weekly
authoring checklist.

- **Layout:** one file per authoring batch under `content/vocab/`
  (`casa`, `gente`, `mundo`, `cosas`, `tiempo`, `acciones`, `cualidades`),
  types in `content/vocab/types.ts`, thin barrel at `content/vocab.ts`
  (convention 7). A theme lives entirely inside one file.
- **Entry conventions:** nouns carry their article so gender is learned with
  the word; verbs are infinitives; adjectives are masculine-singular citation
  form with agreement shown at work in the example. One headword per entry —
  never `el maestro / la maestra`, which breaks TTS, overflows the recall
  card, and has no honest id. One example sentence of ≤ 14 words in the
  register of conventions 3 and 9 and the voice of convention 6, plus its
  English.
- **Ids** are `v-<theme>-<headword>`, **fixed at authoring time and never
  re-derived**. `pues:vocab` is keyed by them, so a corrected headword or a
  reworded gloss must keep its old id — otherwise the word silently reverts to
  unseen and the owner re-sweeps work they already did. The test checks format
  and uniqueness, deliberately never derivation.
- **Convention 8 applies** and is enforced: `content/vocab.test.ts` checks
  every example against every Spanish string in `frames`, `prompts`,
  `readings` and `situations`.
- **Documented deviations.** Two places where the source list and Spanish
  disagree, both recorded so a later editor doesn't "fix" them back:
  - *Números* keeps all 58 entries, including the tens and the compound
    patterns, because numbers are where listening actually fails. Every
    example puts its number in a real use — a price, an age, a room, a year —
    and the traps are demonstrated rather than explained (`veintiún`,
    `treinta y un`, `cien` vs. `ciento`). `mil millones` glosses the English
    "billion"; `un billón` is a thousand times larger and is a false friend
    the source list walks straight into.
  - *Adjetivos* repeats `alto` and `bajo`, because English splits tall/high
    and short/low where Spanish does not. Two cards with the same answer is
    the honest outcome; inventing a synonym to avoid it would teach a word
    nobody says. The test carries an explicit `ALLOWED_HOMOGRAPHS` list, so
    any *other* repeat is still an authoring slip.
- **Not audio-generated.** `scripts/generate-audio.ts` does not cover vocab
  (it doesn't cover readings either), so playback runs on the live `/api/tts`
  fallback. Headword play buttons pass the example as `contextBefore` so a
  one-word clip gets Spanish prosody. Adding vocab to the audio script is a
  one-line follow-up if the 1,248 calls are ever worth it.

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
   **Author English-first, then satisfy this rule.** The verbatim requirement
   has quietly meant *compose the Spanish, then gloss it into English*, and
   glossed English reads like translated literature — the exact "I'd never
   say that" failure. Write the English thought first (what would you actually
   say to this person, in this moment?), then the Spanish, then back-fill the
   frame's `examples`. Same end state, same test, spoken English.
3. **Register:** Latin American Spanish, tú-form, pan-Hispanic vocabulary.
   Exception: **day 25 is deliberately usted** (speaking with students'
   families); its `note` fields explain the tú→usted shift. Use that pattern
   for any future usted day — always with notes, never silently.
4. **Repaso-day recipe** (days 21, 28, 35, 42, and one per future week):
   a normal `FrameDay` + `SpeakDay` pair — no special code. Reuse 5 stems
   verbatim from the week, write 3 brand-new `examples` per frame, and give
   the day `themeEs: "Repaso: …"`. Day 42 shows a nice variant: the 5 prompts
   form the beats of a single story.
   **A repaso is a new scene, not a review of the week.** The mechanics above
   are not the whole recipe, and every season has drifted here: repaso days
   slide into retrospective ("*Tardé mil años* became my way of telling time",
   "five stems, three topics, one table"), which spends 1 day in 7 talking
   about the curriculum instead of talking. Hard rules: no prompt may quote a
   stem as an object, and no prompt may mention practice, progress, the week,
   or the app. Put the five stems in a *fresh situation* — Sunday's phone
   call, a different hallway, the same person on a worse day — and let the
   review happen by using them, not by naming them.
5. **Word hints:** follow `content/word-hints-prompt.md` (lowercase `en`
   keys, glosses sourced from the model `spanish`, chunk-level glosses for
   phrasal patterns, skip unglossable function words).
6. **Voice:** PRODUCT.md rules — quiet, warm-intellectual, anti-Duolingo.
   Sentences come from Marlana's real life (ESOL classroom, Boston, coding
   projects, Atlanta family, travel dreams), not from a textbook. `why` notes
   are one gentle sentence; *asterisks* mark italics. Lean unapologetically into Marlana's real contexts: teaching, Boston life, building software, family, travel dreams, and everyday adult responsibilities.
7. **Content files are split per season.** Done at the Otoño boundary:
   `frames.ts`, `prompts.ts`, `sentenceFormer.ts`, and `readings.ts` are now
   thin barrels that concatenate `content/<name>/verano.ts` +
   `content/<name>/otono.ts` (types live in `content/<name>/types.ts`,
   imported by both season files, never the barrel — no circular imports).
   Every consumer still imports the original top-level path; nothing else
   changes. Append new weeks to the current season's file; add a new
   `content/<name>/invierno.ts` + barrel import at the next boundary.
8. **No duplicate sentences.** Before finishing a week, scan for `examples`
   or `spanish` strings that already exist on earlier days.
9. **Contemporary Latin American register.** A hard requirement on every
   Spanish string, not a review afterthought — the content should sound
   like someone talking now, not like a textbook from twenty years ago.
   - **Use** the texture of how people actually talk: *te mando un audio*,
     *te paso el link*, *te comparto*, *una videollamada*, *el chat*,
     *quedó en visto*, *se cortó la llamada*, *te marco*, *ponme en
     altavoz*, *el buzón de voz*, *una barra de señal*.
   - **Avoid (Spain-coded):** *vosotros*, *vale* as an interjection,
     *guay*, *móvil*, *ordenador*, *coger* (use *tomar* / *agarrar*),
     *¿Diga?* on the phone, *tío/tía* as address.
   - **Avoid (dated / textbook-only):** canned exchanges no adult says
     (*"Muy bien, gracias, ¿y usted?"* as a unit), operator-era phone
     Spanish (switchboards, *contestador*, *centralita*), and
     *fax / mensaje de texto* where *audio / chat / link* is what's real.
   - **Regionalisms are fine only when a `note` flags them as such.**
     Invierno day 258 uses *chévere* deliberately — Camila is Colombian,
     and both the frame note and the dialogue name it as a
     Colombia/Caribbean word. Guessing it from context is the lesson.
   - Weeks about phones and messaging are the highest-risk: ground them in
     cell phones and voice notes, never landlines.

## Authoring checklist (per week)

1. Append 7 `FrameDay` objects to `content/frames.ts` (5 frames × stem /
   english / 3 scenarios / 3 examples / `note` where it earns its place).
2. Append 7 matching `SpeakDay` objects to `content/prompts.ts`
   (ids like `d15-donde-esta`; `spanish` verbatim from an example;
   `situationLabel` short and in Spanish; `why` with italics; `wordHints`).
3. Append 7 matching `SentenceFormerDay` banks to
   `content/sentenceFormer.ts` (stems verbatim from the week's frames;
   ~5 completions each; hints only where natural). Same pass, always —
   see [Supporting surfaces](#supporting-surfaces).
4. From Otoño on: append the week's `ReadingDay` installments to
   `content/readings.ts` (the serialized mini-story; vocab pulled from the
   text itself).
5. `npm run typecheck && npm run test && npm run lint`.
6. Review pass: register (convention 3), duplicates (convention 8), voice
   (convention 6).
