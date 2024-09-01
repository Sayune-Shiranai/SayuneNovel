const SignIn = document.querySelector('.js-login');
const SignUp = document.querySelector('.js-register');
const modalSignIn = document.querySelector('.js-modal-login');
const modalSignUp = document.querySelector('.js-modal-register');
const modalCloseSignIn = document.querySelector('.js-modal-close-login');
const modalCloseSignUp = document.querySelector('.js-modal-close-register');

function showSignIn() {
    modalSignIn.classList.add('open');
}

function showSignUp() {
    modalSignUp.classList.add('open');
}

function hideSignIn() {
    modalSignIn.classList.remove('open');
}

function hideSignUp() {
    modalSignUp.classList.remove('open');
}

SignIn.addEventListener('click', showSignIn);

SignUp.addEventListener('click', showSignUp);

modalCloseSignIn.addEventListener('click', hideSignIn);

modalCloseSignUp.addEventListener('click', hideSignUp);