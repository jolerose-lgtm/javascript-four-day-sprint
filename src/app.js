const temperature = 25

if (temperature > 30) {
    console.log('Its hot')
} else {
    console.log('Its cool')
}

function greet() {
    console.log('Welcome to JavaScript');
}
greet()

function introduce(name, age) {
    console.log("My name is " + name + " and I am " + age + " years old");
}
introduce('Jole', 19)

function multiply(a, b) {
    return a * b
}
let answer = multiply(4, 5)
console.log(answer);


 function calculateLineTotal(price, quantity) {
    return price * quantity
 }
 function calculateTax(subtotal) {
    return subtotal * 0.08 
 }

function formatMoney(amount) {
    return "$" + amount.toFixed(2)
}
let subtotal = calculateLineTotal(500, 2)
let tax = calculateTax(subtotal)

console.log("Subtotal: ",formatMoney(subtotal))
console.log("Tax: ",formatMoney(tax))

function sayGoodmorning() {
    console.log("Goodmorning!")
}
sayGoodmorning()

function greetStudent(name) {
    return "Welcome, "+name
}
console.log(greetStudent("Jole!"))

function subtract(a, b) {
return a - b 
}
 console.log(subtract(10,3))


