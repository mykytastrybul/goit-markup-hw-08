
const menuBtnRef = document.querySelectorAll('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');

menuBtnRef.forEach(btn => {
btn.addEventListener('click', () => {
toggleMobMenu(btn);
});
});

function toggleMobMenu(btn) {
const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
btn.classList.toggle('is-open');
btn.setAttribute('aria-expanded', !expanded);

mobileMenuRef.classList.toggle('is-open');
} 