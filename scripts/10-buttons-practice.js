const testButton =  document.querySelector('.js-button');
if (testButton.classList.contains('js-button')) {
    console.log('Found a js-button class!')
}
else {
    console.log('No class found :(')
}

function handleClick() {
    let interactiveButton = document.querySelector('.interactive-btn');
    if (interactiveButton.classList.contains("clicked")) {
        button.classList.add('is-toggled')
    }
    else {
        button.classList.remove('is-toggled')
    }
}





