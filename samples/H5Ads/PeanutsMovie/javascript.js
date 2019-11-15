// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

var container;
var content;
var bgExit;
replayed = false;
// Short videos 
//var vid_preview = "vids/stub_preview.mp4";
//var vid_full = "vids/stub_full.mp4";
// Actual videos
var vid_preview = "vids/PNTS_300x250_Preview_1_2.mp4";
var vid_full = "vids/PNTS_300x250_Full_2.mp4";

// Runs when Enabler is ready.
function enablerInitHandler() {
  if (Enabler.isPageLoaded()) {
    politeInit();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, startAd);
  }
};


//Start the creative
startAd = function(e) {
	console.log("Enter function: startAd")
		//Assign All the elements to the element on the page
	container = document.getElementById('container_dc');
	content = document.getElementById('content_dc');	
	bgExit = document.getElementById('background_exit_dc');

	myCta = document.getElementById('myCta');
	myTune = document.getElementById('myTune');
	myTitle = document.getElementById('myTitle');
	myReplay = document.getElementById('myReplay');

	m_wood = document.getElementById('m_wood');
	m_logo = document.getElementById('m_logo');
	m_cta = document.getElementById('m_cta');
	m_bg = document.getElementById('m_bg');

	vidPlayBtn = document.getElementById('video_control_play_dc');
	vidPauseBtn = document.getElementById('video_control_pause_dc');
	vidUnmuteBtn = document.getElementById('video_control_unmute_dc');
	vidMuteBtn = document.getElementById('video_control_mute_dc');

	//video_controls_dc = document.getElementsByClassName('video_controls_dc');

	vid = document.getElementById('video_dc');
	//vid = document.getElementById('video_dc');
	//Add listeners
	addListeners();
	addVideoTracking();
	
	container.style.display = "block";

	vid.src = vid_preview;
 	playVid();
	dateCheck();
};

//Add Event Listeners
addListeners = function(e) {
	console.log("Enter function: addListeners")

	//bgExit.addEventListener('touchEnd', bgExitHandler, false);
	bgExit.addEventListener('click', bgExitHandler, false);
	myCta.addEventListener('click', bgExitHandler, false);
	m_wood.addEventListener('click', bgExitHandler, false);
	m_bg.addEventListener('click', bgExitHandler, false);
	m_cta.addEventListener('click', bgExitHandler, false);
	m_logo.addEventListener('click', bgExitHandler, false);
	vid.addEventListener('click', bgExitHandler, false);

	vid.addEventListener('ended', videoEndHandler, false);	
	replayBtn.addEventListener('click', replayHandler, false);
	myReplay.addEventListener('click', replayHandler, false);
	vidPlayBtn.addEventListener('click', pausePlayHandler, false);
	vidPauseBtn.addEventListener('click', pausePlayHandler, false);
	vidMuteBtn.addEventListener('click', muteUnmuteHandler, false);
	vidUnmuteBtn.addEventListener('click', muteUnmuteHandler, false);


};
//Add Video Metrics to the HTML5 Video Elements by Loading in Video Module, and assigning to Videos
addVideoTracking = function() {
	Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
		studio.video.Reporter.attach('video_1', vid);
	});
	vid.volume = 0.0;



}
//Add exits
bgExitHandler = function(e) {	
	Enabler.exit('Clickthrough');
};

