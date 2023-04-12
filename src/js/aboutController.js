import memoriesView from './views/memoriesView.js';
import { MEMORIES_COUNT, MOBILE_NAV_MEDIA_QUERY } from './config.js';
import {
  revealSections,
  lazyLoadImgBySection,
  mediaQueryMenu,
} from './helper.js';

const init = async function () {
  // determine if mobile nav is needed
  document.addEventListener('DOMContentLoaded', function () {
    // check initial page load
    mediaQueryMenu(MOBILE_NAV_MEDIA_QUERY);
    // dynamically check when page changes
    MOBILE_NAV_MEDIA_QUERY.addEventListener('change', mediaQueryMenu);
  });

  const data = {
    memoryCount: MEMORIES_COUNT,
  };

  // render all current memory pictures for site
  memoriesView.render(data);

  // get sections that will have a slide in effect applied to them
  const allSections = document.querySelectorAll('.section-effect');

  if (allSections) {
    // apply effect
    revealSections(allSections);
    // lazy load imgs by section
    lazyLoadImgBySection(allSections);
  }
};

init();
