class Particle{
    constructor(x,y){
    var options={
        isStatic: false,
        restitution:0.2
    }
    this.body = Bodies.circle(x,y,10,options);
    this.color = color(random(0,255),random(58,255), random(0,255));
    World.add(world,this.body);
    }
    display(){
        push ();
        var pos = this.body.position;
        translate (pos.x,pos.y)
        fill (this.color)
         ellipseMode(RADIUS);
        ellipse(0,0,15,15);
        pop ();
    }
}