import type { VocabTheme } from "./types";

/**
 * Animales · Transporte · Lugares · Ropa · Colores — 78 words.
 *
 * High-imageability nouns, the easiest half of the list to picture and so the
 * easiest to write real sentences for. Lugares is the long one: thirty-two
 * places, most of which come up in a single week of an ordinary life here.
 */

export const animales: VocabTheme = {
  slug: "animales",
  label: "Animales",
  labelEn: "Animals",
  words: [
    { id: "v-animales-perro", es: "el perro", en: "dog", example: "El perro del vecino ladra a las seis en punto.", exampleEn: "The neighbor's dog barks at six on the dot." },
    { id: "v-animales-gato", es: "el gato", en: "cat", example: "Su gato aparece en todas las videollamadas.", exampleEn: "Her cat shows up in every video call." },
    { id: "v-animales-pez", es: "el pez", en: "fish", example: "Le regalaron un pez y le puso mi nombre.", exampleEn: "They gave her a fish and she named it after me." },
    { id: "v-animales-pajaro", es: "el pájaro", en: "bird", example: "Un pájaro se metió al salón y se acabó la clase.", exampleEn: "A bird got into the classroom and that was the end of class." },
    { id: "v-animales-vaca", es: "la vaca", en: "cow", example: "Creció ordeñando vacas antes de ir a la escuela.", exampleEn: "He grew up milking cows before school." },
    { id: "v-animales-cerdo-animal", es: "el puerco", en: "pig", example: "En su pueblo cada casa tenía un puerco.", exampleEn: "In her town every house had a pig." },
    { id: "v-animales-raton", es: "el ratón", en: "mouse", example: "Vieron un ratón en la cocina de la escuela.", exampleEn: "They saw a mouse in the school kitchen." },
    { id: "v-animales-caballo", es: "el caballo", en: "horse", example: "Se subió a un caballo por primera vez a los cuarenta.", exampleEn: "She got on a horse for the first time at forty." },
    { id: "v-animales-ala", es: "el ala", en: "wing", example: "El pájaro tenía un ala lastimada.", exampleEn: "The bird had a hurt wing." },
    { id: "v-animales-animal", es: "el animal", en: "animal", example: "En su casa no cabe ni un animal más.", exampleEn: "There's no room for one more animal in her house." },
  ],
};

export const transporte: VocabTheme = {
  slug: "transporte",
  label: "Transporte",
  labelEn: "Transportation",
  words: [
    { id: "v-transporte-tren", es: "el tren", en: "train", example: "Tomo el tren rojo hasta la escuela casi todas las mañanas.", exampleEn: "I take the red train to school almost every morning." },
    { id: "v-transporte-avion", es: "el avión", en: "plane", example: "Nunca se ha subido a un avión y quiere ir a España.", exampleEn: "He's never been on a plane and he wants to go to Spain." },
    { id: "v-transporte-carro", es: "el carro", en: "car", example: "El carro no prendió con el frío de ayer.", exampleEn: "The car wouldn't start in yesterday's cold." },
    { id: "v-transporte-camion", es: "el camión", en: "truck", example: "Maneja un camión de noche y estudia de día.", exampleEn: "He drives a truck at night and studies during the day." },
    { id: "v-transporte-bicicleta", es: "la bicicleta", en: "bicycle", example: "Viene en bicicleta hasta con nieve.", exampleEn: "She comes by bicycle even in the snow." },
    { id: "v-transporte-autobus", es: "el autobús", en: "bus", example: "El autobús pasa cada media hora, si pasa.", exampleEn: "The bus comes every half hour, if it comes." },
    { id: "v-transporte-bote", es: "el bote", en: "boat", example: "Su papá tenía un bote pequeño para pescar.", exampleEn: "Her father had a small boat for fishing." },
    { id: "v-transporte-barco", es: "el barco", en: "ship", example: "Trabajó en un barco tres años seguidos.", exampleEn: "He worked on a ship for three years straight." },
    { id: "v-transporte-llanta", es: "la llanta", en: "tire", example: "Se le ponchó una llanta camino al trabajo.", exampleEn: "He got a flat tire on the way to work." },
    { id: "v-transporte-gasolina", es: "la gasolina", en: "gasoline", example: "La gasolina se lleva medio sueldo.", exampleEn: "Gas eats up half a paycheck." },
    { id: "v-transporte-motor", es: "el motor", en: "engine", example: "El motor hace un ruido raro desde el lunes.", exampleEn: "The engine has been making a strange noise since Monday." },
    { id: "v-transporte-boleto", es: "el boleto", en: "(train) ticket", example: "Compra el boleto en la máquina, sale más barato.", exampleEn: "Buy the ticket at the machine, it's cheaper." },
    { id: "v-transporte-transporte", es: "el transporte", en: "transportation", example: "Sin transporte público esta ciudad no funciona.", exampleEn: "Without public transportation this city doesn't work." },
  ],
};

