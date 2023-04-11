import Accordion from './component/accordion.js';
import { supplyFaqs } from './data/faqData.js';

// create a new instance of the Accordion class
const accordion = new Accordion(supplyFaqs);

// get a reference to the element where you want to append the accordion
const container = document.querySelector('.faq-flex-box');
accordion.render(container);
