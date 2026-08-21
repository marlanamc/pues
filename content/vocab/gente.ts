import type { VocabTheme } from "./types";

/**
 * Gente · Trabajos · Sociedad · Arte — 90 words.
 *
 * The abstract half, and the slowest to author: a word like *la elección* or
 * *la energía* suggests no scene on its own, which is exactly how a list like
 * this slides into textbook-neutral. Each theme was written against a
 * situation rather than down a column — the Thursday night class, a call with
 * Atlanta, the news on in another room.
 */

export const gente: VocabTheme = {
  slug: "gente",
  label: "Gente",
  labelEn: "People",
  words: [
    { id: "v-gente-hijo", es: "el hijo", en: "son", example: "Su hijo mayor la trae a clase los martes.", exampleEn: "Her oldest son brings her to class on Tuesdays." },
    { id: "v-gente-hija", es: "la hija", en: "daughter", example: "Mi hija todavía no habla, pero entiende todo.", exampleEn: "My daughter doesn't talk yet, but she understands everything." },
    { id: "v-gente-madre", es: "la madre", en: "mother", example: "Mi madre llama los domingos sin falta.", exampleEn: "My mother calls on Sundays without fail." },
    { id: "v-gente-padre", es: "el padre", en: "father", example: "Su padre trabajó treinta años en la misma fábrica.", exampleEn: "His father worked thirty years at the same factory." },
    { id: "v-gente-padres", es: "los padres", en: "parent (= mother/father)", example: "Los padres vienen a las reuniones de la escuela.", exampleEn: "The parents come to the school meetings." },
    { id: "v-gente-bebe", es: "el bebé", en: "baby", example: "Trae al bebé a clase cuando no consigue quién lo cuide.", exampleEn: "She brings the baby to class when she can't find a sitter." },
    { id: "v-gente-hombre", es: "el hombre", en: "man", example: "Hay un hombre en la fila de atrás que nunca falta.", exampleEn: "There's a man in the back row who never misses." },
    { id: "v-gente-mujer", es: "la mujer", en: "woman", example: "Es la mujer que me enseñó a hacer el arroz.", exampleEn: "She's the woman who taught me to make the rice." },
    { id: "v-gente-hermano", es: "el hermano", en: "brother", example: "Mi hermano me manda audios de diez minutos.", exampleEn: "My brother sends me ten-minute voice notes." },
    { id: "v-gente-hermana", es: "la hermana", en: "sister", example: "Mi hermana se acuerda de todo lo que yo olvido.", exampleEn: "My sister remembers everything I forget." },
    { id: "v-gente-familia", es: "la familia", en: "family", example: "Toda mi familia sigue en Atlanta.", exampleEn: "My whole family is still in Atlanta." },
    { id: "v-gente-abuelo", es: "el abuelo", en: "grandfather", example: "Mi abuelo nunca aprendió a manejar.", exampleEn: "My grandfather never learned to drive." },
    { id: "v-gente-abuela", es: "la abuela", en: "grandmother", example: "Su abuela le enseñó las canciones que canta.", exampleEn: "Her grandmother taught her the songs she sings." },
    { id: "v-gente-esposo", es: "el esposo", en: "husband", example: "Su esposo la espera afuera con el carro prendido.", exampleEn: "Her husband waits outside with the car running." },
    { id: "v-gente-esposa", es: "la esposa", en: "wife", example: "Habla de su esposa en cada ejercicio.", exampleEn: "He mentions his wife in every exercise." },
    { id: "v-gente-rey", es: "el rey", en: "king", example: "En el cuento el rey nunca sale de su cuarto.", exampleEn: "In the story the king never leaves his room." },
    { id: "v-gente-reina", es: "la reina", en: "queen", example: "La reina de ese libro me cae bien.", exampleEn: "I like the queen in that book." },
    { id: "v-gente-presidente", es: "el presidente", en: "president", example: "En clase salió el tema del presidente y se acabó la gramática.", exampleEn: "The president came up in class and that was the end of grammar." },
    { id: "v-gente-vecino", es: "el vecino", en: "neighbor", example: "Mi vecino me guarda los paquetes.", exampleEn: "My neighbor holds my packages for me." },
    { id: "v-gente-nino", es: "el niño", en: "boy", example: "Ese niño se sabe los nombres de todos.", exampleEn: "That boy knows everyone's name." },
    { id: "v-gente-nina", es: "la niña", en: "girl", example: "La niña dibujó el mapa de memoria.", exampleEn: "The girl drew the map from memory." },
    { id: "v-gente-menor", es: "el menor", en: "child (= boy/girl)", example: "Los menores entran gratis al museo.", exampleEn: "Children get into the museum free." },
    { id: "v-gente-adulto", es: "el adulto", en: "adult (= man/woman)", example: "Enseño a adultos que trabajan todo el día.", exampleEn: "I teach adults who work all day." },
    { id: "v-gente-ser-humano", es: "el ser humano", en: "human (≠ animal)", example: "Ningún ser humano aprende un idioma sin equivocarse.", exampleEn: "No human being learns a language without messing up." },
    { id: "v-gente-amigo", es: "el amigo", en: "friend", example: "Un amigo me presta el sótano para grabar.", exampleEn: "A friend lends me his basement to record in." },
    { id: "v-gente-victima", es: "la víctima", en: "victim", example: "En las noticias solo dijeron el nombre de la víctima.", exampleEn: "On the news they only gave the victim's name." },
    { id: "v-gente-jugador", es: "el jugador", en: "player", example: "Su jugador favorito se lesionó otra vez.", exampleEn: "His favorite player got injured again." },
    { id: "v-gente-aficionado", es: "el aficionado", en: "fan", example: "Los aficionados llenaron el bar desde temprano.", exampleEn: "The fans packed the bar from early on." },
    { id: "v-gente-multitud", es: "la multitud", en: "crowd", example: "Salí del tren y me tragó la multitud.", exampleEn: "I got off the train and the crowd swallowed me." },
    { id: "v-gente-persona", es: "la persona", en: "person", example: "Es la persona más puntual de la clase.", exampleEn: "She's the most punctual person in the class." },
  ],
};

