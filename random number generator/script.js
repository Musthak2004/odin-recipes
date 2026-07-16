const myBtn = document.getElementById('myBtn');
const myLbl1 = document.getElementById('myLbl1');
const myLbl2 = document.getElementById('myLbl2');
const myLbl3 = document.getElementById('myLbl3');
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myBtn.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2= Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLbl1.textContent = randomNum1;
    myLbl2.textContent = randomNum2;
    myLbl3.textContent = randomNum3;
}