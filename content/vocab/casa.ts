import type { VocabTheme } from "./types";

/**
 * Bebidas · Comida · La casa · Electrónica — 84 words.
 *
 * The kitchen-table half of the list: the nouns that stall an ordinary
 * sentence about an ordinary evening. Examples are set in the places these
 * words actually come up — the classroom kitchen, the walk home, a video call
 * with Atlanta, the desk where the app gets built.
 */

export const bebidas: VocabTheme = {
  slug: "bebidas",
  label: "Bebidas",
  labelEn: "Beverages",
  words: [
    { id: "v-bebidas-cafe", es: "el café", en: "coffee", example: "Me tomo el café antes de que despierte nadie.", exampleEn: "I drink my coffee before anyone wakes up." },
    { id: "v-bebidas-te", es: "el té", en: "tea", example: "Cuando ya es tarde prefiero un té.", exampleEn: "When it's late I'd rather have tea." },
    { id: "v-bebidas-vino", es: "el vino", en: "wine", example: "Trajeron vino y nadie encontró el sacacorchos.", exampleEn: "They brought wine and nobody could find the corkscrew." },
    { id: "v-bebidas-cerveza", es: "la cerveza", en: "beer", example: "Nos quedamos con una cerveza hablando del examen.", exampleEn: "We stayed for a beer talking about the exam." },
    { id: "v-bebidas-jugo", es: "el jugo", en: "juice", example: "Hay jugo de naranja en la nevera.", exampleEn: "There's orange juice in the fridge." },
    { id: "v-bebidas-agua", es: "el agua", en: "water", example: "Tráete agua, que el salón se calienta rapidísimo.", exampleEn: "Bring water — that classroom heats up fast." },
    { id: "v-bebidas-leche", es: "la leche", en: "milk", example: "Se acabó la leche otra vez.", exampleEn: "We're out of milk again." },
    { id: "v-bebidas-bebida", es: "la bebida", en: "beverage", example: "Cada quien lleva una bebida y algo de comer.", exampleEn: "Everyone brings a drink and something to eat." },
  ],
};

