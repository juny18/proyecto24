class Stone{
    constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
		'density':12,
		'friction': 0.9,
		'restitution':0.8
	  };
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
          
			pop()
	}

}


