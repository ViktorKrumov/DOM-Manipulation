function subtract() {
    let firstNum = Number(document.querySelector('#firstNumber').value)
    let secondNum = Number(document.getElementById('secondNumber').value)

    let result = firstNum - secondNum;
    document.getElementById('result').innerHTML = result;
    
}