const acc = document.querySelector('.accordion');

const textAccTitle = 'Accordion collapse with rotating icon';

const title = document.createElement('div');
title.className = "title";
acc.appendChild(title);
title.innerHTML = textAccTitle;

export function fullAccordion (element, items) {

const accordionElement = document.createElement('div');
accordionElement.className = "accordion_element";

const accordionConstituent = document.createElement('div');
accordionConstituent.className = "accordion_constituent";

const accordionTitle = document.createElement('div');
accordionTitle.className = "accordion_title";


const accordionTitleText = document.createElement('div');

const accordionbody = document.createElement('div');
accordionbody.className = "accordion_body";

const accordionbodyText = document.createElement('div');
accordionbodyText.className = "text";

acc.appendChild(accordionElement);

accordionElement.appendChild(accordionConstituent);

accordionConstituent.appendChild(accordionTitle);

accordionTitle.appendChild(accordionTitleText);

accordionTitleText.innerHTML = items.title;

accordionConstituent.appendChild(accordionbody);

accordionbody.appendChild(accordionbodyText);

accordionbodyText.innerHTML = items.text;

}