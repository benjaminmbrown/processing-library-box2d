var Box = function(x, y) {
    /*
    5 STEPS
    1. Define the body using BodyDef
    2. Create the body object from the BodyDef
    3. Define a shape using PolygonShap or other shape class
    4. Define fixture using fixtureDef
    5. Attach shape to body
    */

    this.width = random(4, 16);
    this.height = random(4, 16);
    //BODY Setup
    var body = new box2d.b2BodyDef();
    body.type = box2d.b2BodyType.b2_dynamicBody;
    body.position = scaleToWorld(x, y);
    this.body = world.createBody(body);


    //FIXTURE SETUP
    var fixtureDef = new box2d.b2FixtureDef();
    fixtureDef.shape = new box2d.b2PolygonShape();
    fixtureDef.shape.SetAsBox(scaleToWorld(this.w / 2), scaleToWorld(this.h / 2));

    fixtureDef.friction = 0.3;
    fixtureDef.restitution = 0.3;
    fixtureDef.density = 0.3;

    this.body.createFixture(fixtureDef);


    this.body.setLinearVelocity(new box2d.b2Vec2(random(-5,5), random(-5,5)));
    this.body.setAngularVelocity(random(-5,5));


    this.killBody = function(){
    	world.DestroyBody(this.body);
    }

    this.done = function(){
    	var pos = scaleToPixels(this.body.GetPosition());

    	if(pos.y > height + this.w * this.h){
    		this.killBody();
    		return true;
    	}
    	return false;
    }

    this.display = function(){
    	var pos = scaleToPixels(this.body.GetPosition());
    	//get rotation angle
    	var angle = this.body.GetAngleRadians();

    	rectMode(CENTER);
    	push();
    	translate(pos.x,pos.y);
    	rotate(angle);
    	fill(127);
    	stroke(200);
    	strokeWeight(2);
    	rect(0,0,this.w,this.h);
    	pop();
    }

}
