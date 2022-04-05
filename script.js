const navContainer = document.getElementById('navContainer');
const menuBar = document.getElementById('menuBar');
const closeMenu = document.getElementById('closeMenu');
const navbarLink = document.querySelectorAll('.navbarLink');
const popupContainer = document.getElementById('popupContainer');
const poupButton = document.getElementById('poupButton');
const popupClose = document.getElementById('popupClose');
const popupTitle = document.getElementById('popupTitle');
const popupPlace = document.getElementById('popupPlace');
const popupPosition = document.getElementById('popupPosition');
const popupPeriod = document.getElementById('popupPeriod');
const popupSkills = document.getElementById('popupSkills');
const popupImage = document.getElementById('popupImage');

// Menu toggle actions

menuBar.addEventListener('click', () => { navContainer.style.left = '0'; });
closeMenu.addEventListener('click', () => { navContainer.style.left = '100%'; });
navbarLink.forEach((Link) => {
  Link.addEventListener('click', () => { navContainer.style.left = '100%'; });
});

// Popup actions

const details = [
  {
    id: 1,
    title: 'Tonic',
    place: 'CANOPY',
    position: 'Back End Dev',
    period: '2015',
    skills: ['html', 'css', 'javaScript'],
    image: './images/tonic.jpg',
  },
  {
    id: 2,
    title: 'Uber Navigation',
    place: 'Uber',
    position: 'Lead Developer',
    period: '2018',
    skills: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: './images/multipost.png',
  },
  {
    id: 3,
    title: 'Facebook 360',
    place: 'CANOPY',
    position: 'Back End Dev',
    period: '2015',
    skills: ['html', 'css', 'javaScript'],
    image: './images/tonic2.png',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    place: 'FACEBOOK',
    position: 'Full Stack Dev',
    period: '2015',
    skills: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: './images/art.png',
  },
];
const getData = (workId) => {
  let item = details.filter((el) => el.id === workId);
  item = item.shift();
  const eachSkills = item.skills.map((el) => `<li>${el}</li>`);
  popupTitle.innerHTML = item.title;
  popupPeriod.innerHTML = item.period;
  popupPlace.innerHTML = item.place;
  popupPosition.innerHTML = item.position;
  popupImage.src = item.image;
  popupSkills.innerHTML = eachSkills;
  popupContainer.style.transform = 'translate(0%,0%) scale(1)';
};
poupButton.addEventListener('click', () => getData);
popupClose.addEventListener('click', () => { popupContainer.style.transform = 'translate(0%,0%) scale(0)'; });