export const comida: VocabTheme = {
  slug: "comida",
  label: "Comida",
  labelEn: "Food",
  words: [
    { id: "v-comida-huevo", es: "el huevo", en: "egg", example: "Me hago un huevo antes de salir corriendo.", exampleEn: "I make myself an egg before running out." },
    { id: "v-comida-queso", es: "el queso", en: "cheese", example: "Ese queso lleva ahí desde la semana pasada.", exampleEn: "That cheese has been in there since last week." },
    { id: "v-comida-pan", es: "el pan", en: "bread", example: "Compré pan en la esquina, todavía caliente.", exampleEn: "I bought bread on the corner, still warm." },
    { id: "v-comida-sopa", es: "la sopa", en: "soup", example: "Con este frío solo quiero sopa.", exampleEn: "In this cold all I want is soup." },
    { id: "v-comida-pastel", es: "el pastel", en: "cake", example: "Le llevamos un pastel al salón por su cumpleaños.", exampleEn: "We brought a cake to class for her birthday." },
    { id: "v-comida-pollo", es: "el pollo", en: "chicken", example: "El pollo del jueves siempre sabe mejor al día siguiente.", exampleEn: "Thursday's chicken always tastes better the next day." },
    { id: "v-comida-cerdo", es: "el cerdo", en: "pork", example: "En su casa el cerdo se cocina lento.", exampleEn: "At her house the pork is cooked slowly." },
    { id: "v-comida-res", es: "la carne de res", en: "beef", example: "La carne de res subió muchísimo este año.", exampleEn: "Beef has gone way up this year." },
    { id: "v-comida-manzana", es: "la manzana", en: "apple", example: "Siempre echo una manzana en la mochila.", exampleEn: "I always throw an apple in my bag." },
    { id: "v-comida-platano", es: "el plátano", en: "banana", example: "Ese plátano ya está muy maduro.", exampleEn: "That banana is way too ripe now." },
    { id: "v-comida-naranja", es: "la naranja", en: "orange", example: "Pélame una naranja mientras termino esto.", exampleEn: "Peel me an orange while I finish this." },
    { id: "v-comida-limon", es: "el limón", en: "lemon", example: "Todo le sabe mejor con limón.", exampleEn: "Everything tastes better to her with lemon." },
    { id: "v-comida-maiz", es: "el maíz", en: "corn", example: "El maíz de la esquina viene con queso y chile.", exampleEn: "The corn on the corner comes with cheese and chili." },
    { id: "v-comida-arroz", es: "el arroz", en: "rice", example: "Aprendí a hacer el arroz como lo hace ella.", exampleEn: "I learned to make the rice the way she does." },
    { id: "v-comida-aceite", es: "el aceite", en: "oil", example: "Pon un poco de aceite antes de que se pegue.", exampleEn: "Add a little oil before it sticks." },
    { id: "v-comida-semilla", es: "la semilla", en: "seed", example: "Guardé unas semillas del tomate del verano.", exampleEn: "I saved some seeds from the summer tomato." },
    { id: "v-comida-cuchillo", es: "el cuchillo", en: "knife", example: "Ese cuchillo no corta nada.", exampleEn: "That knife doesn't cut anything." },
    { id: "v-comida-cuchara", es: "la cuchara", en: "spoon", example: "¿Me pasas una cuchara?", exampleEn: "Can you pass me a spoon?" },
    { id: "v-comida-tenedor", es: "el tenedor", en: "fork", example: "Faltó un tenedor y comimos con las manos.", exampleEn: "We were a fork short and ate with our hands." },
    { id: "v-comida-plato", es: "el plato", en: "plate", example: "Deja el plato en el fregadero, yo lavo.", exampleEn: "Leave the plate in the sink, I'll wash." },
    { id: "v-comida-taza", es: "la taza", en: "cup", example: "Esa taza es la que uso todas las mañanas.", exampleEn: "That's the cup I use every morning." },
    { id: "v-comida-desayuno", es: "el desayuno", en: "breakfast", example: "El desayuno lo hago mientras reviso el correo.", exampleEn: "I make breakfast while I check my email." },
    { id: "v-comida-almuerzo", es: "el almuerzo", en: "lunch", example: "Me llevo el almuerzo para no gastar.", exampleEn: "I bring my lunch so I don't spend money." },
    { id: "v-comida-cena", es: "la cena", en: "dinner", example: "La cena se enfrió mientras terminaba la clase.", exampleEn: "Dinner got cold while I finished the class." },
    { id: "v-comida-azucar", es: "el azúcar", en: "sugar", example: "Le puse azúcar sin preguntar y no le gustó.", exampleEn: "I added sugar without asking and she didn't like it." },
    { id: "v-comida-sal", es: "la sal", en: "salt", example: "Se me olvidó la sal y la sopa quedó sin sabor.", exampleEn: "I forgot the salt and the soup had no flavor." },
    { id: "v-comida-botella", es: "la botella", en: "bottle", example: "Llevo la misma botella desde hace dos años.", exampleEn: "I've carried the same bottle for two years." },
    { id: "v-comida-comida", es: "la comida", en: "food", example: "La comida de su país me tomó tiempo entender.", exampleEn: "The food from her country took me a while to understand." },
  ],
};

