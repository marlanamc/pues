import type { VocabTheme } from "./types";

/**
 * Estaciones · Números · Meses · Días · El tiempo — 94 words.
 *
 * Números is the theme that least resembles the rest, and the one most worth
 * keeping: numbers are where listening actually fails — a price said fast, a
 * platform number, a year. So every entry puts its number to work in a real
 * use rather than reciting it, and the traps are demonstrated instead of
 * explained: the apocope in *veintiún* and *treinta y un*, the *cien* /
 * *ciento* split, and *mil millones* for the English "billion" (*un billón*
 * is a thousand times larger — a false friend the source list walks straight
 * into).
 */

export const estaciones: VocabTheme = {
  slug: "estaciones",
  label: "Las estaciones",
  labelEn: "Seasons",
  words: [
    { id: "v-estaciones-verano", es: "el verano", en: "Summer", example: "En verano la clase se vacía y vuelve en septiembre.", exampleEn: "In summer the class empties out and comes back in September." },
    { id: "v-estaciones-primavera", es: "la primavera", en: "Spring", example: "La primavera aquí dura como dos semanas.", exampleEn: "Spring here lasts about two weeks." },
    { id: "v-estaciones-invierno", es: "el invierno", en: "Winter", example: "Su primer invierno lo pasó sin abrigo bueno.", exampleEn: "He got through his first winter without a good coat." },
    { id: "v-estaciones-otono", es: "el otoño", en: "Fall", example: "En otoño empieza el curso y todos llegan nerviosos.", exampleEn: "The course starts in fall and everyone arrives nervous." },
    { id: "v-estaciones-estacion", es: "la estación", en: "season", example: "Su país tiene dos estaciones y aquí se perdió.", exampleEn: "Her country has two seasons and here she got lost." },
  ],
};

