let navContainer = document.getElementById('navContainer');
let menuBar = document.getElementById('menuBar');
let closeMenu = document.getElementById('closeMenu');
let navbarLink = document.querySelectorAll('.navbarLink');

menuBar.addEventListener('click', () => {
	navContainer.style.left = '0';
});
closeMenu.addEventListener('click', () => {
	navContainer.style.left = '100%';
});
navbarLink.forEach(Link => {
Link.addEventListener('click', () => {
	navContainer.style.left = '100%';
});
})

