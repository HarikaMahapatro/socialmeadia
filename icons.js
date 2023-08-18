
const fbIcon = document.querySelector('.fb-btn');
const igIcon = document.querySelector('.ig-btn');
const twIcon = document.querySelector('.tw-btn');
const ghIcon = document.querySelector('.gh-btn');
const ytIcon = document.querySelector('.yt-btn');


const fbLink = 'https://www.facebook.com';
const igLink = 'https://www.instagram.com/accounts/login/';
const twLink = 'https://twitter.com/login';
const ghLink = 'https://github.com/';
const ytLink = 'https://www.youtube.com/';


fbIcon.addEventListener('click', function () {
  window.open(fbLink, '_blank');
});

igIcon.addEventListener('click', function () {
  window.open(igLink, '_blank');
});

twIcon.addEventListener('click', function () {
  window.open(twLink, '_blank');
});

ghIcon.addEventListener('click', function () {
  window.open(ghLink, '_blank');
});

ytIcon.addEventListener('click', function () {
  window.open(ytLink, '_blank');
});