export const casa: VocabTheme = {
  slug: "casa",
  label: "La casa",
  labelEn: "Home",
  words: [
    { id: "v-casa-mesa", es: "la mesa", en: "table", example: "La mesa está llena de cuadernos sin corregir.", exampleEn: "The table is covered in ungraded notebooks." },
    { id: "v-casa-silla", es: "la silla", en: "chair", example: "Falta una silla y siempre llega alguien más.", exampleEn: "We're one chair short and someone always shows up." },
    { id: "v-casa-cama", es: "la cama", en: "bed", example: "Me llevo la computadora a la cama, cosa que no debería.", exampleEn: "I take my laptop to bed, which I shouldn't." },
    { id: "v-casa-sueno", es: "el sueño", en: "dream", example: "Tuve un sueño rarísimo con el salón de clases.", exampleEn: "I had a really strange dream about the classroom." },
    { id: "v-casa-ventana", es: "la ventana", en: "window", example: "Abre la ventana, que aquí no se respira.", exampleEn: "Open the window, you can't breathe in here." },
    { id: "v-casa-puerta", es: "la puerta", en: "door", example: "La puerta del salón se traba en invierno.", exampleEn: "The classroom door sticks in winter." },
    { id: "v-casa-cuarto", es: "el cuarto", en: "bedroom", example: "Convertí el cuarto de atrás en oficina.", exampleEn: "I turned the back bedroom into an office." },
    { id: "v-casa-cocina", es: "la cocina", en: "kitchen", example: "Todo el mundo termina en la cocina.", exampleEn: "Everybody ends up in the kitchen." },
    { id: "v-casa-bano", es: "el baño", en: "bathroom", example: "¿Dónde queda el baño?", exampleEn: "Where's the bathroom?" },
    { id: "v-casa-lapiz", es: "el lápiz", en: "pencil", example: "Le presté un lápiz y no me lo devolvió.", exampleEn: "I lent him a pencil and he never gave it back." },
    { id: "v-casa-boligrafo", es: "el bolígrafo", en: "pen", example: "Se quedó sin tinta el bolígrafo a mitad del examen.", exampleEn: "The pen ran out of ink halfway through the exam." },
    { id: "v-casa-foto", es: "la foto", en: "photograph", example: "Me mandaron una foto del jardín de mi mamá.", exampleEn: "They sent me a photo of my mom's garden." },
    { id: "v-casa-jabon", es: "el jabón", en: "soap", example: "Nunca hay jabón en ese baño.", exampleEn: "There's never any soap in that bathroom." },
    { id: "v-casa-libro", es: "el libro", en: "book", example: "Ese libro lo empecé tres veces.", exampleEn: "I've started that book three times." },
    { id: "v-casa-pagina", es: "la página", en: "page", example: "Vamos en la página cuarenta.", exampleEn: "We're on page forty." },
    { id: "v-casa-llave", es: "la llave", en: "key", example: "Dejé las llaves adentro y me quedé afuera.", exampleEn: "I left the keys inside and got locked out." },
    { id: "v-casa-pintura", es: "la pintura", en: "paint", example: "La pintura del pasillo lleva años igual.", exampleEn: "The paint in the hallway hasn't changed in years." },
    { id: "v-casa-carta", es: "la carta", en: "letter", example: "Me escribió una carta a mano al final del curso.", exampleEn: "She wrote me a letter by hand at the end of the course." },
    { id: "v-casa-nota", es: "la nota", en: "note", example: "Te dejé una nota pegada en la puerta.", exampleEn: "I left you a note stuck on the door." },
    { id: "v-casa-pared", es: "la pared", en: "wall", example: "Colgamos los trabajos en la pared del fondo.", exampleEn: "We hung their work on the back wall." },
    { id: "v-casa-papel", es: "el papel", en: "paper", example: "Se me acabó el papel justo antes de imprimir.", exampleEn: "I ran out of paper right before printing." },
    { id: "v-casa-piso", es: "el piso", en: "floor", example: "El piso cruje en el mismo lugar de siempre.", exampleEn: "The floor creaks in the same spot as always." },
    { id: "v-casa-techo", es: "el techo", en: "ceiling", example: "Hay una mancha en el techo que crece.", exampleEn: "There's a stain on the ceiling that keeps growing." },
    { id: "v-casa-tejado", es: "el tejado", en: "roof", example: "La nieve se quedó en el tejado toda la semana.", exampleEn: "The snow sat on the roof all week." },
    { id: "v-casa-piscina", es: "la piscina", en: "pool", example: "De niña pasaba el verano entero en la piscina.", exampleEn: "As a kid I spent the whole summer in the pool." },
    { id: "v-casa-cerradura", es: "la cerradura", en: "lock", example: "Cambiaron la cerradura y no me avisaron.", exampleEn: "They changed the lock and didn't tell me." },
    { id: "v-casa-telefono", es: "el teléfono", en: "telephone", example: "Dejé el teléfono en silencio y me perdí la llamada.", exampleEn: "I left my phone on silent and missed the call." },
    { id: "v-casa-jardin", es: "el jardín", en: "garden", example: "Mi mamá manda fotos del jardín cada primavera.", exampleEn: "My mom sends photos of the garden every spring." },
    { id: "v-casa-patio", es: "el patio", en: "yard", example: "En el patio cabe una mesa y nada más.", exampleEn: "The yard fits a table and nothing else." },
    { id: "v-casa-aguja", es: "la aguja", en: "needle", example: "Necesito una aguja para este botón.", exampleEn: "I need a needle for this button." },
    { id: "v-casa-bolsa", es: "la bolsa", en: "bag", example: "Se rompió la bolsa a media cuadra.", exampleEn: "The bag broke half a block from home." },
    { id: "v-casa-caja", es: "la caja", en: "box", example: "Todavía tengo cajas sin abrir de la mudanza.", exampleEn: "I still have unopened boxes from the move." },
    { id: "v-casa-regalo", es: "el regalo", en: "gift", example: "Le hicieron un regalo entre toda la clase.", exampleEn: "The whole class went in on a gift for her." },
    { id: "v-casa-tarjeta", es: "la tarjeta", en: "card", example: "Firmamos la tarjeta en el pasillo a escondidas.", exampleEn: "We signed the card out in the hallway in secret." },
    { id: "v-casa-anillo", es: "el anillo", en: "ring", example: "Perdió el anillo y apareció en el bolsillo del abrigo.", exampleEn: "She lost the ring and it turned up in her coat pocket." },
    { id: "v-casa-herramienta", es: "la herramienta", en: "tool", example: "No tengo la herramienta correcta para esto.", exampleEn: "I don't have the right tool for this." },
  ],
};

