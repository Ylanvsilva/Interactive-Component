const circleButton = document.querySelector('div#btn1');

circleButton.addEventListener('click', clicar)

function clicar(color) {
    const button = document.querySelector('.circle_btn.circle_orange')
    // console.log(button);
    // console.log(color);

    //* Toggle
    if (button === null) {
        color.classList.add('circle_orange');
        console.log('cheguei aq')
    } else {
        console.log('entrei no else')
        button.classList.remove('circle_orange');
    }
}