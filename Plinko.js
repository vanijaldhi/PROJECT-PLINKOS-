class Plinko{
    constructor(x,y){
    var options = {
        isStatic : true
    }
    this.plinko = Bodies.circle(x,y,10,options);
    
    World.add(world,this.plinko);
    }
    display(){
        var pos = this.plinko.position;
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,10,10);
    }
}