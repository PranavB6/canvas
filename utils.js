export function random(min, max) {
    let size = max - min;
    let val = Math.floor(Math.random() * size + min);

    return val;
}
