// Calcula el tiempo faltante para el 1 de noviembre
function timeUntilNovember1st() {
  const now = new Date();
  const november1st = new Date(now.getFullYear(), 10, 1); // El mes 10 representa noviembre (enero es 0)
  const difference = november1st - now;

  // Calcula el tiempo restante en días, horas, minutos y segundos
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds
  };
}

// Actualiza el contador en la página
function updateCounter() {
  const timeLeft = timeUntilNovember1st();
  const countdownElement = document.getElementById("timer");
  countdownElement.textContent = `${timeLeft.days} días, ${timeLeft.hours} horas, ${timeLeft.minutes} minutos, ${timeLeft.seconds} segundos`;
}

// Actualiza el contador cada segundo
function startCountdown() {
  updateCounter();
  setInterval(updateCounter, 1000);
}

// Iniciar el contador cuando la página haya cargado completamente
document.addEventListener("DOMContentLoaded", startCountdown);
