const loaderOn = () => {
  const loader = document.querySelector('.loader');
  loader.classList.add('loader_loading');
};

const loaderOff = () => {
  const loader = document.querySelector('.loader');
  loader.classList.remove('loader_loading');
};