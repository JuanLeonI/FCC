const btnAbrir = document.querySelector("#Abrir");
const btnCerrar = document.querySelector("#Cerrar");

//Abrir Carta
btnAbrir.addEventListener("click", () => {
  const ElementoSuperior = document.querySelector(".superior");
  ElementoSuperior.classList.add("abrir-superior");

  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  h1.style.transform = "translateY(-120px)";
  p.style.transform = "translateY(-120px)";
  h1.style.transition = "transform 0.65s ease-in-out";
  p.style.transition = "transform 0.65s ease-in-out";

  const IconoCorazon = document.querySelector(".bx");
  IconoCorazon.classList.add("bx-rotada");

  setTimeout(() => {
    ElementoSuperior.style.zIndex = -1;
    const ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.add("abrir-mensaje");
  }, 700);
  
});

//Cerrar Carta
btnCerrar.addEventListener("click", () => {
  const ElementoSuperior = document.querySelector(".superior");

  const ElementoMensaje = document.querySelector(".mensaje");
  ElementoMensaje.classList.remove("abrir-mensaje");

  setTimeout(() => {
    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");
    h1.style.transform = "translateY(0px)";
    p.style.transform = "translateY(0px)";

    ElementoSuperior.style.zIndex = 0;
    ElementoSuperior.classList.remove("abrir-superior");

    const IconoCorazon = document.querySelector(".bx");
    IconoCorazon.classList.remove("bx-rotada");
  }, 700);
});

// Con click en la carta
const contenedor = document.querySelector("#AbrirContenedor");
// Abrir carta al hacer click en el contenedor
contenedor.addEventListener("click", () => {
  const ElementoSuperior = document.querySelector(".superior");
  ElementoSuperior.classList.add("abrir-superior");

  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  h1.style.transform = "translateY(-120px)";
  p.style.transform = "translateY(-120px)";
  h1.style.transition = "transform 0.65s ease-in-out";
  p.style.transition = "transform 0.65s ease-in-out";

  const IconoCorazon = document.querySelector(".bx");
  IconoCorazon.classList.add("bx-rotada");

  setTimeout(() => {
    ElementoSuperior.style.zIndex = -1;
    const ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.add("abrir-mensaje");
  }, 700);
});
// Botón Volver
document.getElementById("Volver").addEventListener("click", function(e) {
  e.preventDefault();
  window.location.href = "../index.html";
});
// Control de música GLOBAL (agrega al inicio del archivo)
const musica = document.getElementById('musicaFondo');

function toggleMusic() {
  if (musica.paused) {
    musica.play();
    document.querySelector('.music-controls i').className = 'bx bx-pause';
  } else {
    musica.pause();
    document.querySelector('.music-controls i').className = 'bx bx-play';
  }
}

function changeVolume(vol) {
  musica.volume = vol;
}

// Iniciar música al abrir la carta (opcional)
document.addEventListener('DOMContentLoaded', function() {
  musica.play().catch(e => console.log("Autoplay bloqueado: ", e));
  document.querySelector('.music-controls i').className = 'bx bx-pause';
});
// En tu JS de cartas, agregar:
document.body.addEventListener('click', function initAudio() {
  musica.play().then(() => {
    document.querySelector('.music-controls i').className = 'bx bx-pause';
  });
  document.body.removeEventListener('click', initAudio);
}, { once: true });
// Control del botón Volver (opcional - solo si el enlace no funciona)
document.getElementById('volver-btn').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "../index.html";
  });