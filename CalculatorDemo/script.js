function button(x) {
      document.getElementById("enter").value += x;
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