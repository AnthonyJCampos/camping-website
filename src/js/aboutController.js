import memoriesView from './views/memoriesView.js';
import { MEMORIES_COUNT } from './config.js';
import { revealSections, lazyLoadImgBySection } from './helper.js';

const init = async function () {
  const data = {
    memoryCount: MEMORIES_COUNT,
  };

  // render all current memory pictures for site
  memoriesView.render(data);

  // get sections that will have a slide in effect applied to them
  const allSections = document.querySelectorAll('.section-effect');

  // apply effect
  revealSections(allSections);
  // lazy load imgs by section
  lazyLoadImgBySection(allSections);
};

init();