export const lugares: VocabTheme = {
  slug: "lugares",
  label: "Lugares",
  labelEn: "Location",
  words: [
    { id: "v-lugares-ciudad", es: "la ciudad", en: "city", example: "Esta ciudad se camina mejor de lo que se maneja.", exampleEn: "This city walks better than it drives." },
    { id: "v-lugares-casa", es: "la casa", en: "house", example: "La casa de mi mamá siempre huele a café.", exampleEn: "My mom's house always smells like coffee." },
    { id: "v-lugares-apartamento", es: "el apartamento", en: "apartment", example: "Se cambiaron a un apartamento más chico y más cerca.", exampleEn: "They moved to a smaller apartment closer in." },
    { id: "v-lugares-calle", es: "la calle", en: "street / road", example: "Esa calle se cierra cada vez que nieva.", exampleEn: "That street closes every time it snows." },
    { id: "v-lugares-aeropuerto", es: "el aeropuerto", en: "airport", example: "Llegamos al aeropuerto con cuatro horas de sobra.", exampleEn: "We got to the airport four hours early." },
    { id: "v-lugares-estacion", es: "la estación de tren", en: "train station", example: "Nos vemos en la estación de tren a las siete.", exampleEn: "Let's meet at the train station at seven." },
    { id: "v-lugares-puente", es: "el puente", en: "bridge", example: "Cruzando el puente ya se ve la escuela.", exampleEn: "Once you cross the bridge you can see the school." },
    { id: "v-lugares-hotel", es: "el hotel", en: "hotel", example: "Trabaja en un hotel del centro los fines de semana.", exampleEn: "She works at a hotel downtown on weekends." },
    { id: "v-lugares-restaurante", es: "el restaurante", en: "restaurant", example: "Hay un restaurante salvadoreño a dos cuadras.", exampleEn: "There's a Salvadoran restaurant two blocks away." },
    { id: "v-lugares-granja", es: "la granja", en: "farm", example: "Trabajó en una granja el primer año que llegó.", exampleEn: "He worked on a farm his first year here." },
    { id: "v-lugares-corte", es: "la corte", en: "court", example: "Tiene cita en la corte y no sabe qué llevar.", exampleEn: "She has a court date and doesn't know what to bring." },
    { id: "v-lugares-escuela", es: "la escuela", en: "school", example: "La escuela abre a las siete y ya hay fila.", exampleEn: "The school opens at seven and there's already a line." },
    { id: "v-lugares-oficina", es: "la oficina", en: "office", example: "La oficina de arriba nunca contesta el teléfono.", exampleEn: "The office upstairs never answers the phone." },
    { id: "v-lugares-salon", es: "el salón", en: "room", example: "Nos cambiaron de salón sin avisar.", exampleEn: "They moved us to a different room without telling us." },
    { id: "v-lugares-pueblo", es: "el pueblo", en: "town", example: "En su pueblo todo el mundo se conoce.", exampleEn: "In her town everybody knows everybody." },
    { id: "v-lugares-universidad", es: "la universidad", en: "university", example: "Quiere entrar a la universidad el año que viene.", exampleEn: "She wants to start university next year." },
    { id: "v-lugares-club", es: "el club", en: "club", example: "Armaron un club de lectura entre cuatro alumnos.", exampleEn: "Four students started a book club." },
    { id: "v-lugares-bar", es: "el bar", en: "bar", example: "El bar de la esquina pone las noticias sin sonido.", exampleEn: "The bar on the corner plays the news with no sound." },
    { id: "v-lugares-parque", es: "el parque", en: "park", example: "Damos la clase en el parque cuando hace bueno.", exampleEn: "We hold class in the park when the weather's good." },
    { id: "v-lugares-campamento", es: "el campamento", en: "camp", example: "Sus hijos van a un campamento gratis en julio.", exampleEn: "Her kids go to a free camp in July." },
    { id: "v-lugares-tienda", es: "la tienda", en: "store / shop", example: "En esa tienda te atienden en español.", exampleEn: "At that store they help you in Spanish." },
    { id: "v-lugares-teatro", es: "el teatro", en: "theater", example: "Fuimos al teatro con boletos que regaló la escuela.", exampleEn: "We went to the theater with tickets the school gave out." },
    { id: "v-lugares-biblioteca", es: "la biblioteca", en: "library", example: "La biblioteca presta computadoras por dos horas.", exampleEn: "The library lends computers for two hours." },
    { id: "v-lugares-hospital", es: "el hospital", en: "hospital", example: "Pasó la noche en el hospital y llegó a clase igual.", exampleEn: "She spent the night at the hospital and came to class anyway." },
    { id: "v-lugares-iglesia", es: "la iglesia", en: "church", example: "La iglesia da clases de inglés los sábados.", exampleEn: "The church gives English classes on Saturdays." },
    { id: "v-lugares-mercado", es: "el mercado", en: "market", example: "En el mercado del domingo se oye de todo.", exampleEn: "At the Sunday market you hear everything." },
    { id: "v-lugares-pais", es: "el país", en: "country", example: "Cada quien contó cómo salió de su país.", exampleEn: "Everyone told how they left their country." },
    { id: "v-lugares-edificio", es: "el edificio", en: "building", example: "El edificio no tiene ascensor y ella vive en el cuarto.", exampleEn: "The building has no elevator and she lives on the fourth floor." },
    { id: "v-lugares-suelo", es: "el suelo", en: "ground", example: "Se le cayeron las hojas al suelo y las juntamos entre todos.", exampleEn: "Her papers fell to the ground and we all picked them up." },
    { id: "v-lugares-espacio", es: "el espacio", en: "space (outer space)", example: "Su hija quiere trabajar en el espacio algún día.", exampleEn: "Her daughter wants to work in space someday." },
    { id: "v-lugares-banco", es: "el banco", en: "bank", example: "En el banco le pidieron papeles que no tiene.", exampleEn: "At the bank they asked her for papers she doesn't have." },
    { id: "v-lugares-lugar", es: "el lugar", en: "location", example: "Cambiaron el lugar de la reunión a última hora.", exampleEn: "They changed the meeting location at the last minute." },
  ],
};

