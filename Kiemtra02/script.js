//bài 1
function timSoLon(arr){
	let newarr=arr.sort(function(a, b){return b - a});
	return newarr[1];
	
}
//bài 3
function bai3(str,target){
	let n = str.endsWith("target");
	return n;
}
//bài 2
function timChuoiDaiNhat(arr){
  let newarr = [];
  newarr = arr.sort(function(a, b){return b.length - a.length});
  return newarr[0];

}
//bài 4
function kiemtraLap(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(i != j){
        if(arr[i] == arr[j]){
          return(true);
        }
      }
    }
  }
  return(false);
}
//Bài 5
function checkThe(z){
    let x = document.querySelectorAll(z).length;
    return x;
}