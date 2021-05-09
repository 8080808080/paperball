class Paper
{
    constructor(x,y,h,w){
        var options={
			isStatic:false,
           restitution:0.3,	
           friction:0,
           density:1.2
			}

            this.x=x
            this.y=y
            this.w=w
            this.h=h
            this.body=bodyies.rectangle(x,y,w,h,options)
            world.add(world,this.body)
    }

    display(){
        var PaperPos=this.body.position;		

			push()
			translate(PaperPos.x, PaperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//fill()
            
			rect(0,0,this.w, this.h);
			pop()
    }
}