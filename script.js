// Definir la fecha objetivo: 21 de agosto a las 7:00 PM (19:00 hrs)
const targetDate = new Date("August 21, 2026 17:14:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  // Elementos del DOM
  const countdownSection = document.querySelector(".countdown-container");
  const eventMessage = document.getElementById("event-message");
  const headerTitle = document.querySelector(".header h1");
  const headerSubtitles = document.querySelectorAll(".header .subtitle");
  const socialFooter = document.querySelector(".social-footer");

  if (difference <= 0) {
    // Ocultar contador
    if (countdownSection) countdownSection.style.display = "none";

    // Actualizar encabezado 
    if (headerTitle) headerTitle.textContent = "¡Bienvenida energía solar!";
    headerSubtitles.forEach(sub => sub.style.display = "none");

    // Ocultar redes sociales originales
    if (socialFooter) socialFooter.style.display = "none";

    if (eventMessage) {
      eventMessage.innerHTML = `
        <h2>¡Conoce a detalle el nuevo poder de nuestra escuela!</h2>
        <p style="margin-bottom: 1.25rem;">Síguenos para no perderte ninguna novedad:</p>
        <div class="social-links">
          <a href="https://www.instagram.com/eco.santaana/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/ecosantaanasv" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      `;
      eventMessage.style.display = "block";
    }

    return;
  }

  // Elementos del contador
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  // Cálculos de tiempo
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Formatear ceros a la izquierda
  if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
  if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
  if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
  if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
}

// Ejecutar de inmediato y luego cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);