export const trabajos: VocabTheme = {
  slug: "trabajos",
  label: "Trabajos",
  labelEn: "Job",
  words: [
    { id: "v-trabajos-maestra", es: "la maestra", en: "teacher", example: "La maestra nueva ya se sabe todos los nombres.", exampleEn: "The new teacher already knows everyone's name." },
    { id: "v-trabajos-estudiante", es: "el estudiante", en: "student", example: "Tengo un estudiante que llega antes que yo.", exampleEn: "I have a student who arrives before I do." },
    { id: "v-trabajos-abogado", es: "el abogado", en: "lawyer", example: "Necesita un abogado y no sabe por dónde empezar.", exampleEn: "She needs a lawyer and doesn't know where to start." },
    { id: "v-trabajos-medico", es: "el médico", en: "doctor", example: "El médico le habló muy rápido y no entendió nada.", exampleEn: "The doctor spoke too fast and she didn't catch a thing." },
    { id: "v-trabajos-paciente", es: "el paciente", en: "patient", example: "Atiende a treinta pacientes en un turno.", exampleEn: "She sees thirty patients in one shift." },
    { id: "v-trabajos-mesero", es: "el mesero", en: "waiter", example: "El mesero nos habló en inglés y le seguimos en español.", exampleEn: "The waiter spoke to us in English and we kept going in Spanish." },
    { id: "v-trabajos-secretaria", es: "la secretaria", en: "secretary", example: "La secretaria de la escuela resuelve más que nadie.", exampleEn: "The school secretary fixes more than anyone." },
    { id: "v-trabajos-sacerdote", es: "el sacerdote", en: "priest", example: "El sacerdote dio la misa en dos idiomas.", exampleEn: "The priest gave the mass in two languages." },
    { id: "v-trabajos-policia", es: "el policía", en: "police", example: "Un policía nos indicó otro camino.", exampleEn: "A police officer pointed us another way." },
    { id: "v-trabajos-ejercito", es: "el ejército", en: "army", example: "Su hermano entró al ejército a los diecinueve.", exampleEn: "Her brother joined the army at nineteen." },
    { id: "v-trabajos-soldado", es: "el soldado", en: "soldier", example: "En la foto sale de soldado, muy joven.", exampleEn: "In the photo he's a soldier, very young." },
    { id: "v-trabajos-artista", es: "el artista", en: "artist", example: "Hay una artista en la clase que dibuja mientras escucha.", exampleEn: "There's an artist in the class who draws while she listens." },
    { id: "v-trabajos-autor", es: "el autor", en: "author", example: "Busqué al autor y resulta que vive aquí cerca.", exampleEn: "I looked up the author and it turns out he lives near here." },
    { id: "v-trabajos-gerente", es: "el gerente", en: "manager", example: "El gerente no le da los jueves libres.", exampleEn: "The manager won't give her Thursdays off." },
    { id: "v-trabajos-periodista", es: "el periodista", en: "reporter", example: "Vino una periodista a escribir sobre el programa.", exampleEn: "A reporter came to write about the program." },
    { id: "v-trabajos-actor", es: "el actor", en: "actor", example: "Reconocí al actor pero no me salió el nombre.", exampleEn: "I recognized the actor but couldn't come up with his name." },
    { id: "v-trabajos-trabajo", es: "el trabajo", en: "job", example: "Cambió de trabajo y ahora le queda lejos.", exampleEn: "She changed jobs and now it's far from her." },
  ],
};