export const ropa: VocabTheme = {
  slug: "ropa",
  label: "Ropa",
  labelEn: "Clothing",
  words: [
    { id: "v-ropa-gorra", es: "la gorra", en: "hat", example: "No se quita la gorra ni adentro.", exampleEn: "He doesn't take his hat off even indoors." },
    { id: "v-ropa-vestido", es: "el vestido", en: "dress", example: "Se puso vestido para la última clase del curso.", exampleEn: "She wore a dress for the last class of the course." },
    { id: "v-ropa-traje", es: "el traje", en: "suit", example: "Llegó de traje porque venía de la corte.", exampleEn: "He came in a suit because he'd come from court." },
    { id: "v-ropa-falda", es: "la falda", en: "skirt", example: "Con esta falda no aguanto el viento del río.", exampleEn: "In this skirt I can't take the wind off the river." },
    { id: "v-ropa-camisa", es: "la camisa", en: "shirt", example: "Se le manchó la camisa con el café.", exampleEn: "He got coffee on his shirt." },
    { id: "v-ropa-playera", es: "la playera", en: "T-shirt", example: "Nos hicieron playeras con el nombre del programa.", exampleEn: "They made us T-shirts with the program's name." },
    { id: "v-ropa-pantalones", es: "los pantalones", en: "pants", example: "Estos pantalones ya me quedan grandes.", exampleEn: "These pants are too big on me now." },
    { id: "v-ropa-zapatos", es: "los zapatos", en: "shoes", example: "Camina tanto que gasta los zapatos en un año.", exampleEn: "He walks so much he wears out his shoes in a year." },
    { id: "v-ropa-bolsillo", es: "el bolsillo", en: "pocket", example: "Traigo el boleto en el bolsillo de siempre.", exampleEn: "I've got the ticket in the usual pocket." },
    { id: "v-ropa-abrigo", es: "el abrigo", en: "coat", example: "Su primer abrigo de invierno se lo regaló la escuela.", exampleEn: "The school gave her her first winter coat." },
    { id: "v-ropa-mancha", es: "la mancha", en: "stain", example: "Esa mancha ya no sale con nada.", exampleEn: "That stain won't come out with anything." },
    { id: "v-ropa-ropa", es: "la ropa", en: "clothing", example: "Junta ropa para las familias que van llegando.", exampleEn: "She collects clothing for the families that keep arriving." },
  ],
};

