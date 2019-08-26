var xmlhttp = new XMLHttpRequest();
let url='file.json';
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      myFunction(myArr);
    }
  };
xmlhttp.open('GET',url, true);
xmlhttp.send();
function myFunction(arr) {
    let print='';
    for(i=0;i<arr.users.length;i++){
          print+="<tr>"+"<td>"+arr.users[i].name+"</td>"+"<td>"+arr.users[i].year+"</td>"+"<td>"+arr.users[i].email+"</td>"+"<td>"+arr.users[i].sodienthoai+"</td>"+
           "<td><button type='button' class='btn btn-primary btn-sm'>Chỉnh sửa</button><button type='button' class='btn btn-secondary btn-sm'>Xóa</button></td>"+"</tr>";
       }
    document.getElementById("tb").innerHTML = print;
  }

    