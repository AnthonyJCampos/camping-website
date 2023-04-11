import Accordion from './component/accordion.js';
import { supplyFaqs, activitiesFaqs } from './data/faqData.js';

// create a new instance of the Accordion class
const accordionSupplies = new Accordion(supplyFaqs);

// get a reference to the element where you want to append the accordion
const containerSupplies = document.querySelector('.accordion-box--1');
accordionSupplies.render(containerSupplies);

const accordionActivities = new Accordion(activitiesFaqs);
const containerActivities = document.querySelector('.accordion-box--2');
accordionActivities.render(containerActivities);
