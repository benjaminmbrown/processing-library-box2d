var Boundary = function(x_,y_,w_,h_){
	/*
	5 STEPS
	1. Define the body using BodyDef
	2. Create the body object from the BodyDef
	3. Define a shape using PolygonShap or other shape class
	4. Define fixture using fixtureDef
	5. Attach shape to body
	*/

	this.x = x_;
	this.y = y_;
	this.w = w_;
	this.h = h_;

	var fixtureDef = new box2d.b2FixtureDef();
	fixtureDef.density = 1.0;
	fixtureDef.friction = 0.5;
	fixtureDef.restitution = 0.2;

	var body = new box2d.b2BodyDef();
	body.type = box2d.b2BodyType.b2_staticBody;
	body.position.x = scaleToWorld(this.x);
	body.position.y = scaleToWorld(this.y);

	fixtureDef.shape = new box2d.b2PolygonShape();
	fixtureDef.shape.SetAsBox(this.w/(scaleFactor*2),this.h/(scaleFactor*2));
	this.body = world.CreateBody(body).CreateFixture(fixtureDef);



	this.display = function(){
		fill(127);
		stroke(0);
		rectMode(CENTER);
		rect(this.x,this.y, this.w,this.h);
	}


	
}