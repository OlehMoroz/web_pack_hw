export function lamp (target) {

    const container = document.createElement('div');
    const circle = document.createElement('div');
    const button = document.createElement('button');
    const active_btn = 'active_btn';
    const active_light = 'lamp_active__light';

    container.classList.add('lamp');
    circle.classList.add('lamp_light');
    button.classList.add('lamp_button');
    button.innerHTML = 'on/off';

    target.insertBefore(container, target.firstChild);
    container.appendChild(circle);
    container.appendChild(button);

    function active () {
        button.classList.add(active_btn);
        container.classList.add('active');
        circle.classList.add(active_light);
    }

    function disable () {
        button.classList.remove(active_btn);
        container.classList.remove('active');
        circle.classList.remove(active_light);
    }

    button.addEventListener('click', () => {

    let stat = container.querySelector('.active_btn');
        if (stat === null){
          active();
        }
        else {
            disable(); 
        }
    });
}