//let myInput=document.getElementById("password").value;
let numbers=/[0-9]/g;
let upperCaseLetters = /[A-Z]/g;
let symBoy=/[#]/g;
function testPassword(){
let myInput=document.getElementById("password").value;
  if(myInput.length>=8&&myInput.match(numbers)&&myInput.match(upperCaseLetters)&&myInput!=="#"){
    alert("Pass");
  }
  else{
    alert("Fail");
}    
}