const graffiti = document.getElementById("graffiti");
const pauseButton = document.getElementById("pause");
const currentTime = document.getElementById("currentTime");

let pausado = false;

// Pausar / continuar animación
pauseButton.addEventListener("click", () => {
  pausado = !pausado;

  if (pausado) {
    graffiti.style.animationPlayState = "paused";
    pauseButton.textContent = "▶ Continuar";
  } else {
    graffiti.style.animationPlayState = "running";
    pauseButton.textContent = "⏸ Pausar";
  }
});

// Mostrar hora
function actualizarHora() {
  const ahora = new Date();

  currentTime.textContent =
    "Hora: " +
    ahora.toLocaleTimeString("es-MX");
}

setInterval(actualizarHora, 1000);
actualizarHora();