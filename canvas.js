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
    constructor() {
        this.x = 300;
        this.y = 300;
        this.dx = 5;
        this.dy = 5;
        this.radius = 30;
        this.color = 'red';
    }

    draw() {
        ctx?.beginPath()
        ctx?.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx?.fill();
        ctx?.closePath();
    }

    update() {

        if ((this.x + this.radius) >= innerWidth || (this.x - this.radius) < 0) {
            this.dx = -this.dx;
        }

        if ((this.y + this.radius) >= innerHeight || (this.y - this.radius) < 0) {
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

let circle = new Circle();

function animate() {
    requestAnimationFrame(animate);

    ctx?.clearRect(0, 0, innerWidth, innerHeight);

    circle.update();
}

animate();