export const sociedad: VocabTheme = {
  slug: "sociedad",
  label: "Sociedad",
  labelEn: "Society",
  words: [
    { id: "v-sociedad-religion", es: "la religión", en: "religion", example: "De religión no hablamos en clase, y está bien así.", exampleEn: "We don't talk religion in class, and that's fine." },
    { id: "v-sociedad-cielo", es: "el cielo", en: "heaven", example: "Su abuela le decía que el cielo se parecía a su pueblo.", exampleEn: "Her grandmother told her heaven looked like her hometown." },
    { id: "v-sociedad-infierno", es: "el infierno", en: "hell", example: "Ese trámite fue un infierno de tres meses.", exampleEn: "That paperwork was a three-month hell." },
    { id: "v-sociedad-muerte", es: "la muerte", en: "death", example: "Después de la muerte de su papá dejó de venir un tiempo.", exampleEn: "After her father's death she stopped coming for a while." },
    { id: "v-sociedad-medicina", es: "la medicina", en: "medicine", example: "No entendió las instrucciones de la medicina.", exampleEn: "She didn't understand the instructions on the medicine." },
    { id: "v-sociedad-dinero", es: "el dinero", en: "money", example: "El dinero se va en el alquiler y ya.", exampleEn: "The money goes to rent and that's it." },
    { id: "v-sociedad-dolar", es: "el dólar", en: "dollar", example: "Cada dólar que manda se le nota en la cara.", exampleEn: "You can see every dollar he sends home on his face." },
    { id: "v-sociedad-factura", es: "la factura", en: "bill", example: "Llegó la factura de la luz y era el doble.", exampleEn: "The electric bill came and it was double." },
    { id: "v-sociedad-matrimonio", es: "el matrimonio", en: "marriage", example: "Llevan un matrimonio de veinte años y se ríen igual.", exampleEn: "They've had a twenty-year marriage and still laugh the same." },
    { id: "v-sociedad-boda", es: "la boda", en: "wedding", example: "Se perdió tres clases por la boda de su hermana.", exampleEn: "She missed three classes for her sister's wedding." },
    { id: "v-sociedad-equipo", es: "el equipo", en: "team", example: "Armamos un equipo para el proyecto final.", exampleEn: "We put together a team for the final project." },
    { id: "v-sociedad-raza", es: "la raza", en: "race (ethnicity)", example: "En el formulario preguntan la raza y nadie sabe qué marcar.", exampleEn: "The form asks for race and nobody knows what to check." },
    { id: "v-sociedad-sexo", es: "el sexo", en: "sex (the act)", example: "El folleto de la clínica habla de sexo sin rodeos.", exampleEn: "The clinic's pamphlet talks about sex directly." },
    { id: "v-sociedad-genero", es: "el género", en: "sex (gender)", example: "El formulario pide el género antes que el nombre.", exampleEn: "The form asks for gender before the name." },
    { id: "v-sociedad-asesinato", es: "el asesinato", en: "murder", example: "Pasaron toda la noche hablando del asesinato en las noticias.", exampleEn: "They spent all night talking about the murder on the news." },
    { id: "v-sociedad-carcel", es: "la cárcel", en: "prison", example: "Su primo salió de la cárcel el mes pasado.", exampleEn: "Her cousin got out of prison last month." },
    { id: "v-sociedad-tecnologia", es: "la tecnología", en: "technology", example: "La tecnología de la escuela va diez años atrás.", exampleEn: "The school's technology is ten years behind." },
    { id: "v-sociedad-energia", es: "la energía", en: "energy", example: "Los jueves llego sin energía para nada.", exampleEn: "On Thursdays I get home with no energy for anything." },
    { id: "v-sociedad-guerra", es: "la guerra", en: "war", example: "Salió de su país por la guerra, aunque no lo cuenta.", exampleEn: "He left his country because of the war, though he doesn't talk about it." },
    { id: "v-sociedad-paz", es: "la paz", en: "peace", example: "A las nueve de la noche por fin hay paz en la casa.", exampleEn: "By nine at night there's finally peace in the house." },
    { id: "v-sociedad-ataque", es: "el ataque", en: "attack", example: "El ataque salió en todos los canales.", exampleEn: "The attack was on every channel." },
    { id: "v-sociedad-eleccion", es: "la elección", en: "election", example: "Antes de la elección todos preguntan lo mismo.", exampleEn: "Before the election everyone asks the same thing." },
    { id: "v-sociedad-revista", es: "la revista", en: "magazine", example: "Traje una revista vieja para recortar palabras.", exampleEn: "I brought an old magazine to cut words out of." },
    { id: "v-sociedad-periodico", es: "el periódico", en: "newspaper", example: "Lee el periódico en español para practicar.", exampleEn: "He reads the newspaper in Spanish to practice." },
    { id: "v-sociedad-veneno", es: "el veneno", en: "poison", example: "La etiqueta decía veneno en letras rojas.", exampleEn: "The label said poison in red letters." },
    { id: "v-sociedad-pistola", es: "la pistola", en: "gun", example: "En la película siempre aparece una pistola al final.", exampleEn: "In the movie a gun always shows up at the end." },
    { id: "v-sociedad-deporte", es: "el deporte", en: "sport", example: "El único deporte que veo es el que ve mi hermano.", exampleEn: "The only sport I watch is whatever my brother watches." },
    { id: "v-sociedad-carrera", es: "la carrera", en: "race (sport)", example: "Corrió la carrera del río en octubre.", exampleEn: "She ran the river race in October." },
    { id: "v-sociedad-ejercicio", es: "el ejercicio", en: "exercise", example: "Hacemos un ejercicio de escucha al empezar.", exampleEn: "We do a listening exercise to start." },
    { id: "v-sociedad-pelota", es: "la pelota", en: "ball", example: "La pelota terminó en el patio del vecino.", exampleEn: "The ball ended up in the neighbor's yard." },
    { id: "v-sociedad-juego", es: "el juego", en: "game", example: "Inventé un juego para practicar los números.", exampleEn: "I made up a game to practice numbers." },
    { id: "v-sociedad-precio", es: "el precio", en: "price", example: "El precio del pasaje subió otra vez.", exampleEn: "The price of the fare went up again." },
    { id: "v-sociedad-contrato", es: "el contrato", en: "contract", example: "Firmó el contrato sin poder leerlo bien.", exampleEn: "He signed the contract without really being able to read it." },
    { id: "v-sociedad-droga", es: "la droga", en: "drug", example: "El programa de la ciudad es sobre drogas y prevención.", exampleEn: "The city's program is about drugs and prevention." },
    { id: "v-sociedad-letrero", es: "el letrero", en: "sign", example: "El letrero de la puerta lleva dos idiomas.", exampleEn: "The sign on the door is in two languages." },
    { id: "v-sociedad-ciencia", es: "la ciencia", en: "science", example: "Enseñaba ciencia en su país y aquí limpia oficinas.", exampleEn: "She taught science back home and here she cleans offices." },
    { id: "v-sociedad-dios", es: "Dios", en: "God", example: "Dice gracias a Dios en cada respuesta.", exampleEn: "She says thank God in every answer." },
  ],
};

export const arte: VocabTheme = {
  slug: "arte",
  label: "Arte",
  labelEn: "Art",
  words: [
    { id: "v-arte-banda", es: "la banda", en: "band", example: "Su hijo toca en una banda los fines de semana.", exampleEn: "Her son plays in a band on weekends." },
    { id: "v-arte-cancion", es: "la canción", en: "song", example: "Aprendí más con una canción que con tres lecciones.", exampleEn: "I learned more from one song than from three lessons." },
    { id: "v-arte-instrumento", es: "el instrumento", en: "instrument (musical)", example: "Trajo su instrumento y tocó al final de la clase.", exampleEn: "He brought his instrument and played at the end of class." },
    { id: "v-arte-musica", es: "la música", en: "music", example: "Pongo música en español mientras corrijo.", exampleEn: "I put on music in Spanish while I grade." },
    { id: "v-arte-pelicula", es: "la película", en: "movie", example: "Vimos la película sin subtítulos y entendí la mitad.", exampleEn: "We watched the movie without subtitles and I got half of it." },
    { id: "v-arte-arte", es: "el arte", en: "art", example: "El arte de su pueblo está en cada pared del salón.", exampleEn: "The art of her town is on every wall of the classroom." },
  ],
};
