class Connection{
    constructor(a,b){
        var option={
            bodyA:a,
            pointB:b,
            stiffness:0.04,
            length:10
          }
          console.log(b)
         this.body=Constraint.create(option)
         World.add(world,this.body) 
         this.a=a
         this.b=b
        

    }
    display(){
       
        if(this.body.bodyA!=null && this.a!=null){
       var a=this.body.bodyA.position
       var b=this.body.pointB
      line (a.x,a.y,b.x,b.y)
        }
    }
fly() {
    this.body.bodyA=null
    this.a=null
}
join(bird){
    this.body.bodyA=bird.body
}

}