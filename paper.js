class Paper{
    constructor(x,y){
        var opt={
            restitution: 0.5,
            density: 1.2,
            friction: 1
        }
        this.body = Bodies.circle(x,y,20,opt);
        this.body.x = x;
        this.body.y = y;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("white");
        circle(0,0,20);
        pop();
    }
}