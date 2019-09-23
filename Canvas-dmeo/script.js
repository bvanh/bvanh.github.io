var canvas = document.getElementById('myCanvas');
var demoCanvas = canvas.getContext('2d');

let img = document.getElementById('img')
var x= 0,y=0;

function print() {
    demoCanvas.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            if (i % 2 === j % 2) {
                demoCanvas.fillStyle = 'black'
                demoCanvas.fillRect(50 * i, 50 * j, 50, 50);
            }
        }
    }
    demoCanvas.drawImage(img, x,y, 45, 45)

    x += 2;
    requestAnimationFrame(print);
    
}
print();
