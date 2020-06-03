let canvas = document.querySelector('canvas');
if (!canvas) {
    throw new Error("Canvas could not be initialized");
}

let ctx = canvas.getContext('2d');
if (!ctx) {
    throw new Error("Context could not be initialized");
}

canvas.width = innerWidth;
canvas.height = innerHeight;

class Circle {
    constructor() {}

    draw() {
        ctx?.beginPath()
        ctx?.arc(300, 300, 30, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx?.fill();
        ctx?.closePath();
    }
}

let circle = new Circle();
circle.draw();