function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-home');
  \
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.remove('navbar-transparent');
      } else {
        navbar.classList.add('navbar-transparent');
      }
    });
  }
}
export { initUpdateNavbarOnScroll };
