//bài 1
function timSoLon(a){
	let max1='';
	let max2='';
    
   for(i= 0; i < a.length; i++) {
      if( max1 <a[i] ) {
         max2= max1;
         max1= a[i];
      }else if(max2<a[i] ) {
         max2=a[i];
      }
   }

    return max2;
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
          return('true');
        }
      }
    }
  }
  return('false');
}
//Bài 5
function checkThe(z){
    let x = document.querySelectorAll(z).length;
    return x;
}