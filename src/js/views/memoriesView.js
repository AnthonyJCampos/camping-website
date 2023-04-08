import View from './view.js';

class MemoriesView extends View {
  _parentElement = document.querySelector('.grid-memory');

  _generateMarkup() {
    let markup = [];
    for (let i = 1; i < this._data.memoryCount; i++) {
      markup.push(
        `<img src="src/img/memories/${i}.jpg" alt="Camping Memory"  loading="lazy"  />`
      );
    }
    return markup.join('');
  }
} // end CarouselView

export default new MemoriesView();
