const form = document.getElementById('form');
const input = document.getElementById('email');
const alert = document.getElementById('alert');
const error = document.getElementById('error');


function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    error.style.display = 'none';
    alert.innerHTML = "";
    let inputValue = input.value.trim();
    let result = validateEmail(inputValue);

    if(result) {
        console.log("valid");
        input.value = ""
        alert.insertAdjacentHTML(
            `beforeend`,
            `<p class="alert1">Thank you for signing up. We will get back to you shortly</p>`
        )
    } else {
        console.log('invalid');
        error.style.display = 'block';
        alert.insertAdjacentHTML(
            `beforeend`,
            `<p class="alert">Please provide a valid email</p>`
        )
    }
    return false;
})