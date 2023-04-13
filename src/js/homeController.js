import { MOBILE_NAV_MEDIA_QUERY } from './config.js';
import * as homeModel from './models/homeModel.js';
import carouselView from './views/carouselView.js';
import {
  revealSections,
  slideElementsIn,
  lazyLoadImgBySection,
  mediaQueryMenu,
  navLinkHandler,
} from './helper.js';

const controlCarousel = function (goToCamper) {
  if (goToCamper === undefined) {
    return;
  }
  carouselView.render(homeModel.getTestimonial(goToCamper));
};

const init = function () {
  document.addEventListener('DOMContentLoaded', function () {
    // check initial page load
    mediaQueryMenu(MOBILE_NAV_MEDIA_QUERY);
    // dynamically check when page changes
    MOBILE_NAV_MEDIA_QUERY.addEventListener('change', mediaQueryMenu);
  });

  // NAV MENU handler
  navLinkHandler();

  carouselView.render(homeModel.getTestimonial());
  carouselView.addDotHandler(controlCarousel);
  carouselView.addBtnHandler(controlCarousel);

  // get sections that will have a slide in effect applied to them
  const allSections = document.querySelectorAll('.section-effect');

  // apply effect
  revealSections(allSections);

  // lazy load imgs by section
  lazyLoadImgBySection(allSections);

  // set slid in effects on assigned sections
  const allSlideElements = document.querySelectorAll('.slide-in-effect');
  slideElementsIn(allSlideElements, 'alternating');
};

init();
