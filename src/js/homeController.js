import * as homeModel from './models/homeModel.js';
import carouselView from './views/carouselView.js';
import { revealSections, slideElementsIn } from './helper.js';

const controlCarousel = function (goToCamper) {
  if (goToCamper === undefined) {
    return;
  }
  carouselView.render(homeModel.getTestimonial(goToCamper));
};

const init = function () {
  carouselView.render(homeModel.getTestimonial());
  carouselView.addDotHandler(controlCarousel);
  carouselView.addBtnHandler(controlCarousel);

  // get sections that will have a slide in effect applied to them
  const allSections = document.querySelectorAll('.section-effect');

  // apply effect
  revealSections(allSections);

  const allSlideElements = document.querySelectorAll('.slide-in-effect');
  slideElementsIn(allSlideElements);
};

init();
