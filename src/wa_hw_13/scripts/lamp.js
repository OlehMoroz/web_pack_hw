export function lamp (target) {

const lamp = document.createElement('div');
lamp.classList.add('lamp');

const circle = document.createElement('div');
circle.classList.add('lamp_circle');

const button = document.createElement('button');
button.classList.add('lamp_button');
button.innerHTML = 'on/off'

const buttonActive = 'active_button';
const active_light = 'lamp_active__circle';

target.insertBefore(lamp, target.firstChild);
lamp.appendChild(circle);
lamp.appendChild(button);

button.addEventListener('click', function() {

let control = lamp.querySelector('.active_button');
    if (control === null){
        lamp.classList.add('active');
        circle.classList.add(active_light);
        button.classList.add(buttonActive);
        }
    else {
        lamp.classList.remove('active');
        circle.classList.remove(active_light);
        button.classList.remove(buttonActive);
        }
    });
}

export function addLamp (target){
    const button = document.createElement('button');
    button.classList.add('lamp_add');
    button.innerHTML = 'Add lighter';

    target.appendChild(button);
    button.addEventListener('click', function() {
        lamp(target);
    });
}