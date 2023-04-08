/** HELPER METHODS */

/** CHECK IF ELEMENT IS IN VIEWPORT */
const isPartiallyInViewport = function (element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
};

/** METHOD TO EXCUTE METHODS AFTER THE PAGE HAS LOADED */
export const executeAfterLoad = function (callbackFunc) {
  document.addEventListener('DOMContentLoaded', function (event) {
    callbackFunc;
  });
};

/** +++++++++++++++++++++++++++++++++  */
/** EFFECTS HELPERS   */
/** +++++++++++++++++++++++++++++++++  */

/** REVEAL SECTION */

const revealSection = function (entries, observer) {
  const [entry] = entries; // use destructing
  // base case
  if (!entry.isIntersecting) {
    return;
  } // end if
  // use the target prop of the entry toremove the hidden CSS class
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}; // end revealSection

export const revealSections = function (allSections) {
  const sectionObsOptions = {
    root: null,
    threshold: 0.15,
  };

  const sectionObserver = new IntersectionObserver(
    revealSection,
    sectionObsOptions
  );

  allSections.forEach(function (section) {
    // check if section is already in view port
    // if it does don't add the effect
    if (!isPartiallyInViewport(section)) {
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
    }
  });
};

/** SLIDE IN */

const slideElementIn = function (entries, observer) {
  // this allows for multiple entries to be updated
  entries.forEach(entry => {
    // base case
    if (entry.isIntersecting) {
      // use the target prop of the entry to remove the hidden CSS class
      if (!entry.target.classList.remove('slide-in--hidden--right')) {
        entry.target.classList.remove('slide-in--hidden--left');
      }
      observer.unobserve(entry.target);
    }
  });
}; // end slideElementIn

export const slideElementsIn = function (allElements, option) {
  const elementObsOptions = {
    root: null,
    threshold: 0.15,
  };

  const elementObserver = new IntersectionObserver(
    slideElementIn,
    elementObsOptions
  );

  allElements.forEach(function (element, index) {
    // check if section is already in view port
    // if it does don't add the effect
    if (!isPartiallyInViewport(element)) {
      elementObserver.observe(element);

      const effectMap = new Map([
        ['alternating', alternatingSlideIn],
        ['left', leftSlideIn],
        ['right', rightSlideIn],
      ]);

      effectMap.get(option)?.(element, index);
    }
  });
}; // end slideElementsIn

const leftSlideIn = function (element) {
  element.classList.add('slide-in--hidden--left');
}; // end leftSlideIn

const rightSlideIn = function (element) {
  element.classList.add('slide-in--hidden--right');
}; // end rightSlideIn

const alternatingSlideIn = function (element, index) {
  if (index % 2 === 0) {
    leftSlideIn(element);
  }

  if (index % 2 !== 0) {
    rightSlideIn(element);
  }
}; // end alternatingSlideIn

/** +++++++++++++++++++++++++++++++++  */
/** LAZY LOADING HELPERS   */
/** +++++++++++++++++++++++++++++++++  */

/** Lazy Loading Images */

const loadImg = function (entries, observer) {
  // in the event that more then one img entry the view port at the same time
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Replace src with data-src on img element
      entry.target.src = entry.target.dataset.src;
      // when loading is complete remove the blur effect
      entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
      });

      // we not longer need to watch the current element as it has loaded
      observer.unobserve(entry.target);
    }
  });
}; // end loadingImg

export const lazyLoadingImg = function () {
  const imgTargets = document.querySelectorAll('img[data-src]');

  const imgObOptions = {
    root: null,
    threshold: 0,
    rootMargin: '200px',
  };
  const imgObserver = new IntersectionObserver(loadImg, imgObOptions);
  imgTargets.forEach(img => imgObserver.observe(img));
};

/** lazy load by section  */
const loadSectionImgs = function (entries, observer) {
  const [entry] = entries; // use destructing
  // base case

  if (!entry.isIntersecting) {
    return;
  }

  const imgTargets = document.querySelectorAll('.lazy-img--section');
  imgTargets.forEach(img => (img.src = img.dataset.src));
  imgTargets.forEach(img =>
    img.addEventListener('load', function (event) {
      img.classList.remove('lazy-img--section');
    })
  );
  observer.unobserve(entry.target);
};

export const lazyLoadImgBySection = function (allSections) {
  const sectionObsOptions = {
    root: null,
    threshold: 0.1,
  };

  const sectionObserver = new IntersectionObserver(
    loadSectionImgs,
    sectionObsOptions
  );

  allSections.forEach(function (section) {
    sectionObserver.observe(section);
  });
};
