function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function multi(a, b) {
    return a * b;
}
function divi(a, b) {
    return a / b;
}
function input(Arr) {
    return Arr.reduce((accum, digit) => {
        return (accum * 10) + digit
    })//we have removed the , 0  defualt value i did set for reduce , this fixed th chain problem of multi at a cost of removing the chain of the same op
}
function operate(opArr, Arr, mode) {
    Arr.length = 0;

    //a = opArr[0];
    opArr.push(a);
    if (mode == "add") {
        result = add(opArr[0], opArr[1]);
    }
    else if (mode == "sub") {
        result = sub(opArr[0], opArr[1]);
    }
    else if (mode == "multi") {
        result = multi(opArr[0], opArr[1]);
    }
    else if (mode == "divi") {
        result = divi(opArr[0], opArr[1]);
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
        disp.innerText = a;
    })
}

addKey.addEventListener('click', () => {
    if (mode != "add") {
        //clear the input arr and set mode to add
        if (opArr != 0) {
            operate(opArr, Arr, mode);
        }
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
        //mode = "add";
        disp.innerText = a;
        operate(opArr, Arr, mode);
    }

})
subKey.addEventListener('click', () => {
    if (mode != "sub") {
        //clear the input arr and set mode to add
        if (opArr != 0) {
            operate(opArr, Arr, mode);
        }
        Arr.length = 0;
        mode = "sub";
        //if op array doesnt contain a result
        if (opArr == 0) {
            opArr.push(a);
        }
        console.log(opArr);
    }
    else {
        a = input(Arr)
        //mode = "add";
        disp.innerText = a;
        operate(opArr, Arr, mode);
    }
})
multiKey.addEventListener('click', () => {
    if (mode != "multi") {
        //clear the input arr and set mode to add
        if (opArr != 0) {
            operate(opArr, Arr, mode);
        }
        Arr.length = 0;
        mode = "multi";
        //if op array doesnt contain a result
        if (opArr == 0) {
            opArr.push(a);
        }
        console.log(opArr);
    }
    else {
        a = input(Arr)
        //mode = "add";
        disp.innerText = a;
        operate(opArr, Arr, mode);
    }
})
diviKey.addEventListener('click', () => {
    if (mode != "divi") {
        //clear the input arr and set mode to add
        if (opArr != 0) {
            operate(opArr, Arr, mode);
        }
        Arr.length = 0;
        mode = "divi";
        //if op array doesnt contain a result
        if (opArr == 0) {
            opArr.push(a);
        }
        console.log(opArr);
    }
    else {
        a = input(Arr)
        //mode = "add";
        disp.innerText = a;
        operate(opArr, Arr, mode);
    }
})

equalKey.addEventListener('click', () => {
    a = input(Arr)
    disp.innerText = a;
    operate(opArr, Arr, mode);

})