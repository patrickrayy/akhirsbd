const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

function redirectToHomepage() {
    // Implement your redirection logic here
    // For simplicity, let's redirect to homepage.html
    window.location.href = 'homepage.html';
}

function login() {
    // Implement your login logic here
    // For simplicity, let's assume login is successful
    // and then redirect to the homepage
    alert('Login successful!');
    redirectToHomepage();
}