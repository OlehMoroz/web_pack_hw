import { lamp } from './lamp';

export function addlamp (target){
    const button = document.createElement('button');
    button.classList.add('lamp_add');
    button.innerHTML = 'Add lighter';

target.appendChild(button);
button.addEventListener('click', function() {
        lamp(target);
    });
}


export function lamptoogle (target) {

const button = document.createElement('button');
button.classList.add('lamp_add');
button.innerHTML = 'Toogle All';
    
const activeCircle ='lamp_active__circle';
const activeButton = 'active_button';
    
target.appendChild(button);
    
button.addEventListener('click', function() {
let active = Array.from(target.querySelectorAll('.active'));
let lamp = Array.from(target.querySelectorAll('.lamp'));
    if (active.length === 0){
        for (let i = 0; i < lamp.length; i++){
                lamp[i].classList.add('active');
            lamp[i].childNodes[0].classList.add(activeCircle);
            lamp[i].childNodes[1].classList.add(activeButton);
        }
    }
    else {
        for (let i = 0; i < active.length; i++){
            active[i].classList.remove('active');
            active[i].childNodes[0].classList.remove(activeCircle);
            active[i].childNodes[1].classList.remove(activeButton);
        }
    }
    });
}