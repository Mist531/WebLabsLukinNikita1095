const first_name_input = document.getElementById("first_name")
const last_name_input = document.getElementById("last_name")
const email_input = document.getElementById("email")
const gender_male_input = document.getElementById("gender-male")
const gender_female_input = document.getElementById("gender-female")
const age_selector = document.getElementById("age")

const modal_window = document.getElementById("modal_window")
const open_form = document.getElementById("open_form")

const pattern_name = /^[A-Za-zА-Яа-яЁё/s]+$/
const valid_class = "valid"
const invalid_class = "invalid"

addValidTest(first_name_input, (element) => { return isNotNull(element.value  ) && pattern_name.test(element.value) })
addValidTest(last_name_input, (element) => { return isNotNull(element.value) && pattern_name.test(element.value) })

open_form.onclick = () => {
    hiddenModalWindow(false)
}

form.onclick = () => {
    if (isFormValid(form)) {
        hiddenModalWindow(true)
    }
    hiddenModalWindow(false)
}

function isFormValid(form) {
    let returned = true
    let inputs = form.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if (!isValid(inputs[i])) {
            returned = false
            break
        }
    }
    return returned
}

function hiddenModalWindow(hidden) {
    if (hidden) {
        modal_window.style.display = "none"
    } else {
        modal_window.style.display = "block"
    }
}

function isValid(element) {
    return !element.classList.contains(invalid_class);
}

function addValidTest(element, predicate) {
    element.oninput = () => {
        if (predicate(element)) {
            setValid(element, true)
        } else {
            setValid(element, false)
        }
    }
}

function setValid(element, isValid) {
    if (isValid) {
        element.classList.remove(invalid_class)
        element.classList.add(valid_class)
    } else {
        element.classList.remove(valid_class)
        element.classList.add(invalid_class)
    }
}

function isNotNull(value) {
    return (value !== null) && (value !== "")
}