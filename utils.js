export function random(min, max) {
    let size = max - min;
    let val = Math.random() * size + min;

    while (val === 0) {
        val = Math.random() * size + min;
    }

    return val;
}
