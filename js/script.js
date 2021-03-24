$(document).ready(function () {

    function add(number1, number2) {
        return number1 + number2;
    };

    function subtract(number1, number2) {
        return number1 - number2;
    };

    function multiply(number1, number2) {
        return number1 * number2;
    };

    function divide(number1, number2) {
        return number1 / number2;
    };

    // Everything below this line is user interface logic:

    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    console.log(result)
    alert(result);
})