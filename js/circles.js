
// array to hold circles that are on the canvas
circArr = [];

// triggered when a key is pressed
function onKeyDown(event){

    if(keyData[event.key]){ 
        // if key is a valid key in keyData

        // get width and height of browser window
        var maxWidth = view.size.width;
        var maxHeight = view.size.height;

        // generate random x, y coordinate
        var randX = getRandomInt(maxWidth);
        var randY = getRandomInt(maxHeight);

        // create a circle at that random coordinate
        var circle = new Path.Circle(new Point(randX, randY), 150);

        // fill the circle with a random color
        circle.fillColor = keyData[event.key].color;

        // add that circle to the array of circles
        circArr.push(circle);

        // play the corresponding keysound along with that key
        keyData[event.key].sound.play();
    }
}

// triggered every frame
function onFrame(event){

    // loops through every circle on the canvas
    // and changes size and color
    for(var i=0; i<circArr.length; i++ ){
        circle = circArr[i];
        circle.fillColor.hue +=1;
        circle.scale(0.93); // reduce it by 7% every frane

        // if the circle is really small then remove it from the array
        // and from the canvas
        if(circle.area <1){
            circArr.splice(i, 1);
            circle.remove();
        }
    }
}
 
// utility frunciton to create random number between 0 and max
function getRandomInt(max){ 
    return Math.floor(Math.random() * Math.floor(max));
}


// object of data for each keypress
// contains sound to play and color
var keyData = {
	q: {
		sound: new Howl({
  		    src: ['sounds/bubbles.mp3']
		}),
		color: '#1abc9c'
	},
	w: {
		sound: new Howl({
  		    src: ['sounds/clay.mp3']
		}),
		color: '#2ecc71'
	},
	e: {
		sound: new Howl({
  		    src: ['sounds/confetti.mp3']
		}),
		color: '#3498db'
	},
	r: {
		sound: new Howl({
  		    src: ['sounds/corona.mp3']
		}),
		color: '#9b59b6'
	},
		t: {
		sound: new Howl({
  		    src: ['sounds/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	y: {
		sound: new Howl({
  		    src: ['sounds/flash-1.mp3']
		}),
		color: '#16a085'
	},
	u: {
		sound: new Howl({
  		    src: ['sounds/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	i: {
		sound: new Howl({
  		    src: ['sounds/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	o: {
		sound: new Howl({
			    src: ['sounds/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	p: {
		sound: new Howl({
  		    src: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
  		    src: ['sounds/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
  		    src: ['sounds/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		d: {
		sound: new Howl({
  		    src: ['sounds/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
  		    src: ['sounds/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
  		    src: ['sounds/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
  		    src: ['sounds/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
  		    src: ['sounds/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
  		    src: ['sounds/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
  		    src: ['sounds/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
  		    src: ['sounds/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
  		    src: ['sounds/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
  		    src: ['sounds/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
  		    src: ['sounds/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
  		    src: ['sounds/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			    src: ['sounds/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
  		    src: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	}
}