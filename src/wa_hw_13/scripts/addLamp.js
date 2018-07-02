import { lamp } from './lamp';

export function addLamp (target){
    const button = document.createElement('button');
    button.classList.add('lamp_add');
    button.innerHTML = 'Add lighter';

    target.appendChild(button);
    button.addEventListener('click', () => {
        lamp(target);
    });
}