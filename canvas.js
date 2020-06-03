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