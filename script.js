const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
}
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(data.get('subject'));
  const body = encodeURIComponent(
`Name: ${data.get('name')}
Email: ${data.get('email')}

${data.get('message')}`
  );
  window.location.href = `mailto:vutavenkatasureshaws@gmail.com?subject=${subject}&body=${body}`;
  document.getElementById('formNote').textContent = 'Your email app should open with the message pre-filled.';
});
