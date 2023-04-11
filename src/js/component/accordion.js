import Component from './component.js';

// Accordion component - represents the entire accordion
export default class Accordion extends Component {
  // Constructor takes in data and initializes the state
  constructor(data) {
    // Make sure data are defined
    if (!data) {
      throw new Error('Accordion constructor called without data');
    }
    super(data);
  }

  addClickHandler() {
    this._parentElement.addEventListener('click', function (event) {
      const btn = event.target.closest('.accordion-item');

      if (!btn) {
        return;
      }

      btn.classList.toggle('accordion-open');
    });
  }

  _generateMarkup() {
    return `<div class="accordion">${this._data
      .map(this._generateItem)
      .join('')}</div>`;
  }

  _generateItem(item, index) {
    const { question, answer, list } = item;
    const number = (index + 1).toString().padStart(2, '0');

    return `
      <div class="accordion-item">
        <p class="accordion-number">${number}</p>
        <p class="accordion-question">
          ${question}
        </p>
        <ion-icon
          class="accordion-icon"
          name="chevron-down-outline"
        ></ion-icon>
        <div class="accordion-hidden-box">
          <p class="accordion-answer">
            ${answer}
          </p>
          <ul class="accordion-list">
            ${list.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
      `;
  } // end _generateItem
}
