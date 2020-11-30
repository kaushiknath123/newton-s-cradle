class rope {
    constructor(body1, body2, offsetX, offsetY){
        
        console.log();
        var op= {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:offsetX, y:offsetY}
        }

        this.bodyA = body1;
        this.bodyB = body2;
        console.log(this.bodyA.position.x);
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        
this.rope= constraint.create(op);
World.add(world, this.rope);
    }
    display () {
        
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x + this.offsetX;
        var Anchor2Y = pointB.y + this.offsetY;

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }
}
