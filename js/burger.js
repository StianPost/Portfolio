const hamburgerOpenBtn = document.querySelector('#hamburgerOpenBtn');
const hamburgerCloseBtn = document.querySelector('#hamburgerCloseBtn');
const hamburgerOverlay = document.querySelector('#hamburgOverlay');

hamburgerOpenBtn.onclick = () => {
  // hamburgerOverlay.classList.remove('hide');
  hamburgerOpenBtn.classList.add('hide');
  hamburgerOverlay.style.display = 'block';
  console.log('open');
};
hamburgerCloseBtn.onclick = () => {
  // hamburgerOverlay.classList.add('hide');
  hamburgerOverlay.style.display = 'none';
  hamburgerOpenBtn.classList.remove('hide');
  console.log('close');
};
