import view from './view.js';

class CarouselView extends View {
  _parentElement = document.querySelector('.carousel');

  _generateMarkup() {
    return `         
    <img
      class="testimonial-img"
      src="src/img/home/testimonials/${this._data.camperImg}"
      alt="Amanda Halverson"
    />
    <blockquote class="testimonial">
      <p class="testimonial-text">"
        ${this._data.camperText}"
      </p>
      <p class="testimonial-author">${this._data.name}</p>
      <p class="testimonial-job">${this._data.camperRole}</p>
    </blockquote>

    <button class="btn btn--carousel btn--carousel--left">
      <ion-icon
        class="carousel-icon"
        name="chevron-back-outline"
      ></ion-icon>
    </button>
    <button class="btn btn--carousel btn--carousel--right">
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
    const numCampers = this._data.camperCount;

    if (!numCampers) {
      return '';
    }

    let markup = [];
    for (let i = 0; i < numCampers; i++) {
      markup.push(
        `<button class="dot ${curr === i ? 'dot--fill' : ''}">&nbsp;</button>`
      );
    }
    return markup.join('');
  } // end generateDots
} // end CarouselView

export default new CarouselView();
