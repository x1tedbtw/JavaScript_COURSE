const testButton =  document.querySelector('.js-button');
if (testButton.classList.contains('js-button')) {
    console.log('Found a js-button class!')
}
else {
    console.log('No class found :(')
}

const interactiveButton = document.querySelector('.interactive-btn');
function buttonToggle() {
    interactiveButton.addEventListener('click', function() {
        interactiveButton.classList.toggle('is-toggled')
    });
}

buttonToggle();


