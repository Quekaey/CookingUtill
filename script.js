document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const menu = document.querySelector('[data-menu]');
const nav = document.querySelector('[data-nav]');
menu?.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  nav?.classList.toggle('is-open', !expanded);
});

document.querySelectorAll('[data-product]').forEach((link) => {
  link.addEventListener('click', () => {
    const name = link.getAttribute('data-product');
    link.href = `https://wa.me/2349031609410?text=${encodeURIComponent(`Hello Verola Lux, I'm interested in the ${name}. Please share the price and availability.`)}`;
  });
});
