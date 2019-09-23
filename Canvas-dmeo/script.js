var canvas=document.getElementById('myCanvas');
var demoCanvas=canvas.getContext('2d')
// vẽ đường thẳng
demoCanvas.beginPath();
// line1
demoCanvas.moveTo(50, 0);
demoCanvas.lineTo(50, 400);
demoCanvas.lineWidth=.5;
demoCanvas.stroke();
// ô đen
for(i=0;i<8;i++){
    for(j=0;j<8;j++){
        if(i%2===j%2){
            demoCanvas.fillStyle='black'
            demoCanvas.fillRect(50*i,50*j,50,50);
        }
    }
}