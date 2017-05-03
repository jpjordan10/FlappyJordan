function Pipe(){
	this.top = random(height/2);
	this.bottom = random(height/2);
	this.x = width;
	this.w = 20;
	this.speed = 2;
	this.hightlight = false;

	this.hits = function(jp){
		if (jp.y < this.top || jp.y > height - this.bottom) {
		if (jp.x > this.x && jp.x < this.x + this.w) {
			this.hightlight = true;
			return true;
			}
		}
		this.hightlight = false;
		return false;
	}

	this.show = function(){
		fill(255);
		if (this.hightlight) {
			fill(255, 0, 0);
		}
		rect(this.x, 0, this.w, this.top);
		rect(this.x, height-this.bottom, this.w, this.bottom);
	}

	this.update = function(){
		this.x -= this.speed;
	}

	this.offscreen = function(){
		if (this.x < -this.w) {
			return true;
		}
		else{
			return false;
		}
	}
}