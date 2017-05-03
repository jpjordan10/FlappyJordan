var jp;
var pipes = [];
function setup(){
	createCanvas(400, 600);
	jp = new Jp();
	pipes.push(new Pipe());
}

function draw(){
	background(51);

	for (var i = pipes.length-1; i >= 0; i--) {
		pipes[i].show();
		pipes[i].update();
		
		if (pipes[i].hits(jp)) {
			console.log("HIT");
		}

		if (pipes[i].offscreen()) {
			pipes.splice(i, 1);
		}
	}

	jp.update();
	jp.show();

	if (frameCount % 100 == 0) {
		pipes.push(new Pipe());
	}
 }

 function keyPressed(){
 	if (key == ' ') {
 		jp.up();
 		//console.log("Space");
 	}
 }