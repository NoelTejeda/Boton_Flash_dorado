const button = document.querySelector('.login-box a');

button.addEventListener('click', () => {
    button.classList.add('clicked');
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 200);
}); 