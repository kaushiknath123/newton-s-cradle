class roof {

    constructor(x, y, width, height){

        var option = {
            
            'isStatic':true
        }

        this.body = Bodies.rectangle(x, y, 50, 50, option);

        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }

    display () {

        var pos = this.body.position;
        
        

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        

        fill("red");

        rect(0, 0, this.width, this.height);
        pop();

    }

}