export const numeros: VocabTheme = {
  slug: "numeros",
  label: "Los números",
  labelEn: "Numbers",
  words: [
    { id: "v-numeros-0", es: "cero", en: "0", example: "Salimos a cero grados y nadie se quejó.", exampleEn: "We went out at zero degrees and nobody complained." },
    { id: "v-numeros-1", es: "uno", en: "1", example: "Solo falta uno para empezar.", exampleEn: "We're just one short to start." },
    { id: "v-numeros-2", es: "dos", en: "2", example: "Vivo a dos cuadras de la parada.", exampleEn: "I live two blocks from the stop." },
    { id: "v-numeros-3", es: "tres", en: "3", example: "Llevo tres años dando esta clase.", exampleEn: "I've been teaching this class for three years." },
    { id: "v-numeros-4", es: "cuatro", en: "4", example: "Somos cuatro en la casa y un baño.", exampleEn: "There are four of us in the house and one bathroom." },
    { id: "v-numeros-5", es: "cinco", en: "5", example: "Dame cinco minutos y ya salgo.", exampleEn: "Give me five minutes and I'm out." },
    { id: "v-numeros-6", es: "seis", en: "6", example: "El tren de las seis va vacío.", exampleEn: "The six o'clock train is empty." },
    { id: "v-numeros-7", es: "siete", en: "7", example: "La clase empieza a las siete en punto.", exampleEn: "Class starts at seven sharp." },
    { id: "v-numeros-8", es: "ocho", en: "8", example: "Trabaja ocho horas y después viene a estudiar.", exampleEn: "She works eight hours and then comes to study." },
    { id: "v-numeros-9", es: "nueve", en: "9", example: "A las nueve ya no queda nadie en el edificio.", exampleEn: "By nine there's nobody left in the building." },
    { id: "v-numeros-10", es: "diez", en: "10", example: "Diez personas hoy, récord del mes.", exampleEn: "Ten people today — record for the month." },
    { id: "v-numeros-11", es: "once", en: "11", example: "Su hijo cumple once en marzo.", exampleEn: "Her son turns eleven in March." },
    { id: "v-numeros-12", es: "doce", en: "12", example: "Compré doce huevos y me duraron dos días.", exampleEn: "I bought a dozen eggs and they lasted two days." },
    { id: "v-numeros-13", es: "trece", en: "13", example: "Llegó a este país a los trece.", exampleEn: "He came to this country at thirteen." },
    { id: "v-numeros-14", es: "catorce", en: "14", example: "El catorce de febrero nadie viene a clase.", exampleEn: "On February fourteenth nobody comes to class." },
    { id: "v-numeros-15", es: "quince", en: "15", example: "Le hicieron una fiesta de quince a su hija.", exampleEn: "They threw a quinceañera for their daughter." },
    { id: "v-numeros-16", es: "dieciséis", en: "16", example: "Empezó a trabajar a los dieciséis.", exampleEn: "She started working at sixteen." },
    { id: "v-numeros-17", es: "diecisiete", en: "17", example: "Diecisiete grados en enero, algo anda mal.", exampleEn: "Seventeen degrees in January — something's off." },
    { id: "v-numeros-18", es: "dieciocho", en: "18", example: "A los dieciocho ya mantenía a su mamá.", exampleEn: "At eighteen he was already supporting his mother." },
    { id: "v-numeros-19", es: "diecinueve", en: "19", example: "Somos diecinueve inscritos y vienen doce.", exampleEn: "Nineteen are enrolled and twelve show up." },
    { id: "v-numeros-20", es: "veinte", en: "20", example: "El examen tiene veinte preguntas.", exampleEn: "The exam has twenty questions." },
    { id: "v-numeros-21", es: "veintiuno", en: "21", example: "Cumplió veintiuno y trabajó ese mismo día.", exampleEn: "He turned twenty-one and worked that same day." },
    { id: "v-numeros-22", es: "veintidós", en: "22", example: "Somos veintidós en la clase de la noche.", exampleEn: "There are twenty-two of us in the night class." },
    { id: "v-numeros-30", es: "treinta", en: "30", example: "La clase dura noventa minutos, no treinta.", exampleEn: "The class runs ninety minutes, not thirty." },
    { id: "v-numeros-31", es: "treinta y uno", en: "31", example: "Enero tiene treinta y uno y se siente el doble.", exampleEn: "January has thirty-one and feels like double." },
    { id: "v-numeros-32", es: "treinta y dos", en: "32", example: "A treinta y dos grados el agua se congela.", exampleEn: "At thirty-two degrees water freezes." },
    { id: "v-numeros-40", es: "cuarenta", en: "40", example: "Vamos en la página cuarenta del libro.", exampleEn: "We're on page forty of the book." },
    { id: "v-numeros-41", es: "cuarenta y uno", en: "41", example: "El autobús cuarenta y uno pasa por la escuela.", exampleEn: "The forty-one bus goes past the school." },
    { id: "v-numeros-42", es: "cuarenta y dos", en: "42", example: "El buzón cuarenta y dos es el mío.", exampleEn: "Mailbox forty-two is mine." },
    { id: "v-numeros-50", es: "cincuenta", en: "50", example: "Cincuenta dólares por los libros del semestre.", exampleEn: "Fifty dollars for the semester's books." },
    { id: "v-numeros-51", es: "cincuenta y uno", en: "51", example: "Empezó a estudiar a los cincuenta y uno.", exampleEn: "She started studying at fifty-one." },
    { id: "v-numeros-52", es: "cincuenta y dos", en: "52", example: "El año tiene cincuenta y dos semanas y las cuento.", exampleEn: "The year has fifty-two weeks and I count them." },
    { id: "v-numeros-60", es: "sesenta", en: "60", example: "Un minuto son sesenta segundos y no alcanzan.", exampleEn: "A minute is sixty seconds and it isn't enough." },
    { id: "v-numeros-70", es: "setenta", en: "70", example: "Su mamá tiene setenta y sigue trabajando.", exampleEn: "Her mother is seventy and still working." },
    { id: "v-numeros-71", es: "setenta y uno", en: "71", example: "Nació en el setenta y uno, según el papel.", exampleEn: "He was born in seventy-one, according to the paper." },
    { id: "v-numeros-72", es: "setenta y dos", en: "72", example: "Tienes setenta y dos horas para responder.", exampleEn: "You have seventy-two hours to answer." },
    { id: "v-numeros-80", es: "ochenta", en: "80", example: "El abrigo costaba ochenta y lo dejé.", exampleEn: "The coat cost eighty and I left it." },
    { id: "v-numeros-81", es: "ochenta y uno", en: "81", example: "Su abuelo llegó a los ochenta y uno.", exampleEn: "Her grandfather made it to eighty-one." },
    { id: "v-numeros-82", es: "ochenta y dos", en: "82", example: "Saqué ochenta y dos y me sentí bien.", exampleEn: "I got an eighty-two and felt good about it." },
    { id: "v-numeros-90", es: "noventa", en: "90", example: "Noventa minutos de clase y se van rapidísimo.", exampleEn: "Ninety minutes of class and they fly by." },
    { id: "v-numeros-91", es: "noventa y uno", en: "91", example: "Una temporada son noventa y un días.", exampleEn: "A season is ninety-one days." },
    { id: "v-numeros-92", es: "noventa y dos", en: "92", example: "El termómetro marcó noventa y dos en agosto.", exampleEn: "The thermometer hit ninety-two in August." },
    { id: "v-numeros-100", es: "cien", en: "100", example: "Cien palabras al día suena poco hasta que lo intentas.", exampleEn: "A hundred words a day sounds like nothing until you try it." },
    { id: "v-numeros-101", es: "ciento uno", en: "101", example: "El salón ciento uno es el del fondo.", exampleEn: "Room one-oh-one is the one at the end." },
    { id: "v-numeros-102", es: "ciento dos", en: "102", example: "Vive en el ciento dos, subiendo a la izquierda.", exampleEn: "She lives in one-oh-two, up the stairs on the left." },
    { id: "v-numeros-110", es: "ciento diez", en: "110", example: "El recibo llegó en ciento diez dólares.", exampleEn: "The bill came to a hundred and ten dollars." },
    { id: "v-numeros-111", es: "ciento once", en: "111", example: "La ruta ciento once va hasta el aeropuerto.", exampleEn: "The one-eleven route goes to the airport." },
    { id: "v-numeros-1000", es: "mil", en: "1000", example: "Mil dólares de depósito y ni había visto el lugar.", exampleEn: "A thousand dollars deposit and she hadn't even seen the place." },
    { id: "v-numeros-1001", es: "mil uno", en: "1001", example: "El expediente termina en mil uno.", exampleEn: "The file number ends in one thousand one." },
    { id: "v-numeros-10000", es: "diez mil", en: "10000", example: "Diez mil pasos y todavía no llego.", exampleEn: "Ten thousand steps and I'm still not there." },
    { id: "v-numeros-100000", es: "cien mil", en: "100000", example: "La ciudad creció cien mil personas en diez años.", exampleEn: "The city grew by a hundred thousand people in ten years." },
    { id: "v-numeros-millon", es: "un millón", en: "million", example: "Te lo he dicho un millón de veces.", exampleEn: "I've told you a million times." },
    { id: "v-numeros-mil-millones", es: "mil millones", en: "billion", example: "El programa costó mil millones, según el periódico.", exampleEn: "The program cost a billion, according to the paper." },
    { id: "v-numeros-primero", es: "primero", en: "1st", example: "El primero de mes se va el sueldo entero.", exampleEn: "On the first of the month the whole paycheck goes." },
    { id: "v-numeros-segundo", es: "segundo", en: "2nd", example: "Es el segundo año que la tengo en clase.", exampleEn: "It's the second year I've had her in class." },
    { id: "v-numeros-tercero", es: "tercero", en: "3rd", example: "Vive en el tercero y no hay ascensor.", exampleEn: "He lives on the third floor and there's no elevator." },
    { id: "v-numeros-cuarto", es: "cuarto", en: "4th", example: "Quedé en cuarto lugar y me dio igual.", exampleEn: "I came in fourth and didn't mind." },
    { id: "v-numeros-numero", es: "el número", en: "number", example: "Apúntame tu número antes de que se me olvide.", exampleEn: "Write down your number before I forget." },
  ],
};

