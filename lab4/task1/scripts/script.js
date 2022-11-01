const form = document.getElementById("login_form")
const hello = document.getElementById("hello")
const login_input = document.getElementById("login_input")
const password_input = document.getElementById("password_input")

const non_login_name = "незнакомец"
const hello_pattern = "Привет, name!"
const username_key = "username"
const password_key = "password"

const user = parseUserFromCookie();

function setLogin(login) {
    user.set(username_key, login)
}

function hasLogin() {
    return user.has(username_key)
}

function getLogin() {
    return user.get(username_key)
}

function setPassword(password) {
    user.set(password_key, password)
}

function getPassword() {
    return user.get(password_key)
}

function parseUserFromCookie() {
    const map = new Map()
    const cookie = document.cookie.split(";")
    cookie.forEach(element => {
        const line = element.split("=");
        map.set(line[0].replace(" ", ""), line[1])
    });
    return map
}

function writeHello(name) {
    hello.innerHTML = hello_pattern.replace("name", name == null ? non_login_name : name)
}

function saveUserToCookie() {
    document.cookie = username_key + "=" + getLogin();
    document.cookie = password_key + "=" + getPassword();
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
    saveUserToCookie()
    return false
}