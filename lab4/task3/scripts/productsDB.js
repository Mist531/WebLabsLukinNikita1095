const products_key = "products"

const products = []
readProducts()

function readProducts() {
    const str = localStorage.getItem(products_key)
    if (str != null) {
        JSON.parse(str).forEach((it) => {
            addProduct(deserializeProduct(it))
        })
    }
}

function writeProducts() {
    const storage = []
    products.forEach((it) => {
        storage.push(serializeProduct(it))
    })
    localStorage.setItem(products_key, JSON.stringify(storage))
}

function addProduct(product) {
    products.push(product)
}

function removeProduct(product) {
    const id = products.indexOf(product)
    products.splice(id, 1)
}

function deserializeProduct(str) {
    const array = JSON.parse(str)
    return createProduct(array[0], array[1], array[2])
}

function serializeProduct(product) {
    return JSON.stringify([product.name, product.amount, product.orderByOne])
}

function createProduct(name, amount, orderByOne) {
    return {name: name, amount: Number(amount), orderByOne: Number(orderByOne)}
}

function calculateOrderProduct(product) {
    return product.amount * product.orderByOne
}

function calculateTotalOrder() {
    let order = 0;
    products.forEach((it) => {
        order += calculateOrderProduct(it)
    })
    return order
}