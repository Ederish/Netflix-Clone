const fila = document.querySelector(".contenedor-carrousel");
const carrousel = document.querySelector(".carrousel");
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

const apiKey = "//The movie DB accces token";
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

fetch(url)
  .then(resp => resp.json())
  .then(data => Crear(data.results));

function Crear(data) {
  for (const movie of data) {
    carrousel.innerHTML += `
      <div class="pelicula">
        <a href="https://www.themoviedb.org/movie/${movie.id}">
          <img id="img" src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt="${movie.title} onmouseover="foto()">
        </a>
      </div>`;
      //foto(movie);
  }
}  
// Event listeners for the left arrow buttons
flechaIzquierda.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;
});

// Event listeners for the right arrow buttons
flechaDerecha.addEventListener("click", () => {
    fila.scrollLeft += fila.offsetWidth;
});
//----------------------------------cambio de imagen principal al pasar el cursor-----------------//
function foto(movie) {
movie.id.addEventListener('click',()=>{
     document.getElementById("foto").style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`;
     document.getElementById('titulo').innerHTML = movie.title;
     document.getElementById('descripcion').innerHTML = movie.overview; 
  })
 }