export const colores: VocabTheme = {
  slug: "colores",
  label: "Colores",
  labelEn: "Color",
  words: [
    { id: "v-colores-rojo", es: "rojo", en: "red", example: "El tren rojo es el que me deja en la escuela.", exampleEn: "The red line is the one that drops me at school." },
    { id: "v-colores-verde", es: "verde", en: "green", example: "Pinté una pared verde y me arrepentí enseguida.", exampleEn: "I painted one wall green and regretted it right away." },
    { id: "v-colores-azul", es: "azul", en: "blue (light/dark)", example: "Un azul claro para el cuarto y azul oscuro para la puerta.", exampleEn: "Light blue for the bedroom and dark blue for the door." },
    { id: "v-colores-amarillo", es: "amarillo", en: "yellow", example: "El autobús amarillo pasa a las siete y diez.", exampleEn: "The yellow bus comes at seven ten." },
    { id: "v-colores-cafe", es: "café", en: "brown", example: "Trae los zapatos cafés que le regalaron.", exampleEn: "He's wearing the brown shoes they gave him." },
    { id: "v-colores-rosa", es: "rosa", en: "pink", example: "Su hija solo quiere ropa rosa.", exampleEn: "Her daughter only wants pink clothes." },
    { id: "v-colores-anaranjado", es: "anaranjado", en: "orange", example: "En octubre todo el barrio se pone anaranjado.", exampleEn: "In October the whole neighborhood turns orange." },
    { id: "v-colores-negro", es: "negro", en: "black", example: "Escribe con tinta negra, que se lee mejor.", exampleEn: "Write in black ink, it reads better." },
    { id: "v-colores-blanco", es: "blanco", en: "white", example: "Dejó la hoja en blanco y me la entregó igual.", exampleEn: "He left the page blank and handed it in anyway." },
    { id: "v-colores-gris", es: "gris", en: "gray", example: "Aquí febrero entero es gris.", exampleEn: "Here the whole of February is gray." },
    { id: "v-colores-color", es: "el color", en: "color", example: "¿De qué color era la puerta de tu casa?", exampleEn: "What color was the door of your house?" },
  ],
};
