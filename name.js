
	var canvas = document.querySelector("#scene"),
		ctx = canvas.getContext("2d"),
		particles = [],
		amount = 0,
		mouse = {x:0,y:0},
		radius = 1;

	var colors = [" #0d0d0d","#0d0d0d", "#0d0d0d","#0d0d0d", "#0d0d0d"];

	var copy = document.querySelector("#copy");

	var ww = canvas.width = window.innerWidth;
	var wh = canvas.height = window.innerHeight;

	function Particle(x,y){
		this.x =  Math.random()*ww;
		this.y =  Math.random()*wh;
		this.dest = {
			x : x,
			y: y
		};
		this.r =  2.5;
		this.vx = (Math.random()-0.5)*20;
		this.vy = (Math.random()-0.5)*20;
		this.accX = 0;
		this.accY = 0;
		this.friction = Math.random()*0.05 + 0.9;

		this.color = colors[Math.floor(Math.random()*6)];
	}
  var ok = [];
  var myc=0;
	Particle.prototype.render = function() {

    ok.push(this);
    myc++;
		this.accX = (this.dest.x - this.x)/275;
		this.accY = (this.dest.y - this.y)/275;
		this.vx += this.accX;
		this.vy += this.accY;
		this.vx *= this.friction;
		this.vy *= this.friction;

		this.x += this.vx;
		this.y +=  this.vy;

		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
		ctx.fill();

		var a = this.x - mouse.x;
		var b = this.y - mouse.y;

		var distance = Math.sqrt( a*a + b*b );
		if(distance<(radius*70)){
			this.accX = (this.x - mouse.x)/100;
			this.accY = (this.y - mouse.y)/100;
			this.vx += this.accX;
			this.vy += this.accY;
		}


	}

  function onScroll(){
    var height = $(window).scrollTop();
    if(height<700){
    for (var i = 0; i < amount; i++) {
      ok[i].vy+=Math.random()*3 + -1.5;
      ok[i].vx+=Math.random()*6 + -3;
		}
  }
	}

	function onMouseMove(e){
    var height = $(window).scrollTop();
		mouse.x = e.clientX;
		mouse.y = e.clientY+height;
	}

	function onTouchMove(e){
    if(e.touches.length > 0 ){
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
	}

function onTouchEnd(e){
  mouse.x = -9999;
  mouse.y = -9999;
}

	function initScene(){
		ww = canvas.width = window.innerWidth;
		wh = canvas.height = window.innerHeight;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.font = "bold "+(ww/14.5)+"px Arial";
		ctx.textAlign = "center";
		ctx.fillText(copy.value, ww/2, wh/2);

		var data  = ctx.getImageData(0, 0, ww, wh).data;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.globalCompositeOperation = "screen";

		particles = [];
		for(var i=0;i<ww;i+=Math.round(ww/220)){
			for(var j=0;j<wh;j+=Math.round(ww/220)){
				if(data[ ((i + j*ww)*4) + 3] > 150){
					particles.push(new Particle(i,j));
				}
			}
		}
		amount = particles.length;

	}

	function onMouseClick(){
		radius=3;
		setTimeout(function(){
    radius=1;
}, 500);
	}

	function render(a) {
		requestAnimationFrame(render);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (var i = 0; i < amount; i++) {
			particles[i].render();
		}
	};

	copy.addEventListener("keyup", initScene);
	window.addEventListener("resize", initScene);
  window.addEventListener("scroll", onScroll);
	window.addEventListener("mousemove", onMouseMove);
	window.addEventListener("touchmove", onTouchMove);
	window.addEventListener("click", onMouseClick);
	window.addEventListener("touchend", onTouchEnd);
	initScene();
	requestAnimationFrame(render);
