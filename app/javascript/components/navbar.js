function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-ledja');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-wagon-brand');
      } else {
        navbar.classList.remove('navbar-wagon-brand');
      }
    });
  }
}
export { initUpdateNavbarOnScroll };
