import './wa_hw_12.scss'
import { accordionFull } from './script/script';

const element = document.querySelector('.accordion_element');
const accordion = document.getElementsByClassName("accordion_title");

const itemsList = [
    {
        title: 'Collapsible item #1',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
    },
    {
        title: 'Collapsible item #2',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
    },
    {
        title: 'Collapsible item #3',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
    },
    {
        title: 'Collapsible item #4',
        text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
    },
]


for(let i = 0; i < itemsList.length; i++){

    accordionFull(element, itemsList[i]);

    accordion[i].addEventListener('click', function() {
    let accordionBody = this.nextElementSibling;
    let activeAccordion = document.querySelector('.active');
    if (accordionBody === activeAccordion) {
        accordionBody.classList.remove('active');
        this.classList.remove("triagles");
    } 
    else if(accordionBody !== activeAccordion){
        accordionBody.classList.add('active');
        this.classList.add("triagles");
    } 
    else {
        accordionBody.classList.remove('active');
        this.classList.remove("triagles");
    }
  });
}