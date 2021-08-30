/*
 * Implement all your JavaScript in this file!
 */
//Nicholas Loucks
"use strict";

//number objects to be constructed/modified by button clicks
 var no1Obj = {
   numStr : '',
   currentNum : true
 }

 var no2Obj = {
   numStr : '',
   currentNum : false
 }

//object storing the name of the most recetly clicked operator button
var currentOp = {
  name : ''
}

//operator functions:
 function plus(num1, num2){
   var float1 = Number(num1.numStr);
   var float2 = Number(num2.numStr);
   var thisOp = float1 + float2;
   return thisOp;
 }
 function minus(num1, num2){
   var float1 = Number(num1.numStr);
   var float2 = Number(num2.numStr);
   var thisOp = float1 - float2;
   return thisOp;
 }
 function times(num1, num2){
   var float1 = Number(num1.numStr);
   var float2 = Number(num2.numStr);
   var thisOp = float1 * float2;
   return thisOp;
 }
 function divide(num1, num2){
   var float1 = Number(num1.numStr);
   var float2 = Number(num2.numStr);
   var thisOp = float1 / float2;
   return thisOp;
 }

$(document).ready(function(){
  //the rest of jquery goes here:
  //number building:
  $('.number').click(function(){
    var currentClick = ($(this).val());
    if (no1Obj.currentNum) {
      no1Obj.numStr = no1Obj.numStr.concat(currentClick);
      $('#display').val(no1Obj.numStr);
      $('#output').html(no1Obj.numStr + ' ___no 1 current');
    }else{
      no2Obj.numStr = no2Obj.numStr.concat(currentClick);
      $('#display').val(no2Obj.numStr);
      $('#output').html(no2Obj.numStr + ' ___no 2 current');
    }
  });  //WORKS UP TO HERE WITH NUMBER BUILDING!!!! YAY!

  $('.operator').click(function(){
    if (no1Obj.currentNum){
      no1Obj.currentNum = false;
      no2Obj.currentNum = true;
    }


    $('#output').html('current number changed');//works up to here with switching currentNum
    currentOp.name = ($(this).attr('id'));///// works up to here with changing currentOp
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
    // MOSTLY WORKS

  });


  // $('#output').html(); ///for debugging

});// END PROGRAM
