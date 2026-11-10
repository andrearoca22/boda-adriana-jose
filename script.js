const CONFIG = { rsvpEndpoint: "[PEGAR_AQUI_URL_DE_GOOGLE_APPS_SCRIPT]" };

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => { const open = navLinks.classList.toggle('open'); menuButton.setAttribute('aria-expanded', open); });
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelector('#rsvp-form').addEventListener('submit', async event => {
  event.preventDefault();
  const message = document.querySelector('#form-message');
  const button = event.target.querySelector('button');
  if (CONFIG.rsvpEndpoint.startsWith('[')) { message.textContent = 'El formulario está preparado. Falta conectar Google Sheets.'; return; }
  button.disabled = true; message.textContent = 'Enviando…';
  try { await fetch(CONFIG.rsvpEndpoint, { method:'POST', mode:'no-cors', body:new FormData(event.target) }); event.target.reset(); message.textContent = '¡Gracias! Hemos recibido tu confirmación.'; }
  catch { message.textContent = 'No se ha podido enviar. Inténtalo de nuevo.'; }
  finally { button.disabled = false; }
});

const countdown = document.querySelector('#countdown');
if (countdown) {
  const weddingDate = new Date('2027-09-18T12:00:00+02:00');
  const updateCountdown = () => {
    const remaining = weddingDate - new Date();
    if (remaining <= 0) { countdown.textContent = '¡Hoy celebramos juntos!'; return; }
    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    countdown.textContent = days + ' días · ' + hours + ' horas · ' + minutes + ' minutos';
  };
  updateCountdown();
  setInterval(updateCountdown, 60000);
}
