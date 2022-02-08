const portLink = document.querySelector('#portfolio-link');
function portfolioObserver() {
  const portfolioSection = document.querySelector('.work-opening');
  const options = {
    rootMargin: '-280px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        portLink.classList.add('active-link');
      }
    });
  }, options);
  observer.observe(portfolioSection);
}

portfolioObserver();

function aboutObserver() {
  const linkNode = document.querySelector('#about-link');
  const aboutSection = document.querySelector('#about');

  const options = {
    rootMargin: '-280px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        linkNode.classList.add('active-link');
        portLink.classList.toggle('active-link');
      } else {
        linkNode.classList.remove('active-link');
        portLink.classList.toggle('active-link');
      }
    });
  }, options);
  observer.observe(aboutSection);
}

aboutObserver();

function contactObserver() {
  const linkNode = document.querySelector('#contact-link');
  const sectionNode = document.querySelector('#contact');

  const options = {
    rootMargin: '-280px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        linkNode.classList.add('active-link');
        portLink.classList.toggle('active-link');
      } else {
        linkNode.classList.remove('active-link');
        portLink.classList.toggle('active-link');
      }
    });
  }, options);

  observer.observe(sectionNode);
}

contactObserver();
