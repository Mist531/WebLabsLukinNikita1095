const form = document.getElementById("login_form")
const hello = document.getElementById("hello")
const login_input = document.getElementById("login_input")
const password_input = document.getElementById("password_input")

const non_login_name = "незнакомец"
const hello_pattern = "Привет, name!"
const username_key = "username"
const password_key = "password"
const user_key = "user"

const user = parseUserFromCookie();

function setLogin(login) {
    user[username_key] = login
}

function hasLogin() {
    return user[username_key] != null
}

function getLogin() {
    return user[username_key]
}

function setPassword(password) {
    user[password_key] = password
}

function getPassword() {
    return user[password_key]
}

function parseUserFromCookie() {
    const map = JSON.parse(localStorage.getItem(user_key))
    return map != null ? map : new Map()
}

function writeHello(name) {
    hello.innerHTML = hello_pattern.replace("name", name == null ? non_login_name : name)
}

function saveUserToCookie(userMap) {
    localStorage.setItem(user_key, JSON.stringify(userMap))
}

function loadBody() {
    writeHello(getLogin())
    if (hasLogin()) {
        login_input.value = getLogin()
        password_input.value = getPassword()
    }
}

form.onsubmit = () => {
    setLogin(login_input.value)
    setPassword(password_input.value)
    saveUserToCookie(user)
}