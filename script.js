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
function input(Arr) {
    return Arr.reduce((accum, digit) => {
        return (accum * 10) + digit
    }, 0)
}
function operate(opArr, Arr, mode) {
    Arr.length = 0;
    opArr.push(a);
    if (mode == "add") {
        result = add(opArr[0], opArr[1]);
    }
    opArr.length = 0;
    opArr.push(result);
    disp.innerText = result;
}
const addKey = document.getElementById("add");
const subKey = document.getElementById("sub");
const multiKey = document.getElementById("multi");
const diviKey = document.getElementById("divi");
const equalKey = document.getElementById("equal");
const disp = document.getElementById("display");
let numKey = document.querySelectorAll(".num");

let Arr = []
let opArr = []
let a;
let result = 0;

let mode;
for (var i = 0; i < 10; i++) {
    numKey[i].addEventListener('click', (e) => {
        Arr.push(parseInt(e.target.textContent))
        a = input(Arr)
        //console.log(a);
        disp.innerText = a;
    })
}

addKey.addEventListener('click', () => {
    if (!mode) {
        //clear the input arr and set mode to add
        Arr.length = 0;
        mode = "add";
        //if op array doesnt contain a result
        if (opArr == 0) {
            opArr.push(a);
        }
        console.log(opArr);

    }
    else {
        a = input(Arr)
        mode = "add";
        disp.innerText = a;
        operate(opArr, Arr, mode);
    }

})
equalKey.addEventListener('click', () => {
    a = input(Arr)
    disp.innerText = a;
    mode = "add";
    operate(opArr, Arr, mode);

})