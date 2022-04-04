const navContainer = document.getElementById('navContainer');
const menuBar = document.getElementById('menuBar');
const closeMenu = document.getElementById('closeMenu');
const navbarLink = document.querySelectorAll('.navbarLink');
menuBar.addEventListener('click', () => {
  navContainer.style.left = '0';
});
closeMenu.addEventListener('click', () => {
  navContainer.style.left = '100%';
});
navbarLink.forEach((Link) => {
  Link.addEventListener('click', () => {
    navContainer.style.left = '100%';
  });
});