/** Lazy Loading Images */

const loadImg = function (entries, observer) {
  const [entry] = entries;

  // base case
  if (!entry.isIntersecting) {
    return;
  } // end if

  // Replace src with data-src on img element
  entry.target.src = entry.target.dataset.src;

  // when loading is complete remove the blur effect
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  // we not longer need to watch the current element as it has loaded
  observer.unobserve(entry.target);
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

/** REMOVE BLUE IDEA */
export const removeBlur = function () {
  const imgTargets = document.querySelectorAll('.lazy-img');
  // imgTargets.forEach(img => img.classList.remove('lazy-img'));

  imgTargets.forEach(img => (img.src = img.dataset.src));
  imgTargets.forEach(img =>
    img.addEventListener('load', function (event) {
      img.classList.remove('lazy-img');
    })
  );
};

/** lazy load by section  */

const test = function (entries, observer) {
  const [entry] = entries; // use destructing
  // base case
  if (!entry.isIntersecting) {
    return;
  }

  const imgTargets = document.querySelectorAll('.lazy-img');
  imgTargets.forEach(img => (img.src = img.dataset.src));
  imgTargets.forEach(img =>
    img.addEventListener('load', function (event) {
      img.classList.remove('lazy-img');
    })
  );
  observer.unobserve(entry.target);
};

export const lazyLoadImgBySection = function (allSections) {
  const sectionObsOptions = {
    root: null,
    threshold: 0.15,
  };

  const sectionObserver = new IntersectionObserver(test, sectionObsOptions);

  allSections.forEach(function (section) {
    sectionObserver.observe(section);
  });
};

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
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
  });
};
