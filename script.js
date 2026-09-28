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
