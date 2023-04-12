import * as homeModel from './models/homeModel.js';
import carouselView from './views/carouselView.js';
import {
  revealSections,
  slideElementsIn,
  lazyLoadImgBySection,
} from './helper.js';

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

  // lazy load imgs by section
  lazyLoadImgBySection(allSections);

  const allSlideElements = document.querySelectorAll('.slide-in-effect');
  slideElementsIn(allSlideElements, 'alternating');
};

init();

const mediaQuery = window.matchMedia('(max-width: 59em)');

function menu(mediaQuery) {
  if (mediaQuery.matches) {
    // If media query matches

    console.log('MATCHES ');
    const navBtn = document.querySelector('.btn-mobile-nav');
    console.log(navBtn);

    navBtn.addEventListener('click', function (event) {
      const header = document.querySelector('.header');

      if (header.classList.contains('nav-open')) {
        header.classList.remove('nav-open');
      } else {
        header.classList.add('nav-open');
      }
      console.log(header.classList);
    });
  }

  if (!mediaQuery.matches) {
    console.log('DOES NOT MATCH ');
    const header = document.querySelector('.header');
    header.classList.remove('nav-open');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  menu(mediaQuery);
  mediaQuery.addEventListener('change', menu);
});
