var canvas = document.getElementById('myCanvas');
var demoCanvas = canvas.getContext('2d');

let img = document.getElementById('img')
var x = canvas.width, y = canvas.heigh;
x = 0;
y = 0;

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
    demoCanvas.drawImage(img, x, y, 45, 45)
    if (x >= 0 && x <= 350 && y == 0) {
        x += 2;

    }
    if (x == 352) {
        y += 2;
    }
    if (y == 348) {
        x -= 2;
    }
    if (x == 0 && y <= 348 && y >= 50) {
        y -= 2;
    }
    if (y == 48 && x >= 0 && x <= 300) {
        x += 2;
    }
    if (x == 302 && y >= 48 && y < 348) {
        y += 2;
    }
    //  else if (y == 302 && x == 302 && x >= 50) {
    //     x -= 2;
    // }

    requestAnimationFrame(print);
    console.log(x, y)

}
print();
