const eventTagId = ['open-menu', 'onclick-close', 'onclick-portfolio', 'onclick-about', 'onclick-contact'];

function openCloseMenu() {
  const x = document.querySelector('.mobile-menu-list');
  const y = document.querySelector('body');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
    y.style.overflow = 'scroll';
  } else {
    x.style.display = 'flex';
    y.style.overflow = 'hidden';
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
