import memoriesView from './views/memoriesView.js';
import { MEMORIES_COUNT } from './config.js';
import {
  lazyLoadingImg,
  removeBlur,
  revealSections,
  lazyLoadImgBySection,
} from './helper.js';

const init = async function () {
  const data = {
    memoryCount: MEMORIES_COUNT,
  };
  memoriesView.render(data);

  // lazyLoadingImg();
};

init();

const allSections = document.querySelectorAll('section');

revealSections(allSections);
lazyLoadImgBySection(allSections);
// removeBlur();
