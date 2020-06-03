import { random } from "./utils.js";

let canvas = document.querySelector("canvas");
if (!canvas) {
    throw new Error("Canvas could not be initialized");
}

let ctx = canvas.getContext("2d");
if (!ctx) {
    throw new Error("Context could not be initialized");
}

canvas.width = innerWidth;
canvas.height = innerHeight;

let MAX_SPEED = 10;
let MIN_RADIUS = 2;
let MAX_RADIUS = 40;
let NUMBER_OF_CIRCLES = 300;

class Circle {
    constructor() {
        this.radius = MIN_RADIUS;
        this.x = random(0 + this.radius, innerWidth - this.radius);
        this.y = random(0 + this.radius, innerHeight - this.radius);
        this.dx = random(1, MAX_SPEED);
        this.dy = random(1, MAX_SPEED);
        this.color = "black";
    }

    draw() {
        ctx?.beginPath();
        ctx?.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx?.fill();
        ctx?.closePath();
    }

    update() {
        if (this.x + this.radius >= innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius >= innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

let circles = [];
for (let i = 0; i < NUMBER_OF_CIRCLES; ++i) {
    circles.push(new Circle());
}

function animate() {
    requestAnimationFrame(animate);

    ctx?.clearRect(0, 0, innerWidth, innerHeight);

    circles.forEach((circle) => circle.update());
}

animate();
