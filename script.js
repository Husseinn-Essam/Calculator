function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function divi(a, b) {
    return a / b;
}

const addKey = document.getElementById("add");
const subKey = document.getElementById("sub");
const multiKey = document.getElementById("multi");
const diviKey = document.getElementById("divi");
const equalKey = document.getElementById("equal");
let numKey = document.querySelectorAll(".num");

let aArr = []
let a;

for (var i = 0; i < 10; i++) {
    numKey[i].addEventListener('click', (e) => {
        aArr.push(parseInt(e.target.textContent))
        a = aArr.reduce((accum, digit) => {
            return (accum * 10) + digit
        }, 0)
        console.log(a);
    })
}


