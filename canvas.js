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

let MAX_SPEED = 0.5;
let MAX_RADIUS = 60;
let NUMBER_OF_CIRCLES = 1000;

let colors = ["#03071e","#370617","#6a040f","#9d0208","#d00000","#dc2f02","#e85d04","#f48c06","#faa307","#ffba08"];

colors = ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"];
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

let mouse = { x: -100, y: -100 };
window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

window.addEventListener("resize", (event) => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

class Circle {
    constructor() {
        this.minRadius = random(1, 4);
        this.radius = this.minRadius;
        this.x = random(0 + this.radius, innerWidth - this.radius);
        this.y = random(0 + this.radius, innerHeight - this.radius);
        this.dx = random(-MAX_SPEED, MAX_SPEED);
        this.dy = random(-MAX_SPEED, MAX_SPEED);
        this.color = getRandomColor();
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

        if (
            Math.abs(mouse.x - this.x) < 50 &&
            Math.abs(mouse.y - this.y) < 50
        ) {
            if (this.radius < MAX_RADIUS) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}



let circles = [];
function init() {
    circles = [];
    for (let i = 0; i < NUMBER_OF_CIRCLES; ++i) {
        circles.push(new Circle());
    }

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    ctx?.clearRect(0, 0, innerWidth, innerHeight);

    circles.forEach((circle) => circle.update());
}

init();
