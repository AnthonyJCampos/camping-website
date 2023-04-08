import { slideElementsIn, lazyLoadingImg } from './helper.js';

const init = function () {
  const allSlideElements = document.querySelectorAll('.slide-in-effect');
  slideElementsIn(allSlideElements, 'alternating');

  lazyLoadingImg();
};

init();
