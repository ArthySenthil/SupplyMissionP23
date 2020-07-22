class Bucket{
    constructor(x,y,width,height){
        var options={
            isStatic:true

        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;


    }
    display(){
        var xPos=this.body.position.x;
        var yPos=this.body.position.y;
        rect(xPos,yPos,this.width,this.height);

    }


}