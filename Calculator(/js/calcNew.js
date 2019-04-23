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

        // INITIAL CALC KEYS
calcKeys.each(function () {
    var current = $(this).attr('value');
                                //alert(current);
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