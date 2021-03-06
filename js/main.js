const fila = document.querySelector(".contenedor-carrousel");
const fila2 = document.querySelector(".contenedor-carrousel-2");
const fila3 = document.querySelector(".contenedor-carrousel-3");
const peliculas = document.querySelector(".pelicula");
const principal = document.querySelector(".pelicula-principal")

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

const izquierdaSeries = document.getElementById('series-izquierda');
const derechaSeries = document.getElementById('series-derecha');

const izquierdaDocumentales = document.getElementById('documental-izquierda');
const derechaDocumentales = document.getElementById('documental-derecha');
//-----------------------event listener para la flecha derecha-------//
flechaDerecha.addEventListener("click", () => {
	fila.scrollLeft += fila.offsetWidth;
	});

derechaSeries.addEventListener("click", () => {
  fila2.scrollLeft += fila2.offsetWidth;
  });

derechaDocumentales.addEventListener("click", () => {
  fila3.scrollLeft += fila3.offsetWidth;
  });
//-----------------------event listener para la flecha izquierda-------//
flechaIzquierda.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;
  });

izquierdaSeries.addEventListener("click", () => {
  fila2.scrollLeft -= fila2.offsetWidth;
  });

izquierdaDocumentales.addEventListener("click", () => {
  fila3.scrollLeft -= fila3.offsetWidth;
  });
//----------------------------------cambio de imagen principal al pasar el cursor-----------------//
function foto1() {
  document.getElementById("foto").style.backgroundImage = "url('img/backdrop.jpg')";
  document.getElementById('titulo').innerHTML = "Interestelar";
   document.getElementById('descripcion').innerHTML = "Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar."; 
 }
function foto2() {
  document.getElementById("foto").style.backgroundImage = "url('img/2.png')";
  document.getElementById('titulo').innerHTML = "Mision Rescate";
   document.getElementById('descripcion').innerHTML = "El astronauta Mark Watney, un bot??nico e ingeniero mec??nico de la NA,SA, se ve atrapado en el planeta Marte cuando la tripulaci??n del Ares 3 debe evacuar su lugar de aterrizaje ante una tormenta de arena. Sin su tripulaci??n, se ve obligado a encontrar la forma de regresar a la Tierra y sobrevivir confiando en sus habilidades cient??ficas y t??cnicas, antes de que se le agoten los suministros. Mientras que sus compa??eros astronautas piensan que podr??a estar muerto, Watney comienza a escribir un diario divagando sobre el futuro, despu??s de su muerte. Cuando la NASA descubre a trav??s del sat??lite que Mark podr??a estar vivo, comienzan a trabajar sobre su rescate, ocult??ndoselo al resto del grupo."; 
 }
 function foto3() {
  document.getElementById("foto").style.backgroundImage = "url('img/3.png')";
  document.getElementById('titulo').innerHTML = "Ready player one";
   document.getElementById('descripcion').innerHTML = "A??o 2044. Wade Watts es un adolescente al que le gusta evadirse del cada vez m??s sombr??o mundo real a trav??s de una popular utop??a virtual a escala global llamada Oasis, hasta que su exc??ntrico y multimillonario creador muere. Antes de morir, ofrece su fortuna como premio a una elaborada b??squeda del tesoro a trav??s de los rincones m??s inh??spitos de su creaci??n. Ser?? el punto de partida para que Wade se enfrente a jugadores, poderosos enemigos corporativos y otros competidores despiadados dispuestos a hacer lo que sea, tanto dentro de Oasis como del mundo real, para hacerse con el premio.";
 }
 function foto4() {
  document.getElementById("foto").style.backgroundImage = "url('img/4.png')";
  document.getElementById('titulo').innerHTML = "Top Gun";
   document.getElementById('descripcion').innerHTML = "La Marina de los Estados Unidos ha creado una escuela de ??lite para pilotos con el fin de sacar una promoci??n de expertos en t??cnicas de combate. En la academia, m??s conocida como Top Gun, a los mejores se les entrena para ser intr??pidos y fr??os al mismo tiempo, capaces de no perder los nervios en situaciones extremas y de no inmutarse al romper la barrera del sonido a los mandos de un F-14. A la escuela llega el joven Maverick, famoso por su temeraria aunque brillante forma de pilotar.";
 }
 function foto5() {
  document.getElementById("foto").style.backgroundImage = "url('img/5.png')";
  document.getElementById('titulo').innerHTML = "Tron, El Legado";
   document.getElementById('descripcion').innerHTML = "Cuando Sam Flynn (Garrett Hedlund), programador experto en tecnolog??a de 27 a??os e hijo de Kevin Flynn (Jeff Bridges), investiga la desaparici??n de su padre, se encuentra de repente inmerso en un peligroso y salvaje mundo surreal donde existen feroces luchas a muerte, un lugar paralelo donde su padre ha estado viviendo durante 25 a??os. Con la ayuda de una joven (Olivia Wilde), padre e hijo se embarcar??n en un viaje a vida o muerte a trav??s de un universo cibern??tico, que con el tiempo se ha convertido en mucho m??s avanzado y peligroso... Secuela del cl??sico de culto de 1982.";
 }
 function foto6() {
  document.getElementById("foto").style.backgroundImage = "url('img/6.png')";
  document.getElementById('titulo').innerHTML = "Batman, Dark knight";
   document.getElementById('descripcion').innesrHTML = "Batman/Bruce Wayne regresa para continuar su guerra contra el crimen. Con la ayuda del teniente Jim Gordon y del Fiscal del Distrito Harvey Dent, Batman se propone destruir el crimen organizado en la ciudad de Gotham. El triunvirato demuestra su eficacia, pero, de repente, aparece Joker, un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos.";
}
function foto7() {
  document.getElementById("foto").style.backgroundImage = "url('img/7.png')";
  document.getElementById('titulo').innerHTML = "Infierno Blanco";
   document.getElementById('descripcion').innesrHTML = "En ???Infierno blanco???, el personaje interpretado por Liam Neeson es el l??der de un indisciplinado grupo de trabajadores de una refiner??a cuyo avi??n se estrella en las remotas monta??as de Alaska. Los supervivientes, expuestos a heridas mortales y un tiempo inclemente, disponen de pocos d??as para escapar de los g??lidos elementos. Y por si el terrible fr??o fuera poco enemigo, una manada de lobos salvajes, amenazantes y sanguinarios, persiguen incansablemente a sus presas humanas. A medida que las indefensas v??ctimas caen una a una, las posibilidades de supervivencia del ??ltimo de estos hombres son cada vez m??s remotas.";
}