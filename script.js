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
    else if (!mode && opArr != 0) {
        a = input(Arr)
        Arr.length = 0;
        mode = "add";
        opArr.push(a);
        console.log(opArr);
        result = add(opArr[0], opArr[1]);
        console.log(result);
        opArr.length = 0;
        opArr.push(result);
        disp.innerText = result;

    }
    else {
        a = input(Arr)
        disp.innerText = a;
        Arr.length = 0;
        mode = "add";
        opArr.push(a);
        console.log(opArr);
        result = add(opArr[0], opArr[1]);
        console.log(result);
        opArr.length = 0;
        opArr.push(result);
        disp.innerText = result;

    }

})
equalKey.addEventListener('click', () => {
    a = input(Arr)
    disp.innerText = a;
    Arr.length = 0;
    mode = "add";
    opArr.push(a);
    console.log(opArr);
    result = add(opArr[0], opArr[1]);
    console.log(result);
    opArr.length = 0;
    opArr.push(result);
    disp.innerText = result;

})