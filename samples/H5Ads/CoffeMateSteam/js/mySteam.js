	/* ---------------------------------------------------------------------------------
		Steam animation
		--------------------------------------------------------------------------------- */
	//var sf = 1.1 * ( 300 / 250) // scaleFactor  --> How does this effect the particles - can't see a difference.
	//var sf = 1;
	var tweens = [];

	function spawnSteam() {
	  var ss = document.getElementById("steamPosition"); // If you color this div to something else you can position the spawn point of the particles visually. 
      var s = document.getElementById("steam");
      var scatterX = 5; 
      var scatterY = 1; 
      var nodeCount = 5;

	  for (var i = 0; i < nodeCount; i++) {
	    var cln = s.cloneNode();
	    cln.id = "steam";      
	    var scale_X = 0.5 + (Math.random() * (1.4 - 1));
	    var scale_Y = 1;

	    TweenLite.set(cln, {   
	    	opacity: .7,   
	    	left: Math.random() * scatterX,
		    top: Math.random() * ((.8 - 1)-30),   
		    scaleX: scale_X,
		    scaleY: scale_Y, });

	    var actualTween = new TimelineLite();

	    actualTween
	      .to(cln, Math.random() * 1 + 9, { // Clone node's motion duration is 11 sec + 0 to 2 additional secs
	        autoAlpha: 0,
          force3D:true,
		      rotationZ:0.01,
	        y: "-=" + 400, // Moves them up approx 600px from your spawn location!
	        ease: Power1.easeIn,
	        onComplete: killSteam,
	        onCompleteParams: [actualTween]
	      }, 0)

	    .to(cln, 10, { 
	      autoAlpha: 1,
        force3D:true,
		    rotationZ:0.01,
	      x: "+=" + (Math.random() * -120 + 150 ), //Go either left or right a bit while moving, but mostly left!
	      ease: Power3.easeInOut
	    }, 0.5)

	    .progress(Math.random()); // Clone don't just spawn and start moving! Start your tween somewhere in the middle of your jouney!

	    tweens.push(actualTween); 
	    ss.appendChild(cln); //Attaches particle clone to the invisible div "steamPosition" which represents the spawn point


	  }
    
    function killSteam(actualTween){ // kills the tween onComplete
      i = []; // empties the array
    }

	  function reSteam(actualTween) { //reSteam onComplete
	    actualTween.restart();
	  }
	}


	function startSteam() {
	//Create Timeline Animation
	var tl = new TimelineMax(); 

	//setting starting positions
		tl
		.set(banner, {autoAlpha:1})

	//animate everything else
      .add(spawnSteam, "start")
      .to(["#steam, #steamPosition"], 3, {opacity:0},"start+=6")
    	.set(["#steam, #steamPosition"], {display:'none'},"start+=9")

		//console.log("startTream ended.");
};


	

	function startIt() {
		document.getElementById("tableCoffee").className = "fadeIn";
		//console.log("startOver ended.");
	}


	function resolveIt() {
		document.getElementById("resolve").className = "fadeIn";
		console.log("resolveIt ended.");
		startSteam();
	}

var myVar = setTimeout(startIt, 4000);
var myVar = setTimeout(resolveIt, 7000);
