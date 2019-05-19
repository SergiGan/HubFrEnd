//document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded}); in JS

$(document).ready(function () {

    // VARs
    var calc = $('.calculator');
    var calcDisplay = calc.find('.calc_display');
    var calcKeys = calc.find('.calc_key');
    var calcButton = calc.find('.calc_button');
    var calcClear = calc.find('.calc_clear');
    var calcEqual = calc.find('.calc_key_equal');
    var calcPower = calc.find('.calc_power');
    var calcSqrt = calc.find('.calc_sqrt');
    var calcSpace = calc.find('.calc_backspace');
    var calcPers = calc.find('.calc_Pers');
    var calcOnX = calc.find('.calc_onX');

        // INITIAL CALC KEYS
calcKeys.each(function () {
    var current = $(this).attr('value');
                                //alert(current);!!!!!!!!!!!!!!!!!!!!!!
    //$(this).text(current);
});

    //ADD NUMBERS TO INPUT
calcButton.on('click', function () {
    calcDisplay.val( calcDisplay.val() + $(this).attr('value') ); //concatenation current value of element
});

    //CLEAR INPUT DISPLAY
calcClear.on('click', function () {
    calcDisplay.val('');
});

    // SHOW RESULT
calcEqual.on('click', function () {
    calcDisplay.val( eval( calcDisplay.val() ) );  // !
});
    // POWER BUTTON
calcPower.on('click', function () {
    calcDisplay.val( Math.pow( calcDisplay.val(), 2 ) );
});
    // SQRT BUTTON
calcSqrt.on('click', function () {
    calcDisplay.val( Math.sqrt( calcDisplay.val() ) );
});
    // BACKSPACE BUTTON
calcSpace.on('click', function () {
    calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
});
///////////////////////////////////////
calcPers.on('click', function () {
    calcDisplay.val( eval( calcDisplay.val() ) );
});

});

// var calc_key = inputString.split(/\+|\-|\×|\÷/g);
/*    
calcEqual.addEventListener("click", function() {

  // this is the string that we will be processing for example. -10+26+33-56*34/23
  var input = calc_display.innerHTML; //var inputString = input.innerHTML;

  // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
  var numbers = inputString.split(/\+|\-|\×|\÷/g);

  // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
  // first we replace all the numbers and dot with empty string and then split
  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  /*console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");
  */

   /* var divide = operators.indexOf("÷");
    while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }
/* ! 
function calculate(input) {
var f = {
    add: '+',
    sub: '-',
    div: '/',
    mlt: '*',
    mod: '%',
    exp: '^'
  }; 
*/