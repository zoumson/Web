/* use title tells which page is loaded in window */
var title = document.title;

/* sidebar click event trigger closing of actual page and opening of the button pressed page */
/* home button pressed */
var homeButton = document.querySelector('#sidebar-home-text');
homeButton.addEventListener('click', () => {
  /* do nothing if actual page is home page */
  if (title != 'home') {
    window.close('about.html');
    window.open('index.html');
  }
});

/* about button pressed */
var aboutButton = document.querySelector('#sidebar-about-text');
aboutButton.addEventListener('click', () => {
  /* do nothing if actual page is about page */
  if (title != 'about') {
    window.close('about.html');
    window.open('about.html');
  }
});

/* blog button pressed */
var blogButton = document.querySelector('#sidebar-blog-text');
blogButton.addEventListener('click', () => {
  /* do nothing if actual page is blog page */
  if (title != 'blog') {
    window.close('about.html');
    window.open('blog.html');
  }
});

/* contact button pressed */
var contactButton = document.querySelector('#sidebar-contact-text');
contactButton.addEventListener('click', () => {
  /* do nothing if actual page is contact page */
  if (title != 'contact') {
    window.close('about.html');
    window.open('contact.html');
  }
});

/* end of sidebar button clicking event */

/*closing  data  function */

function closeSubTitle(xButton) {
  var subTitle = xButton.parentElement;
  xButton.addEventListener('click', () => {
    subTitle.style.display = 'none';
  });
}

function closeShowSubTitleFromTitle(dataTitle) {
  var titleSubTitle = dataTitle.nextElementSibling;
  dataTitle.addEventListener('click', () => {
    /* show subTitle if it is closed  vice versa*/
    if (
      titleSubTitle.style.display == '' ||
      titleSubTitle.style.display == 'none'
    ) {
      titleSubTitle.style.display = 'block';
    } else {
      //dataTitle.parentElement.style.display = 'block';
      //dataTitle.parentElement.style.height = '100%';
      // dataTitle.parentElement.style.height = '100%';

      //dataTitle.style.width = '100%';
      titleSubTitle.style.display = 'none';
    }
  });
}

/* applying closing event */
var dataTitleAll = document.querySelectorAll('.data-title');
var xCloseDataSubTitleAll = document.querySelectorAll('.close');

dataTitleAll.forEach((dataTitle) => {
  closeShowSubTitleFromTitle(dataTitle);
});
xCloseDataSubTitleAll.forEach((dataSubTitle) => {
  closeSubTitle(dataSubTitle);
});
