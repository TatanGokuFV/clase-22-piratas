class Cannon {
    constructor(x,y,w,h,a){
        this.x=x;
        this.y=y;
        this.h=h;
        this.w=w;
        this.a=a;
        this.cannon_img=loadImage("assets/canon.png");
        this.cannon_base=loadImage("assets/cannonBase.png");
    }
    display(){
        push();
    imageMode(CENTER);
    image(this.cannon_img,this.x,this.y,this.w,this.h);
        pop();
        image(this.cannon_base,70,20,200,200);

        noFill();
    }
}
