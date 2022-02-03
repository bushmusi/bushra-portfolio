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
  title: 'Tonic',
  text: "Tonic is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  mobileImage: './img/card1.png',
  tech: ['html', 'css', 'javaScript'],
},
{
  title: 'Multi-Post Stories',
  text: "Multi-Post Stories is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and ",
  mobileImage: './img/card2.svg',
  tech: ['html', 'css', 'javaScript', 'Angular'],
},
{
  title: 'Facebook 360',
  text: "Facebook 360 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  mobileImage: './img/card3.svg',
  tech: ['html', 'css', 'React'],
},
{
  title: 'Uber Navigation',
  text: "Uber Navigationis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  mobileImage: './img/card4.svg',
  tech: ['html', 'css', 'RoR', 'html'],
}];

const projBtnList = [];
const btnListNode = document.querySelectorAll('.see-more');
const popWinSection = document.querySelector('.mobile-popup');

function openClosePopupWin(element) {
  if (popWinSection.style.display === 'flex') {
    popWinSection.style.display = 'none';
    bodyTag.style.overflow = 'scroll';
  } else {
    popWinSection.style.display = 'flex';
    bodyTag.style.overflow = 'hidden';
    const currentProjIndex = projBtnList.indexOf(element.id);
    const title = document.getElementById('popup-title');
    title.textContent = projectContent[currentProjIndex].title;
    const img = document.querySelector('#popup-proj-img');
    img.src = projectContent[currentProjIndex].mobileImage;
    const desc = document.getElementById('popup-proj-desc');
    desc.textContent = projectContent[currentProjIndex].text;
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