export const electronica: VocabTheme = {
  slug: "electronica",
  label: "Electrónica",
  labelEn: "Electronics",
  words: [
    { id: "v-electronica-reloj", es: "el reloj", en: "clock", example: "El reloj del salón va cinco minutos adelantado.", exampleEn: "The classroom clock runs five minutes fast." },
    { id: "v-electronica-lampara", es: "la lámpara", en: "lamp", example: "Trabajo de noche con una sola lámpara prendida.", exampleEn: "I work at night with one lamp on." },
    { id: "v-electronica-ventilador", es: "el ventilador", en: "fan", example: "En junio el ventilador no da abasto.", exampleEn: "By June the fan can't keep up." },
    { id: "v-electronica-celular", es: "el celular", en: "cell phone", example: "Se me quedó el celular cargando en la cocina.", exampleEn: "I left my phone charging in the kitchen." },
    { id: "v-electronica-red", es: "la red", en: "network", example: "La red del edificio se cae cada tarde.", exampleEn: "The building's network goes down every afternoon." },
    { id: "v-electronica-computadora", es: "la computadora", en: "computer", example: "La computadora de la escuela tarda diez minutos en prender.", exampleEn: "The school computer takes ten minutes to boot." },
    { id: "v-electronica-programa", es: "el programa", en: "program (computer)", example: "Estoy escribiendo un programa que me corrige el español.", exampleEn: "I'm writing a program that corrects my Spanish." },
    { id: "v-electronica-portatil", es: "la portátil", en: "laptop", example: "Cargo la portátil a todos lados aunque pese.", exampleEn: "I carry the laptop everywhere even though it's heavy." },
    { id: "v-electronica-pantalla", es: "la pantalla", en: "screen", example: "Llevo demasiadas horas frente a la pantalla.", exampleEn: "I've spent too many hours in front of the screen." },
    { id: "v-electronica-camara", es: "la cámara", en: "camera", example: "Prende la cámara para que te vean.", exampleEn: "Turn your camera on so they can see you." },
    { id: "v-electronica-television", es: "la televisión", en: "television", example: "Dejo la televisión en español aunque no la mire.", exampleEn: "I leave the TV on in Spanish even when I'm not watching." },
    { id: "v-electronica-radio", es: "la radio", en: "radio", example: "Oigo la radio en el carro camino a la escuela.", exampleEn: "I listen to the radio in the car on the way to school." },
  ],
};
