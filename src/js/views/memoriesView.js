import View from './view.js';

class MemoriesView extends View {
  _parentElement = document.querySelector('.grid-memory');

  _generateMarkup() {
    let markup = [];
    for (let i = 1; i <= this._data.memoryCount; i++) {
      markup.push(
        `<img class="lazy-img--section" src="../img/memories/lazy/${i}-lazy.jpg" data-src="../img/memories/${i}.jpg" alt="Camping Memory"/>`
      );
    }
    return markup.join('');
  }
} // end CarouselView

export default new MemoriesView();
