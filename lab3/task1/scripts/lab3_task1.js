const password = document.getElementById("password");
const repeat_password = document.getElementById("repeat-password");
const image = document.getElementById("image");
const form = document.getElementById("form");

repeat_password.oninput = () => {
    if (password.checkValidity() && repeat_password.value === password.value) {
        image.hidden = false
        form.valid = true
    } else {
        image.hidden = true
        form.valid = false
    }
}