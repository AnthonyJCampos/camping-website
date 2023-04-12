import Accordion from './component/accordion.js';

import {
  supplyFaqs,
  activitiesFaqs,
  foodFaqs,
  drinkFaqs,
} from './data/faqData.js';

const initFaqSection = function () {
  const faqSection = [supplyFaqs, activitiesFaqs, foodFaqs, drinkFaqs];

  faqSection.forEach((section, index) => {
    // create a new instance of the Accordion class
    const accordionElement = new Accordion(section);
    // get a reference to the element where you want to append the accordion
    const containerElement = document.querySelector(
      `.accordion-box--${index + 1}`
    );

    if (!containerElement) {
      return;
    }
    // render accordion elements on screen
    accordionElement.render(containerElement);
    accordionElement.addClickHandler();
  });
};

initFaqSection();
