class Snake {
    constructor(ctx,numSegs,segLength,segWidth) {
        this.ctx = ctx;
        if(numSegs && segLength &&segWidth){
            this.numSegs = numSegs;
            this.segLength = segLength;
            this.segWidth = segWidth;
        }
        else {
            this.numSegs = 20;
            this.segLength = 30;
            this.segWidth = 20;
        }
        this.segs = [];
        for(let i = 0; i < this.numSegs; i++){
            this.segs.push(new vector2d(0,0));
        }

    }
    // update() --
    // given a new location for the head segment, determine a new
    // location for all the following segments
    update(newHeadLoc) {
        this.segs[0] = newHeadLoc;
        for(let i = 1; i < this.segs.length; i++){
            let seg = this.segs[i];
            let previous = this.segs[i-1];
           // get a vector from previous segment to this one
            let v = vector2d.subtract(previous, seg);
            let a = v.theta();  // angle
            seg.x = previous.x - this.segLength * Math.cos(a);
            seg.y = previous.y - this.segLength * Math.sin(a);
        }
    }
    draw() {
        var ctx = this.ctx;
        ctx.save();
        // draw each segment white, 50% opacity
        ctx.strokeStyle = 'rgb(255,255,255,.5)';
        ctx.lineWidth = this.segWidth;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.segs[0].x, this.segs[0].y);
        for(let i = 1; i < this.segs.length; i++){
            let seg = this.segs[i];
            ctx.lineTo(seg.x, seg.y);
        }
        ctx.stroke();
        ctx.restore();
    }

}
