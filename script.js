const navContainer = document.getElementById('navContainer');
const menuBar = document.getElementById('menuBar');
const closeMenu = document.getElementById('closeMenu');
const navbarLink = document.querySelectorAll('.navbarLink');
const popupContainer = document.getElementById('popupContainer');
const popupButton = document.getElementById('popupButton');
const popupClose = document.getElementById('popupClose');
const popupTitle = document.getElementById('popupTitle');
const popupDescription = document.getElementById('popupDescription');
const popupPlace = document.getElementById('popupPlace');
const popupPosition = document.getElementById('popupPosition');
const popupPeriod = document.getElementById('popupPeriod');
const popupSkills = document.getElementById('popupSkills');
const popupImage = document.getElementById('popupImage');
const liveDemo = document.getElementById('liveDemo');
const sourceCode = document.getElementById('sourceCode');

// Menu toggle actions

menuBar.addEventListener('click', () => { navContainer.style.left = '0'; });
closeMenu.addEventListener('click', () => { navContainer.style.left = '100%'; });
navbarLink.forEach((Link) => {
  Link.addEventListener('click', () => { navContainer.style.left = '100%'; });
});

// Popup actions

const details = [{
  id: 1,
  title: 'Tonic',
  place: 'CANOPY',
  position: 'Back End Dev',
  period: '2015',
  skills: ['html', 'css', 'javaScript'],
  image: './images/tonic.jpg',
  live_demo: 'https://rwubakwanayo.github.io/Portfolio-Setup/',
  source_code: 'https://github.com/RWUBAKWANAYO/Portfolio-Setup',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum han printer took a galley of type and scrambled it 1960 s with the releawn printer took a galley of type and scrambled it 1960 s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
},
{
  id: 2,
  title: 'Uber Navigation',
  place: 'Uber',
  position: 'Lead Developer',
  period: '2018',
  skills: ['html', 'Ruby on rails', 'css', 'javaScript'],
  image: './images/multipost.png',
  live_demo: 'https://rwubakwanayo.github.io/Portfolio-Setup/',
  source_code: 'https://github.com/RWUBAKWANAYO/Portfolio-Setup',
  description: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car. <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum han printer took a galley of type and scrambled it 1960 s with the releawn printer took a galley of type and scrambled it 1960 s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
},
{
  id: 3,
  title: 'Facebook 360',
  place: 'CANOPY',
  position: 'Back End Dev',
  period: '2015',
  skills: ['html', 'css', 'javaScript'],
  image: './images/tonic2.png',
  live_demo: 'https://rwubakwanayo.github.io/Portfolio-Setup/',
  source_code: 'https://github.com/RWUBAKWANAYO/Portfolio-Setup',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required . <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum han printer took a galley of type and scrambled it 1960 s with the releawn printer took a galley of type and scrambled it 1960 s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
},
{
  id: 4,
  title: 'Multi-Post Stories',
  place: 'FACEBOOK',
  position: 'Full Stack Dev',
  period: '2015',
  skills: ['html', 'Ruby on rails', 'css', 'javaScript'],
  image: './images/art.png',
  live_demo: 'https://rwubakwanayo.github.io/Portfolio-Setup/',
  source_code: 'https://github.com/RWUBAKWANAYO/Portfolio-Setup',
  description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends. <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum han printer took a galley of type and scrambled it 1960 s with the releawn printer took a galley of type and scrambled it 1960 s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
},
];
const getData = (workId) => {
  let item = details.filter((el) => el.id === workId);
  item = item.shift();
  popupTitle.innerHTML = item.title;
  popupDescription.innerHTML = item.description;
  popupPeriod.innerHTML = item.period;
  popupPlace.innerHTML = item.place;
  popupPosition.innerHTML = item.position;
  popupImage.src = item.image;
  liveDemo.href = item.live_demo;
  sourceCode.href = item.source_code;
  item.skills.map((el) => {
    const node = document.createElement('li');
    const textnode = document.createTextNode(el);
    node.appendChild(textnode);
    return popupSkills.appendChild(node);
  });
  popupContainer.style.transform = 'translate(0%,0%) scale(1)';
};
popupButton.addEventListener('click', () => getData);
popupClose.addEventListener('click', () => {
  popupContainer.style.transform = 'translate(0%,0%) scale(0)';
  popupSkills.innerHTML = '';
});