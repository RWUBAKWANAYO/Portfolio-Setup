const navContainer = document.getElementById('navContainer');
const menuBar = document.getElementById('menuBar');
const closeMenu = document.getElementById('closeMenu');
const navbarLink = document.querySelectorAll('.navbarLink');
const workContainer = document.getElementById('workContainer');
const popupContainer = document.getElementById('popupContainer');

// Menu toggle actions

menuBar.addEventListener('click', () => { navContainer.style.left = '0'; });
closeMenu.addEventListener('click', () => { navContainer.style.left = '100%'; });
navbarLink.forEach((Link) => {
  Link.addEventListener('click', () => { navContainer.style.left = '100%'; });
});

// work section actions

const details = [
  {
    id: 1,
    title: 'Tonic',
    place: 'CANOPY',
    position: 'Back End Dev',
    period: '2015',
    skills: ['html', 'css', 'javaScript'],
    image: './images/tonic.jpg',
    live_demo: 'https://rwubakwanayo.github.io/Portfolio-Setup/',
    source_code: 'https://github.com/RWUBAKWANAYO/Portfolio-Setup',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
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
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
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
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required .',
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
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  },

];
const getWorkData = details.map((item, index) => {
  const skillsList = item.skills.map((list) => `<li>${list}</li>`).join('');
  const content = index % 2 === 0 ? `<div class="work-wrapper">
      <div class="work-sub-cont work-img-wrapper">
        <img src=${item.image} class="work-place-img" />
      </div>
      <div class="work-sub-cont work-desc-wrapper">
        <h2>${item.title}</h2>
        <div class="work-desc-wrapper-div">
          <span class="work-desc-wrapper-position work-desc-wrapper-item">${item.place}</span>
          <i></i>
          <span class="work-desc-wrapper-item">${item.position}</span>
          <i></i>
          <span class="work-desc-wrapper-item">${item.period}</span>
        </div>
        <p>${item.description}</p>
        <ul>${skillsList}</ul>
        <button type="button" onclick="popupDetailsFunc(${item.id})">See Project</button>
      </div>
    </div>` : `<div class="work-wrapper reversed-wrapper">
      <div class="work-sub-cont work-img-wrapper">
        <img src=${item.image} class="work-place-img" />
      </div>
      <div class="work-sub-cont work-desc-wrapper">
        <h2>${item.title}</h2>
        <div class="work-desc-wrapper-div">
          <span class="work-desc-wrapper-position work-desc-wrapper-item">${item.place}</span>
          <i></i>
          <span class="work-desc-wrapper-item">${item.position}</span>
          <i></i>
          <span class="work-desc-wrapper-item">${item.period}</span>
        </div>
        <p>${item.description}</p>
        <ul>${skillsList}</ul>
        <button type="button" onclick="popupDetailsFunc(${item.id})">See Project</button>
      </div>
    </div>`;
  return content;
});
const popupDetailsFunc = (cardId) => {
  if (cardId === null) return;
  let item = details.filter((el) => el.id === cardId);
  item = item.shift();
  const skillsList = item.skills.map((list) => `<li>${list}</li>`).join('');
  const res = ` <div class="popup-wrapper">
        <div class="popup-sub-wrapper">
          <div class="popup-header">
            <div>
              <h2 id="popupTitle">${item.title}</h2>
              <div class="work-desc-wrapper-div">
                <span class="work-desc-wrapper-position work-desc-wrapper-item" id="popupPlace">${item.place}</span>
                <i></i>
                <span class="work-desc-wrapper-item" id="popupPosition">${item.position}</span>
                <i></i>
                <span class="work-desc-wrapper-item" id="popupPeriod">${item.period}</span>
              </div>
            </div>
            <i class="fa-solid fa-xmark" id="popupClose" onclick="closePopupFunc()"></i>
          </div>
          <div class="popup-img"><img src=${item.image} class="work-place-img" id="popupImage" /></div>
          <div class="popup-skills-cont">
            <p id="popupDescription">${item.description}</p>
            <div class="popup-skills-badge">
              <ul id="popupSkills">${skillsList}</ul>
              <div class="popup-link-main-cont">
                <a href="#" target="_blank" class="popup-link-cont" id="liveDemo">
                  <span class="popup-link">
                See live
                <i class="fa-solid fa-up-right-from-square"></i>
              </span>
                </a>
                <a href="#" target="_blank" class="popup-link-cont" id="sourceCode">
                  <span class="popup-link">
                <span>See Source</span>
                  <i class="fa-brands fa-github"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>`;

  popupContainer.style.transform = 'translate(0%,0%) scale(1)';
  document.body.style.overflow = 'hidden';
  popupContainer.innerHTML = res;
};

const closePopupFunc = (status) => {
  if (status === null) return;
  document.body.style.overflow = 'scroll';
  popupContainer.style.transform = 'translate(0%,0%) scale(0)';
};
window.addEventListener('load', () => {
  workContainer.innerHTML = getWorkData;
  return workContainer;
});
closePopupFunc(null);
popupDetailsFunc(null);

// Form validation

const contactFormCont = document.getElementById('contactFormCont');
contactFormCont.addEventListener('submit', (event) => {
  const emailInput = contactFormCont.email.value;
  if (emailInput.toLowerCase() !== emailInput) {
    event.preventDefault();
    const errorTag = contactFormCont.getElementsByTagName('small');
    errorTag[0].innerHTML = 'Please insert email address in lowercase!';
  } else {
    contactFormCont.action = 'https://formspree.io/f/xayvbzrj';
  }
});