'use strict';
class Ball {
    constructor(x, y, radius, dx, dy) {
        this.x = 400;
        this.y = 300;
        this.radius = 20;
        this.dx = 10;
        this.dy = 10;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
    }
}
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let numberOfBalls = 2;
let balls = [];
for (let j = 0; j < numberOfBalls; j++) {
    balls.push(new Ball((Math.floor(Math.random() * 801)), (Math.floor(Math.random() * 601)), (Math.floor((Math.random() * 50) + 1)), (Math.floor((Math.random() * 10) + 1)), (Math.floor((Math.random() * 10) + 1))));
}
// requestAnimationFrame(cycle)
cycle();
function cycle() {
    //ctx.clearRect(0,0,c.width,c.height)
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    ctx.fillRect(0, 0, c.width, c.height);
    for (let i = 0; i < balls.length; i++) {
        ctx.beginPath();
        ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        balls[i].x += balls[i].dx;
        balls[i].y += balls[i].dy;
        if (balls[i].x < balls[i].radius || balls[i].x > c.width - balls[i].radius) {
            balls[i].dx = -balls[i].dx;
        }
        if (balls[i].y < balls[i].radius || balls[i].y > c.height - balls[i].radius) {
            balls[i].dy = -balls[i].dy;
        }
    }
    ctx.moveTo(balls[0].x, balls[0].y);
    ctx.lineTo(balls[1].x, balls[1].y);
    ctx.stroke();
    requestAnimationFrame(cycle);
}
//# sourceMappingURL=script.js.map