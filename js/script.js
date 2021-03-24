$(document).ready(function () {

    function add(number1, number2) {
        return number1 + number2;
    }

    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    console.log(result)
    alert(result);

    function add(number1, number2) {
        return number1 + number2;
    }

    // function subtract(number1, number2) {
    //     return number1 + " - " + number2 + " = " + (number1 - number2);
    // }

    // const number1 = parseInt(prompt("Enter a number:"));
    // const number2 = parseInt(prompt("Enter another number:"));
    // const difference = subtract(number1, number2);

    // alert(difference);

    // function multiply(number3, number4) {
    //     return number3 + " * " + number4 + " = " + number3 * number4;
    // }

    // const number3 = parseInt(prompt("Enter a number:"));
    // const number4 = parseInt(prompt("Enter another number:"));
    // const product = multiply(number3, number4);

    // alert(product);

    // const result = add(number1, number2);

    // function tempConversion(temperature) {
    //     let fahTemp = ((9 / 5) * temperature) + 32;
    //     let celTemp = ((9 / 5) * temperature) - 32;
    //     alert(temperature + "  in fahrenheit: " + fahTemp);
    //     alert(temperature + " in celsius: " + celTemp);
    // }

    // tempConversion(45);

    // function volConversion(volume) {
    //     let liter = volume / 3.785;
    //     let gallon = volume * 3.785;
    //     alert(volume + " liters in gallons: " + liter);
    //     alert(volume + " gallons in liters: " + gallon);
    // }

    // volConversion(13);
})