// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var content;
var dcLogo;
var isClick = false;

//Function to run with any animations starting on load, or bringing in images etc

init = function(){
	
	//Assign All the elements to the element on the page
	container = document.getElementById('container_dc');
	content = document.getElementById('content_dc');
	dcLogo = document.getElementById('doubleclick_logo_dc');
	expandedBgExit = document.getElementById('expanded_background_exit_dc');
	close_btn = document.getElementById('close_btn_dc');
	expand_content =  document.getElementById('expand_content_dc');
	vidContainer = document.getElementById('video_container_dc');
	vid = document.getElementById('video_dc');
	vidPlayBtn = document.getElementById('video_control_play_dc');
	vidPauseBtn = document.getElementById('video_control_pause_dc');
	vidStopBtn = document.getElementById('video_control_stop_dc');
	vidReplayBtn = document.getElementById('video_control_replay_dc');
	vidUnmuteBtn = document.getElementById('video_control_unmute_dc');
	vidMuteBtn = document.getElementById('video_control_mute_dc');
	close_btn = document.getElementById('close_btn_dc');
	
	
	cta = document.getElementById('cta');
	
	//Bring in listeners
	addListeners();
	
	addVideoTracking();
	
	// we use javascript to insert the tune in
	// so that we can make it dynamic date change
	oImg=document.createElement("img");
	oImg.setAttribute('src', 'img/tune.png');
	oImg.setAttribute('id', 'tune');
	content.appendChild(oImg);
	
	// expanded tune in
	xImg=document.createElement("img");
	xImg.setAttribute('src', 'img/x_tune.png');
	xImg.setAttribute('id', 'x_tune');
	expand_content.appendChild(xImg);
	
	
	
	//Show Ad
	container.style.display = "block";
	
	
	 beginAnimInterval=setInterval(function(){beginAnim()},1000);
	
}


function beginAnim()
{
	    console.log("beginAnim()");
		
	    clearInterval(beginAnimInterval);
	    
	   logo=document.getElementById("logo");
	   logo.className="anim";
	   logo.addEventListener('webkitTransitionEnd', anim2, false);
	   logo.addEventListener('transitionend', anim2, false);
}

function anim2(){
	    document.getElementById("tune").className="anim";
}




//Add Event Listeners
addListeners = function() {
		
	expandedBgExit.addEventListener('click', expandedBgExitHandler, false);
	//content.addEventListener('mouseover', onExpandHandler, false);
	
	cta.addEventListener('mouseover', onExpandHandler, false);
	content.addEventListener('mouseout', onContentOut, false);
	expand_content.addEventListener('mouseout', onMouseOffHandler, false);
	close_btn.addEventListener('click',onCloseClickHandler, false);
	
	vidPlayBtn.addEventListener('click', pausePlayHandler, false);
	vidPauseBtn.addEventListener('click', pausePlayHandler, false);
	vidMuteBtn.addEventListener('click', muteUnmuteHandler, false);
	vidUnmuteBtn.addEventListener('click', muteUnmuteHandler, false);
	vidReplayBtn.addEventListener('click', replayHandler, false);
	vidStopBtn.addEventListener('click', stopHandler, false);
	vid.addEventListener('ended', videoEndHandler, false);	
	
}

//Add Video Metrics to the HTML5 Video Elements by Loading in Video Module, and assigning to Videos
addVideoTracking = function() {
	Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
		studio.video.Reporter.attach('video_1', vid);
	});
	vid.volume = 0.0;

}

onCloseClickHandler = function(e){
        Enabler.counter('Rich Media Manual Closes');    
        Enabler.collapse();
        Enabler.stopTimer('panel_1 Expansion');
		//Hide Expand
		expand_content.style.display = "none";
		//Pause Video
		vid.pause();
		//Go to the begining
		vid.currentTime = 0;
		
		//To avoid the re-expansion of the creative after being closed, it should remove the mouseover function and add it again on the mouseout of the content area
		//content.removeEventListener('mouseover', onExpandHandler, false);
		cta.removeEventListener('mouseover', onExpandHandler, false);
}


onContentOut = function(e){
	// Listen again the mouse over function 
	content.removeEventListener('mouseout', onContentOut, false);
	//content.addEventListener('mouseover', onExpandHandler, false);
	cta.addEventListener('mouseover', onExpandHandler, false);
}

onMouseOffHandler = function(e){
	
	evt = e || window.event;
    var tg = evt.relatedTarget;
    if (tg == null || tg.id == ''){ //prevents close button on roll over to blink
		//Hide Expand
		expand_content.style.display = "none";
		//Pause Video
		vid.pause();
		vid.currentTime = 0;
		//Collapse Ad
		Enabler.collapse();
		//Stop Timer
		Enabler.stopTimer('panel_1 Expansion');
	}
	content.addEventListener('mouseout', onContentOut, false);
}

onExpandHandler = function(){ 
        Enabler.expand();
        showExpandedAssets();
        Enabler.startTimer('panel_1 Expansion');
		
		//vid.volume = 0.0;
		
		vidPauseBtn.style.visibility = 'visible';
		vidPlayBtn.style.visibility = 'hidden';
		vidMuteBtn.style.visibility = 'hidden';
		vidUnmuteBtn.style.visibility = 'visible';
		vidReplayBtn.style.visibility = 'hidden';
		
		vid.play();
}

showExpandedAssets = function(){
	//Show Expand over the top
	expand_content.style.display = "block";
	
	
}

expandedBgExitHandler = function(s){
	//Call Exits
	Enabler.exit('HTML5_Expanded_Clickthrough');
	//Pause Video
	vid.pause();
	vid.currentTime = 0;
	//Hide Expand
	expand_content.style.display = "none";
	//Collapse Ad
	Enabler.collapse();
	//Stop Timer
	Enabler.stopTimer('panel_1 Expansion');
}

pausePlayHandler = function(e) {
	//alert(e);
	
	
	if (vid.paused) {
		if (isClick){
			vid.volume = 1.0;
			vidMuteBtn.style.visibility = 'visible';
			vidUnmuteBtn.style.visibility = 'hidden';
			isClick = false;
		}
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

stopHandler = function(e){
	Enabler.counter("EVENT_VIDEO_STOP");
	//set video's first frame
	vid.currentTime = 0;
	//Pause film
	vid.pause();
	//Show required buttons
	vidPauseBtn.style.visibility = 'hidden';
	vidPlayBtn.style.visibility = 'visible';
	isClick = true;
}

replayHandler = function(e) {
	vid.currentTime = 0;
	//Play film
	vid.play();
	//Turn sound on
	vid.volume = 1.0;
	//Show required buttons
	vidPauseBtn.style.visibility = 'visible';
	vidMuteBtn.style.visibility = 'visible';
	vidReplayBtn.style.visibility = 'hidden';
	vidPlayBtn.style.visibility = 'hidden';
	
}

videoEndHandler = function(e) {
	vid.currentTime = 0;
	vid.pause();
	
	vidPauseBtn.style.visibility = 'hidden';
	vidPlayBtn.style.visibility = 'visible';
	isClick = true;
	
	
	vidReplayBtn.style.visibility = 'visible';
	

}