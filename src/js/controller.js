import * as homeModel from './models/homeModel.js';
import carouselView from './views/carouselView.js';
import memoriesView from './views/memoriesView.js';

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
};

init();
