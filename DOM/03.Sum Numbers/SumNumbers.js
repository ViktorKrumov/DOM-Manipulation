function calc() {
    let el1 = document.getElementById('num1').value;
    let el2 = document.getElementById('num2').value;

    el1 = Number(el1);
    el2 = Number(el2);

    let result = el1 + el2;
    
    document.getElementById('sum').value = result;
    
    // TODO: sum = num1 + num2

}