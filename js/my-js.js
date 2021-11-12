let counter = 0;
let shkot = document.getElementsByClassName('animation')[0];

document.getElementsByClassName('container')[0].addEventListener('mousedown', function () {
    if (shkot.getBoundingClientRect().x >= 850 && shkot.getBoundingClientRect().x <= 1000) {
        counter++;
        document.getElementsByClassName('counter')[0].innerHTML = `${counter}`;
        shkot.style.animationPlayState = 'paused';

        setTimeout(function () {
            shkot.style.animationName = 'none';
            shkot.style.animationName = 'test';
            shkot.style.animationPlayState = 'running';
        },500);

    }
});


