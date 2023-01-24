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

let Arr = []
let opArr = []
let a;

let mode;
for (var i = 0; i < 10; i++) {
    numKey[i].addEventListener('click', (e) => {
        Arr.push(parseInt(e.target.textContent))

    })
}

addKey.addEventListener('click', () => {
    if (!mode) {
        a = Arr.reduce((accum, digit) => {
            return (accum * 10) + digit
        }, 0)
        //console.log(a);
        Arr.length = 0;
        mode = "add";
        opArr.push(a);
        console.log(opArr);
    }
    else {
        a = Arr.reduce((accum, digit) => {
            return (accum * 10) + digit
        }, 0)
        //console.log(a);
        Arr.length = 0;
        mode = "add";
        opArr.push(a);
        console.log(opArr);
        result = add(opArr[0], opArr[1]);
        console.log(result);
        opArr.length = 0;
        opArr.push(result);
    }

})