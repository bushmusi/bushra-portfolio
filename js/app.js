const event_tag_id = ['open-menu', 'onclick-close','onclick-portfolio', 'onclick-about', 'onclick-contact']
event_tag_id.forEach(
    addEvent
)

function addEvent(event_tag_id){
    document.getElementById(event_tag_id).addEventListener('click', () => {
            openCloseMenu();
        })
}

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