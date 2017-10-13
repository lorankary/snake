class Mover {
    constructor(ctx, x, y, r, clr) {
    this.ctx = ctx;
    if(x && y && r && clr) {
        this.radius = r;
        this.loc = new vector2d(x, y);
        this.color = clr;
    }
    else {
        this.radius = 15;   //Math.random()* 50 + 5;
        let x_ = Math.random()*(ctx.canvas.width - 2*this.radius) + this.radius;
        let y_ = Math.random()*(ctx.canvas.height - 2*this.radius) + this.radius;
        this.loc = new vector2d(x_, y_);
        let red = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        this.color =  `rgb(${red},${green},${blue})`;
        }

    this.vel = new vector2d(Math.random() * 3 + 2, Math.random() * 3  + 2);
    this.acc = new vector2d(0,0);
    }
    update() {
        this.vel.add(this.acc);
        this.acc.x = this.acc.y = 0;    // clear acceleration
        this.loc.add(this.vel);
        if((this.loc.x + this.radius >= this.ctx.canvas.width) ||
            (this.loc.x - this.radius <= 0))
            this.vel.x = -this.vel.x;
        if((this.loc.y + this.radius >= this.ctx.canvas.height) ||
            (this.loc.y - this.radius <= 0))
            this.vel.y = -this.vel.y;

    }
    draw() {    // draw a filled circle
        this.ctx.save();
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = 0;    // black
        this.ctx.beginPath();
        this.ctx.arc(this.loc.x, this.loc.y, this.radius, 0, Math.PI*2);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.restore();
    }
}
