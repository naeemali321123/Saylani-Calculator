function sendBtnValue(btnValue) {
    document.getElementById("currentOperand").innerHTML += btnValue;
    sound();
}
function sound() {
    var audio = new Audio('../mp3/click.mp3');
    audio.play();

}
