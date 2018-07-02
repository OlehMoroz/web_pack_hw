export function lamptoogle (target) {

    const button = document.createElement('button');
    button.classList.add('lamp_add');
    button.innerHTML = 'Toogle All';
    const circle_active ='lamp_active__light';
    const btn_active = 'active_btn';

    target.appendChild(button);

    button.addEventListener('click', () => {
    let active = Array.from(target.querySelectorAll('.active'));
    let lights = Array.from(target.querySelectorAll('.lamp'));     
    if (active.length === 0){
        for (let i = 0; i < lights.length; i++){
            lights[i].classList.add('active');
            lights[i].childNodes[0].classList.add(circle_active);
            lights[i].childNodes[1].classList.add(btn_active);
        }
    }
    else {
       for (let i = 0; i < active.length; i++){
           active[i].classList.remove('active');
           active[i].childNodes[0].classList.remove(circle_active);
           active[i].childNodes[1].classList.remove(btn_active);
       }
    }
    });
}