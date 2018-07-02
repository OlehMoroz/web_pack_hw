import './wa_hw_13.scss'

import { lamp } from './scripts/lamp';
import { addlamp } from './scripts/lampcontrol';
import { lamptoogle } from './scripts/lampcontrol';

const target = document.querySelector('.container');

for (let i = 0; i < 5; i++){
    lamp(target);
}

addlamp(target);
lamptoogle(target);