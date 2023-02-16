function buttonSumNumbers_Click() {
    let firstNumInput = document.getElementById("firstNum");
    let secondNumInput = document.getElementById("secondNum");
    let sumNumInput = document.getElementById("sumNum");

    let firstNum = parseInt(firstNumInput.value);
    let secondNum = parseInt(secondNumInput.value);

    let sum = firstNum + secondNum;

    sumNumInput.value = sum.toString();
}