const eventTagId = [];
const tagVals = document.querySelectorAll('.mob-menu-feat');
const bodyTag = document.querySelector('body');
tagVals.forEach((element) => {
  eventTagId.push(element.id);
});

function openCloseMenu() {
  const mobMenus = document.querySelector('.mobile-menu-list');
  if (mobMenus.style.display === 'flex') {
    mobMenus.style.display = 'none';
    bodyTag.style.overflow = 'scroll';
  } else {
    mobMenus.style.display = 'flex';
    bodyTag.style.overflow = 'hidden';
  }
}

function addEvent(eventTagId) {
  document.getElementById(eventTagId).addEventListener('click', () => {
    openCloseMenu();
  });
}

eventTagId.forEach(
  addEvent,
);

const projectContent = [{
  name: 'Tonic',
  description: "Tonic A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  mobileImage: './img/card2.svg',
  tech: ['html', 'css', 'javaScript'],
  sourceCode: 'https://github.com/bushmusi/Microverse-Portfolio',
  livecode: 'https://bushmusi.github.io/Microverse-Portfolio/',
},
{
  name: 'Multi-Post Stories',
  description: "Multi-Post Stories A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  mobileImage: './img/card2.svg',
  tech: ['html', 'css', 'javaScript', 'Angular'],
  sourceCode: 'https://github.com/bushmusi/Microverse-Portfolio',
  livecode: 'https://bushmusi.github.io/Microverse-Portfolio/',
},
{
  name: 'Facebook 360',
  description: "Facebook 360 A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  mobileImage: './img/card3.svg',
  tech: ['html', 'css', 'React'],
  sourceCode: 'https://github.com/bushmusi/Microverse-Portfolio',
  livecode: 'https://bushmusi.github.io/Microverse-Portfolio/',
},
{
  name: 'Uber Navigation',
  description: "Uber Navigationis A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  mobileImage: './img/card4.svg',
  tech: ['html', 'css', 'RoR', 'html'],
  sourceCode: 'https://github.com/bushmusi/Microverse-Portfolio',
  livecode: 'https://bushmusi.github.io/Microverse-Portfolio/',
}];

const projBtnList = [];
const btnListNode = document.querySelectorAll('.see-more');
const popWinSection = document.querySelector('.mobile-popup');

const popupHeader = `
  <div class="popup-heading">
    <h2 id="popup-title">Title Here</h2>
    <img src="./img/popup_cancel.png" alt="Pop Cancel" class="popup-cancel-btn" id="popup-win-cancel">
  </div>
`;

const projImg = `
  <div class="popup-proj-img">
    <img src="./img/snapshoot_portfolio.png" alt="Project Image" id="popup-proj-img">
  </div>
`;

const projDetail = `
  <div class="popup-proj-desc">
              
    <div class="popup-detail">
        <p id="popup-proj-desc"></p>
    </div>
    <div class="popup-tech-box">
        <ul class="popup-tech-list" id="popup-tech-list-id">
        </ul>
    </div>

  </div>
`;

const projBtns = `
  <div class="popup-btn">
    <a  href="#" target="_blank" id="popup-see-live" rel="noopener noreferrer">
        See Live <img src="./img/live_icon.png" alt="popup-btn-img" class="popup-btn-img">
    </a>
    <a  href="#"  target="_blank" id="popup-see-source" rel="noopener noreferrer">
        See Souurce <img src="./img/github_icon.png" alt="popup-btn-img" class="popup-btn-img" >
    </a>
  </div>
`;

popWinSection.innerHTML += popupHeader;
popWinSection.innerHTML += projImg;
popWinSection.innerHTML += projDetail;
popWinSection.innerHTML += projBtns;

function openClosePopupWin(element) {
  if (popWinSection.style.display === 'flex') {
    popWinSection.style.display = 'none';
    bodyTag.style.overflow = 'scroll';
  } else {
    popWinSection.style.display = 'flex';
    bodyTag.style.overflow = 'hidden';
    const currentProjIndex = projBtnList.indexOf(element.id);
    const name = document.getElementById('popup-title');
    name.textContent = projectContent[currentProjIndex].name;
    const projSource = document.getElementById('popup-see-live');
    projSource.href = projectContent[currentProjIndex].sourceCode;
    const projLive = document.getElementById('popup-see-source');
    projLive.href = projectContent[currentProjIndex].livecode;
    const img = document.querySelector('#popup-proj-img');
    img.src = projectContent[currentProjIndex].mobileImage;
    const desc = document.getElementById('popup-proj-desc');
    desc.textContent = projectContent[currentProjIndex].description;
    const techListNode = document.getElementById('popup-tech-list-id');
    const currentTechList = projectContent[currentProjIndex].tech;
    techListNode.innerHTML = '<li><img src="./img/vertical_col.png" alt="vertical_col"></li>';
    Object.keys(currentTechList).forEach((key) => {
      const liNode = '';
      techListNode.innerHTML += liNode.concat('<li>', currentTechList[key], '</li>');
      techListNode.innerHTML += '<li><img src="./img/vertical_col.png" alt="vertical_col"></li>';
    });
  }
}

document.getElementById('popup-win-cancel').addEventListener('click', () => {
  openClosePopupWin();
});

btnListNode.forEach((element) => {
  projBtnList.push(element.id);
  document.getElementById(element.id).addEventListener('click', () => {
    openClosePopupWin(element);
  });
});
