// let data=[
//     {name:"Nguyễn Mạnh Hùng",year:"1990",email:"hung@gmail.com",sodienthoai:"000001"},
//     {name:"Nguyễn Mạnh Hùng",year:"1990",email:"hung@gmail.com",sodienthoai:"000002"},
//     {name:"Nguyễn Mạnh Hùng",year:"1990",email:"hung@gmail.com",sodienthoai:"000003"},
//     {name:"Nguyễn Mạnh Hùng",year:"1990",email:"hung@gmail.com",sodienthoai:"000004"},
// ]

// let print='';
// for(i=0;i<data.length;i++){
//     t+="<tr>"+"<td>"+data[i].name+"</td>"+"<td>"+data[i].year+"</td>"+"<td>"+data[i].email+"</td>"+"<td>"+data[i].sodienthoai+"</td>"+
//     "<td><button type='button' class='btn btn-primary btn-sm'>Chỉnh sửa</button><button type='button' class='btn btn-secondary btn-sm'>Xóa</button></td>"+"</tr>";
// }
// document.getElementById("tb").innerHTML=print;

let request = new XMLHttpRequest();
request.open('GET', 'https://bvanh.github.io/testData/file.json', true);
let print='';
request.onload = function () {
    // begin accessing JSON data here
    let data = JSON.parse(this.response);
    
    for(i=0;i<data.length;i++){
        t+="<tr>"+"<td>"+data[i].name+"</td>"+"<td>"+data[i].year+"</td>"+"<td>"+data[i].email+"</td>"+"<td>"+data[i].sodienthoai+"</td>"+
        "<td><button type='button' class='btn btn-primary btn-sm'>Chỉnh sửa</button><button type='button' class='btn btn-secondary btn-sm'>Xóa</button></td>"+"</tr>";
    }
    document.getElementById("tb").innerHTML=print;
}
 
request.send();

    