import './wa_hw_11.scss'

const accordion = document.getElementsByClassName("accordion_title");



for(let i = 0; i < itemsList.length; i++){

  fullAccordion(element, itemsList[i]);

  accordion[i].addEventListener('click', function() {
  let accordionBody = this.nextElementSibling;
  let activeAccordion = document.querySelector('.active');
  if (activeAccordion === null) {
      accordionBody.classList.add('active');
      this.classList.add("triagles");
  } 
  else {
      accordionBody.classList.remove('active');
      this.classList.remove("triagles");
  } 
});
}
