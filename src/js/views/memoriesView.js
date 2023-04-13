import View from './view.js';

class MemoriesView extends View {
  _parentElement = document.querySelector('.grid-memory');

  _generateMarkup() {
    let markup = [];
    for (let i = 0; i < this._data.memoryCount; i++) {
      markup.push(
        `<img class="lazy-img--section" src="${this._data.lazyImgUrls[i]}" data-src="${this._data.HQImgUrls[i]}" alt="Camping Memory"/>`
      );
    }
    return markup.join('');
  }
} // end CarouselView

export default new MemoriesView();
