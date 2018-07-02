import './wa_hw_13.scss'

import { lamp } from './scripts/lamp';
import { addLamp } from './scripts/addLamp';
import { lamptoogle } from './scripts/lamptoogle';

const target = document.querySelector('.container');

for (let i = 0; i < 5; i++){
    lamp(target);
}

addLamp(target);
lamptoogle(target);