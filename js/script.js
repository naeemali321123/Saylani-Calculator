function sound() {
    var audio = new Audio('../mp3/click.mp3');
    audio.play();
}

function sendBtnValue(btnValue) {
    document.getElementById("currentOperand").innerHTML += btnValue;
    sound();
}

function allClear() {
    document.getElementById("currentOperand").innerHTML = null;
    sound();
}

function plus() {
    var plusSign = "+";
    document.getElementById("currentOperand").innerHTML += plusSign;
    sound();
}

function minus() {
    var minusSign = "-";
    document.getElementById("currentOperand").innerHTML += minusSign;
    sound();
}

function multiply() {
    var multiplySign = "*";
    document.getElementById("currentOperand").innerHTML += multiplySign;
    sound();
}

function devide() {
    var devideSign = "/";
    document.getElementById("currentOperand").innerHTML += devideSign;
    sound();
}

function point() {
    var pointSign = ".";
    document.getElementById("currentOperand").innerHTML += pointSign;
    sound();
}

function equal() {
    var screenData = document.getElementById("currentOperand").innerHTML;
    document.getElementById("currentOperand").innerHTML = eval(screenData);
    sound();

}