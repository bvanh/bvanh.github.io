//document.getElementById("check").innerHTML = decodeURIComponent(window.location.href);
let str=decodeURIComponent(window.location.href);
let n = str.slice(str.indexOf("FirstName"));
let y = n.replace(/&/g, "<br>");
let x= y.replace(/=/g, ": ")
let z = x.split('+').join(' ');
document.getElementById("check1").innerHTML = z;