export const meses: VocabTheme = {
  slug: "meses",
  label: "Los meses",
  labelEn: "Months",
  words: [
    { id: "v-meses-enero", es: "enero", en: "January", example: "En enero todos prometen venir siempre.", exampleEn: "In January everyone promises to come every time." },
    { id: "v-meses-febrero", es: "febrero", en: "February", example: "Febrero es el mes que menos gente aguanta.", exampleEn: "February is the month fewest people get through." },
    { id: "v-meses-marzo", es: "marzo", en: "March", example: "En marzo empieza a aclarar más tarde.", exampleEn: "In March it starts staying light later." },
    { id: "v-meses-abril", es: "abril", en: "April", example: "Abril nos devolvió el parque.", exampleEn: "April gave us the park back." },
    { id: "v-meses-mayo", es: "mayo", en: "May", example: "La graduación es la primera semana de mayo.", exampleEn: "Graduation is the first week of May." },
    { id: "v-meses-junio", es: "junio", en: "June", example: "En junio ya nadie quiere estar adentro.", exampleEn: "By June nobody wants to be indoors." },
    { id: "v-meses-julio", es: "julio", en: "July", example: "Julio se va entero en el campamento de los niños.", exampleEn: "July goes entirely to the kids' camp." },
    { id: "v-meses-agosto", es: "agosto", en: "August", example: "Agosto en ese salón es insoportable.", exampleEn: "August in that classroom is unbearable." },
    { id: "v-meses-septiembre", es: "septiembre", en: "September", example: "Septiembre huele a empezar de nuevo.", exampleEn: "September smells like starting over." },
    { id: "v-meses-octubre", es: "octubre", en: "October", example: "Octubre es el mejor mes del año aquí.", exampleEn: "October is the best month of the year here." },
    { id: "v-meses-noviembre", es: "noviembre", en: "November", example: "En noviembre oscurece antes de que salgamos.", exampleEn: "In November it gets dark before we get out." },
    { id: "v-meses-diciembre", es: "diciembre", en: "December", example: "En diciembre la mitad se va a ver a su familia.", exampleEn: "In December half of them go see their families." },
  ],
};

