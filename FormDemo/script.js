//document.getElementById("check").innerHTML = decodeURIComponent(window.location.href);
let str=decodeURIComponent(window.location.href);
let n = str.slice(str.indexOf("?")+1);//link.split('?')[1]:(split:cắt chuỗi thành mảng(số phần tử của mảng tương ứng vs số "?"))
let y = n.replace(/&/g, "<br>");//dùng thay nhiều '&',//gi: k phân biệt hoa thường
let x= y.replace(/=/g, ": ")
let q = x.split('+').join(' ');
let z=q.split('<br>')
let f=[];
for(i=0;i<z.length;i++){
let e='<b>'+z[i].slice(0,z[i].indexOf(':'))+'</b>'+z[i].slice(z[i].indexOf(':'));
f.push(e)
}//let b=[];
//b.push(f(0).charAt(0).toUpperCase());

document.getElementById("check1").innerHTML = f.join('<br>');
