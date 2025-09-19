// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navUl = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

// Basic Form Validation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', e => {
        const email = form.email.value;
        if (!email.includes('@')) {
            e.preventDefault();
            alert('Please enter a valid email!');
        }
    });
}
