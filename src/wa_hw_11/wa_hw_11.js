import './wa_hw_11.scss'

const accordion = document.getElementsByClassName("accordion_title");
let i;

for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', function() {
    this.classList.toggle("active");
    let accordion_body = this.nextElementSibling;
    if (accordion_body.style.maxHeight){
		accordion_body.style.maxHeight = null;
    } else {
		accordion_body.style.maxHeight = accordion_body.scrollHeight + "px";
    } 
  });
}