//Wait for the content to load to call the start od the ad
window.onload = function(){
	console.log("Enter function: window.onload ")
		if (Enabler.isInitialized()) {
	  enablerInitHandler();
	} else {
	  Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
};	



videoEndHandler = function(e) {
	console.log("Enter function: videoEndHandler ")
	vid.style.visibility = 'hidden';

	myCta.style.visibility = 'visible';
	myTune.style.visibility = 'visible';
	myTitle.style.visibility = 'visible';
	myReplay.style.visibility = 'visible';
	myBG.style.visibility = 'visible';
	myWoody.style.visibility = 'visible';

	replayBtn.style.visibility = 'hidden';

/*
	vidPlayBtn.style.top = '228px';
	vidPauseBtn.style.top = '228px';
	vidUnmuteBtn.style.top = '228px';
	vidMuteBtn.style.top = '228px';
*/
	vidPauseBtn.style.visibility = 'hidden';
	vidPlayBtn.style.visibility = 'hidden';
	vidMuteBtn.style.visibility = 'hidden';
	vidUnmuteBtn.style.visibility = 'hidden';

	m_bg.style.visibility = 'hidden';    
	m_cta.style.visibility = 'hidden';    
	m_logo.style.visibility = 'hidden';    
	m_wood.style.visibility = 'hidden';

	animateIt();
}




function playVid(){
	console.log("Enter function: playVid ")	
	vid.play();
	var playPromise = vid.play();
		playPromise.catch(function(error) {
	//console.log(error);
});

}


replayHandler = function(e) {
	vid.src = vid_full;
	vid.style.visibility = 'visible';
	vid.volume = 1.0;
	vid.muted = false;
	vid.play();
	vid.addEventListener("timeupdate", tick);


	vidPlayBtn.style.top = '228px';
	vidPauseBtn.style.top = '228px';
	vidUnmuteBtn.style.top = '228px';
	vidMuteBtn.style.top = '228px';
	
/*

if(replayed){
	vidPlayBtn.style.top = '278px';
	vidPauseBtn.style.top = '278px';
	vidUnmuteBtn.style.top = '278px';
	vidMuteBtn.style.top = '278px';
}



-------------------------------------------------------------------



video_controls_dc.style.top = '275px';



if(replayed){
	video_controls_dc.style.top = '275px';
	//var t3 = new TimelineLite();
	//t3.to(".video_controls_dc", .1, {y:50})
}

*/

	myReplay.style.visibility = 'hidden';
	replayBtn.style.visibility = 'hidden';
	vidPauseBtn.style.visibility = 'visible';
	vidPlayBtn.style.visibility = 'hidden';
	vidMuteBtn.style.visibility = 'visible';
	vidUnmuteBtn.style.visibility = 'hidden';

}


pausePlayHandler = function(e) {
	if (vid.paused) {
		//If Paused then Play
		vid.play();
		//Show Pause button and hide Play button
		vidPauseBtn.style.visibility = 'visible';
		vidPlayBtn.style.visibility = 'hidden';		
	} else {
		//If not paused then Pause
		vid.pause();
		//Show Play button and hide Pause button
		vidPauseBtn.style.visibility = 'hidden';
		vidPlayBtn.style.visibility = 'visible';
	}
}
muteUnmuteHandler = function(e) {
	if (vid.volume == 0.0) {
	//If Muted then Turn Volume Back to 1.0
		vid.volume = 1.0;
		vidMuteBtn.style.visibility = 'visible';
		vidUnmuteBtn.style.visibility = 'hidden';
		
	} else {
	//Otherwise Turn Volume Off
		vid.volume = 0.0;
		vidMuteBtn.style.visibility = 'hidden';
		vidUnmuteBtn.style.visibility = 'visible';
	}
}



function tick(e) {
  var t = this.currentTime;
  if (t >= 8) {
	m_bg.style.visibility = 'visible';    
	m_cta.style.visibility = 'visible';    
	m_logo.style.visibility = 'visible';    
	m_wood.style.visibility = 'visible';

	//-------------------------------------------------------------------
	animate2();
  	//console.log("Enter function: tick ")	  
    vid.removeEventListener("timeupdate", tick);
  }
}


function animate2() {
	var t2 = new TimelineLite();
	
	vidPlayBtn.style.top = '178px';
	vidPauseBtn.style.top = '178px';
	vidUnmuteBtn.style.top = '178px';
	vidMuteBtn.style.top = '178px';

	t2.from("#m_bg", .3, {opacity:0, y:70, ease: Power1.easeOut})


	/*

	t2.to("#vidPlayBtn", .3, {y:-50, ease: Power1.easeOut}, '0.0')
	t2.to("#vidPauseBtn", .3, {y:-50, ease: Power1.easeOut}, '0.0')
	t2.to("#vidUnmuteBtn", .3, {y:-50, ease: Power1.easeOut}, '0.0')
	t2.to("#vidMuteBtn", .3, {y:-50, ease: Power1.easeOut}, '0.0')
	t2.to(".video_controls_dc", .3, {y:-50, ease: Power1.easeOut}, '0.0')
	
*/


	t2.from("#m_logo", .5, {opacity:0}, '.5')
	t2.from("#m_cta", .5, {opacity:0}, '1')
	t2.from("#m_wood", .3, {x:50, ease: Power1.easeOut}, '1.5')
	replayed = true;
}



function dateCheck() {
    var today = new Date();
    var date1 = new Date(2019, 02, 15);  // March 15 2019
    //console.log(today + " ... " + date1);
    if(today <= date1) {
       return true;
    }
   	myTune.src = 'imgs/tuneInToday.png';
   return false;
}


function animateIt() {
	var tl = new TimelineLite();
	tl.from("#myBG", .3, {opacity:0, scale: 6})
	tl.from("#myTitle", .5, {opacity:0}, '.5')
	tl.from("#myTune", .5, {opacity:0, x:-800, ease: Power1.easeOut}, '.5')
	tl.from("#myCta", .4, {opacity:0, y:-20, ease: Power1.easeOut}, '1.2')
	tl.from("#myWoody", .4, {opacity:20, x:200, ease: Power1.easeOut}, '1.7')
	tl.from("#myReplay", .5, {opacity:0, rotation: 480, ease: Power1.easeOut}, '2')
	//tl.to("#myWoody", .4, {y: 20, yoyo: true, ease: Power1.easeOut}, '2.5')

	tl.fromTo("#myWoody", 0.2, {y: 0}, {y: -5, repeat: 3, repeatDelay:0, yoyo: true}, '2.5');
 


}

