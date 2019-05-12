function button1() {
      document.getElementById("enter").value += 1;
}
function button2() {
      document.getElementById("enter").value += 2;
}
function button3() {
      document.getElementById("enter").value += 3;
}
function button4() {
      document.getElementById("enter").value += 4;
}
function button5() {
      document.getElementById("enter").value += 5;
}
function button6() {
      document.getElementById("enter").value += 6;
}
function button7() {
      document.getElementById("enter").value += 7;
}
function button8() {
      document.getElementById("enter").value += 8;
}
function button9() {
      document.getElementById("enter").value += 9;
}
function button0() {
      document.getElementById("enter").value += 0;
}
function buttonDot(){
	  document.getElementById("enter").value += '.';
}
function buttonDivide() {
      document.getElementById("enter").value += '/';
}
function buttonMultiply() {
      document.getElementById("enter").value += '*';
}
function buttonPlus(){
	  document.getElementById("enter").value += '+';
}
function buttonMinus(){
	  document.getElementById("enter").value += '-';
}
function buttonCancel(){
	  document.getElementById("enter").value ='';
}
function buttonEqual() {
      document.getElementById("enter").value = eval(document.getElementById("enter").value);
}
function buttonSquareroot(){
	  document.getElementById("enter").value = Math.sqrt(document.getElementById("enter").value);
}
function buttonSquare(){
	  document.getElementById("enter").value = Math.pow(document.getElementById("enter").value,2);
}
function buttonFactorial(){
	let x=document.getElementById("enter").value;
	let y=1;
	for(i=1;i<=x;i++){
		y*=i;
	}
	document.getElementById("enter").value=y;
}