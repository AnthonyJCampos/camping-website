import { MOBILE_NAV_MEDIA_QUERY } from './config.js';
import {
  revealSections,
  slideElementsIn,
  lazyLoadingImg,
  lazyLoadImgBySection,
  mediaQueryMenu,
} from './helper.js';

const init = function () {
  // determine if mobile nav is needed
  document.addEventListener('DOMContentLoaded', function () {
    // check initial page load
    mediaQueryMenu(MOBILE_NAV_MEDIA_QUERY);
    // dynamically check when page changes
    MOBILE_NAV_MEDIA_QUERY.addEventListener('change', mediaQueryMenu);
  });

  // lazy load any images tagged with the lazing img loading
  lazyLoadingImg();

  // get sections that will have a slide in effect applied to them
  const allSections = document.querySelectorAll('.section-effect');

  if (allSections) {
    // apply effect
    revealSections(allSections);

    // lazy load imgs by section
    lazyLoadImgBySection(allSections);
  }

  // set slid in effects on assigned sections
  const allSlideElements = document.querySelectorAll('.slide-in-effect');

  if (allSlideElements) {
    slideElementsIn(allSlideElements, 'alternating');
  }
};

init();
