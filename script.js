const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const currentYear = document.querySelector('#current-year');
const contactForm = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    const action = contactForm.getAttribute('action') || '';

    if (action.includes('TU_ID_FORMSPREE')) {
      event.preventDefault();
      formStatus.textContent = 'https://formspree.io/f/maqkggaz';
      return;
    }

    formStatus.textContent = 'Formulario listo para enviarse.';
  });
}
