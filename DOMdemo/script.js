//bài 1
function changeFontSize(x){
	var a = document.querySelectorAll("p");
    var i;
    for (i = 0; i < a.length; i++) {
    a[i].style.fontSize =x+'px';;
}
}
//bài 2
function increaseFontSize(x){
	let para = document.getElementById(x);
    let compStyles=window.getComputedStyle(para).getPropertyValue('font-size');
    compStyles=parseInt(compStyles);
    if(compStyles<30){
    	compStyles++;
    }else{
    	compStyles=30;

    }
    para.style.fontSize=compStyles+'px';

}
//bài 3
function decreaseFontSize(x){
	let para = document.getElementById(x);
    let compStyles=window.getComputedStyle(para).getPropertyValue('font-size');
    compStyles=parseInt(compStyles);
    if(compStyles<10){
    	compStyles--;
    }else{
    	compStyles=10;

    }
    para.style.fontSize=compStyles+'px';

}
//bài 4
function changeColor(){
	document.getElementById("a1").style.color="#0099cc";
	document.getElementById("a2").style.color="#ffff99";
	document.getElementById("a3").style.color="#ff3300";
}
//bài 5
function changeBgColor(color){
	document.body.style.backgroundColor = color;
}
//bài 6
function copyContent(paragraph1, paragraph2){
	let x = document.getElementById("a1");
	let y = document.getElementById('a2');
	x.innerHTML=y.innerHTML;

}