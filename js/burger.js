const hamburgerOpenBtn = document.querySelector('#hamburgerOpenBtn');
const hamburgerCloseBtn = document.querySelector('.hamburgerCloseBtn');
const hamburgerOverlay = document.querySelector('.hamburgOverlay');

hamburgerOpenBtn.onclick = () => {
  hamburgerOverlay.classList.remove('hide');
  hamburgerOpenBtn.style.display = 'none';
};
hamburgerCloseBtn.onclick = () => {
  hamburgerOverlay.classList.add('hide');
  hamburgerOpenBtn.style.display = 'block';
};