export const dias: VocabTheme = {
  slug: "dias",
  label: "Los días",
  labelEn: "Days of the week",
  words: [
    { id: "v-dias-lunes", es: "el lunes", en: "Monday", example: "Los lunes cuesta arrancar hasta a mí.", exampleEn: "Mondays are hard to start even for me." },
    { id: "v-dias-martes", es: "el martes", en: "Tuesday", example: "El martes tenemos la clase más llena.", exampleEn: "Tuesday is our fullest class." },
    { id: "v-dias-miercoles", es: "el miércoles", en: "Wednesday", example: "El miércoles se me hace el día más largo.", exampleEn: "Wednesday feels like the longest day to me." },
    { id: "v-dias-jueves", es: "el jueves", en: "Thursday", example: "Los jueves llego a la casa sin voz.", exampleEn: "On Thursdays I get home with no voice." },
    { id: "v-dias-viernes", es: "el viernes", en: "Friday", example: "El viernes ponemos las sillas en círculo.", exampleEn: "On Friday we put the chairs in a circle." },
    { id: "v-dias-sabado", es: "el sábado", en: "Saturday", example: "El sábado es el único día que no suena el despertador.", exampleEn: "Saturday is the only day the alarm doesn't go off." },
    { id: "v-dias-domingo", es: "el domingo", en: "Sunday", example: "Los domingos hablo con mi mamá una hora larga.", exampleEn: "On Sundays I talk to my mom for a good hour." },
  ],
};

export const tiempo: VocabTheme = {
  slug: "tiempo",
  label: "El tiempo",
  labelEn: "Time",
  words: [
    { id: "v-tiempo-ano", es: "el año", en: "year", example: "Este año me propuse no saltarme ni una semana.", exampleEn: "This year I decided not to skip a single week." },
    { id: "v-tiempo-mes", es: "el mes", en: "month", example: "El mes se me fue sin darme cuenta.", exampleEn: "The month got away from me." },
    { id: "v-tiempo-semana", es: "la semana", en: "week", example: "La semana se prepara el domingo o no se prepara.", exampleEn: "The week gets prepared on Sunday or it doesn't get prepared." },
    { id: "v-tiempo-dia", es: "el día", en: "day", example: "Un día bueno son diez minutos, no dos horas.", exampleEn: "A good day is ten minutes, not two hours." },
    { id: "v-tiempo-hora", es: "la hora", en: "hour", example: "Una hora de tren da para mucho.", exampleEn: "An hour on the train goes a long way." },
    { id: "v-tiempo-minuto", es: "el minuto", en: "minute", example: "Dame un minuto que estoy terminando.", exampleEn: "Give me a minute, I'm finishing up." },
    { id: "v-tiempo-segundo", es: "el segundo", en: "second", example: "Dudé un segundo y ya se me fue la palabra.", exampleEn: "I hesitated a second and the word was gone." },
    { id: "v-tiempo-manana", es: "la mañana", en: "morning", example: "La mañana es lo único que tengo para mí.", exampleEn: "The morning is the only thing I have to myself." },
    { id: "v-tiempo-tarde", es: "la tarde", en: "afternoon", example: "La tarde se me va en corregir.", exampleEn: "My afternoon goes to grading." },
    { id: "v-tiempo-noche-temprano", es: "la tardecita", en: "evening", example: "En la tardecita el barrio se calma.", exampleEn: "In the early evening the neighborhood quiets down." },
    { id: "v-tiempo-noche", es: "la noche", en: "night", example: "De noche pienso mejor en español, no sé por qué.", exampleEn: "At night I think better in Spanish, I don't know why." },
    { id: "v-tiempo-tiempo", es: "el tiempo", en: "time", example: "No es que falte tiempo, es que falta empezar.", exampleEn: "It's not that there's no time, it's that starting is the hard part." },
  ],
};
