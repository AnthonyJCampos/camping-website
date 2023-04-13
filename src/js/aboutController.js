import memoriesView from './views/memoriesView.js';
import { MEMORIES_COUNT, MOBILE_NAV_MEDIA_QUERY } from './config.js';
import {
  revealSections,
  lazyLoadImgBySection,
  mediaQueryMenu,
  loadLazyMemories,
  loadHQMemories,
} from './helper.js';

/** IMPORT ALL MEMORY IMAGES FOR PARCEL AND LAZY LOADING  */
import memoryLazyImgUrls from '../img/memories/lazy/*.jpg';
import memoryHQImgUrls from '../img/memories/*.jpg';

const init = async function () {
  // determine if mobile nav is needed
  document.addEventListener('DOMContentLoaded', function () {
    // check initial page load
    mediaQueryMenu(MOBILE_NAV_MEDIA_QUERY);
    // dynamically check when page changes
    MOBILE_NAV_MEDIA_QUERY.addEventListener('change', mediaQueryMenu);
  });

  // break down objects into each img url
  const readyLazyImgUrls = Object.values(memoryLazyImgUrls).map(value => value);
  const readyHQImgUrls = Object.values(memoryHQImgUrls).map(value => value);

  const data = {
    memoryCount: MEMORIES_COUNT,
    lazyImgUrls: readyLazyImgUrls,
    HQImgUrls: readyHQImgUrls,
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
