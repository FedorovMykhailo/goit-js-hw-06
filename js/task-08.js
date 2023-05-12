
const form = document.querySelector(".login-form");

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const { elements: { email, password } } = ev.currentTarget;
    if (email.value === '' || password.value === '') {
        alert('Please! Input Email and Password');
    }
    else {
        const values = { email: email.value, password: password.value };
        console.log(values);
        form.reset();
    }
});
