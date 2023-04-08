import View from './view.js';

class CarouselView extends View {
  _parentElement = document.querySelector('.carousel');

  addBtnHandler(handler) {
    this._parentElement.addEventListener('click', function (event) {
      const btn = event.target.closest('.btn');
      if (!btn) {
        return;
      }

      let curr = Number(
        document.querySelector('.dot--fill').getAttribute('dot-index')
      );

      const action = btn.getAttribute('goto');

      if (action === 'next') {
        curr++;
      }

      if (action === 'prev') {
        curr--;
      }

      handler(curr);
      // handler(goToCamper);
    });
  } // end addBtnHandler
  addDotHandler(handler) {
    this._parentElement.addEventListener('click', function (event) {
      const dot = event.target.closest('.dot');
      if (!dot) {
        return;
      }

      const goToCamper = Number(dot.getAttribute('dot-index'));
      handler(goToCamper);
    });
  } // end addDotHandler

  _generateMarkup() {
    return `         
    <img
      class="testimonial-img new-element--slow"
      src="src/img/home/testimonials/${this._data.camperData.camperImg}"
      alt="Amanda Halverson"
    />
    <blockquote class="testimonial new-element--slow">
      <p class="testimonial-text">"${this._data.camperData.camperText}"
      </p>
      <p class="testimonial-author">${this._data.camperData.camperName}</p>
      <p class="testimonial-job">${this._data.camperData.camperRole}</p>
    </blockquote>

    <button class="btn btn--carousel btn--carousel--left" goto="prev" title="Previous Camper" aria-label="Previous Camper" >
      <ion-icon
        class="carousel-icon"
        name="chevron-back-outline"
      ></ion-icon>
    </button>
    <button class="btn btn--carousel btn--carousel--right" goto="next" title="Next Camper" aria-label="Next Camper">
      <ion-icon
        class="carousel-icon"
        name="chevron-forward-outline"
      ></ion-icon>
    </button>
    <div class="dots">
      ${this._generateDots()}
    </div>`;
  }

  _generateDots() {
    const currCamper = this._data.camperPos;
    const numCampers = this._data.campersCount;

    if (!numCampers) {
      return '';
    }

    let markup = [];
    for (let i = 0; i < numCampers; i++) {
      markup.push(
        `<button class="dot ${
          currCamper === i ? 'dot--fill new-element--fast' : ''
        }" dot-index="${i}" aria-label="Dot ${i}">&nbsp;</button>`
      );
    }
    return markup.join('');
  } // end generateDots
} // end CarouselView

export default new CarouselView();
