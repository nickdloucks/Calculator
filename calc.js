/*
 * This jQuery calculator app uses eventlisteners (attached to the appropriate HTML elements) to perform
 * arithmetic operations on two numbers (generated by the user clicking on the buttons). Future versions
 * will utilize more advanced operations and have more number memory to perform repeated operations more easily.
 * Future versions will also support typing numbers, rather than just clicking buttons.
 */

"use strict";

//number objects to be constructed/modified by button clicks
 var no1Obj = {
   numStr : '', // this attribute holds a string that represents the first operand
   currentNum : true // this attribute will get toggled, depending which operand is being constructed
 }

 var no2Obj = {
   numStr : '',
   currentNum : false
 }

//object storing the name of the most recetly clicked operator button
var currentOp = {
  name : '' // the name of the current operator, which will tell the program which arithmetic callback function to use
}

//operator functions:
 function plus(num1, num2){ // function to be used as a callback for the "+" button's event listener
   var float1 = Number(num1.numStr); // convert the first operand from a string to a floating point number
   var float2 = Number(num2.numStr); // convert the second operand from a string to a floating point number
   var thisOp = float1 + float2; // perform addition on the two operands
   return thisOp;
 }
 function minus(num1, num2){ // function to be used as a callback for the "-" button's event listener
   var float1 = Number(num1.numStr);
   var float2 = Number(num2.numStr);
   var thisOp = float1 - float2; // perform subtraction on the two operands
   return thisOp;
 }
 function times(num1, num2){ // function to be used as a callback for the "*" button's event listener
   var float1 = Number(num1.numStr);
   var float2 = Number(num2.numStr);
   var thisOp = float1 * float2; // perform multiplication on the two operands
   return thisOp;
 }
 function divide(num1, num2){ // function to be used as a callback for the "/" button's event listener
   var float1 = Number(num1.numStr);
   var float2 = Number(num2.numStr);
   var thisOp = float1 / float2; // perform division on the two operands
   return thisOp;
 }

$(document).ready(function(){ // once the page is ready:
  //number building: create a number to be used as a operand by concatinating digits in a string
  $('.number').click(function(){ // event listener for buttons in the <.number> class
    var currentClick = ($(this).val()); // grab the value from the clicked button // MAYBE USE <let> INSTEAD OF <var> in this definition
    if (no1Obj.currentNum) { // depending on which operand is currnetly being created:
      no1Obj.numStr = no1Obj.numStr.concat(currentClick); // add the value from the button to the <numStr> of the current operand object
      $('#display').val(no1Obj.numStr); // display the updated number string
      $('#output').html(no1Obj.numStr + ' ___no 1 current');
    }else{
      no2Obj.numStr = no2Obj.numStr.concat(currentClick);
      $('#display').val(no2Obj.numStr);
      $('#output').html(no2Obj.numStr + ' ___no 2 current');
    }
  });

  $('.operator').click(function(){ // event listener for buttons in the <.operator> class
    if (no1Obj.currentNum){ // first toggle which number object is the current operand being written
      no1Obj.currentNum = false;
      no2Obj.currentNum = true;
    }


    $('#output').html('current number changed');//works up to here with switching currentNum
    currentOp.name = ($(this).attr('id'));// declare which arithmetic operation is to be performed on the two operands so the program knows which callback to use
    $('#output').html(currentOp.name);
  });

  $('#clearButton').click(function(){
    no1Obj.numStr = '';
    no1Obj.currentNum = true;
    no2Obj.numStr = '';
    no2Obj.currentNum = false;
    currentOp.name = '';
    $('#display').val('');
    $('#output').html('');
  });//clear button works

  $('#equalsButton').click(function(){
    if (no2Obj.numStr == ''){
      return;
    }
    var result;
    if (currentOp.name == ''){
      $('#display').val(no1Obj.numStr);
      $('#output').html(no1Obj.numStr);
    }else if (currentOp.name == "addButton"){
      result = plus(no1Obj, no2Obj);
    }else if (currentOp.name == "subtractButton"){
      result = minus(no1Obj, no2Obj);
    }else if (currentOp.name == "multiplyButton"){
      result = times(no1Obj, no2Obj);
    }else if (currentOp.name == "divideButton"){
      result = divide(no1Obj, no2Obj);
    }

    $('#output').html(result);
    $('#display').val(result);
    no1Obj.numStr = result;
    no1Obj.currentNum = false;
    no2Obj.numStr = '';
    no2Obj.currentNum = true;
    //currentOp.name = '';

  });


  // $('#output').html(); 

});
