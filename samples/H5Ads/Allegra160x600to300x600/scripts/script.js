var adDiv;

/*
function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}
*/

function startAd() {
    adDiv = document.getElementById("ad");
   cont = document.getElementById("container");
   cont.classList.add("vis");

    fadeInC();
    addEventListeners();
    animateCorner();
    console.log("startAd complete!");
}

function addEventListeners() {
    document.getElementById("c_cta").addEventListener("mouseover", expand);
    document.getElementById("x_close").addEventListener("click", collapse);
    document.getElementById("x_biker").addEventListener("click", clickthrough);
    document.getElementById("x_bg").addEventListener("click", clickthrough);
}

function expand() {
   // EB.expand();

   fadeOutC();
   fadeInX();

    adDiv.classList.remove("collapsed");
    adDiv.classList.add("expanded");
    console.log("Expand happened!");
}

function collapse() {

    fadeOutX();
    fadeInC();

    adDiv.classList.remove("expanded");
    adDiv.classList.add("collapsed");
      console.log("Close happened!");
  //  EB.collapse();
}

function clickthrough() {
  //  EB.clickthrough();
  console.log("Clickthrough happened!");
}



function fadeOutC() {
    TweenMax.to("#c_txt1", .1, {opacity:0});
    TweenMax.to("#c_txt2", .1, {opacity:0});
    TweenMax.to("#c_txt3", .1, {opacity:0});
    TweenMax.to("#c_txt4", .1, {opacity:0});
    TweenMax.to("#c_txt5", .1, {opacity:0});

}

function fadeInC() {
    TweenMax.to("#c_txt1", 1, {opacity:1});
    TweenMax.to("#c_txt2", 1, {opacity:1, delay:0.4});
    TweenMax.to("#c_txt3", 1, {opacity:1, delay:0.8});
    TweenMax.to("#c_txt4", 1, {opacity:1, delay:1.2});
    TweenMax.to("#c_txt5", 1, {opacity:1, delay:1.6});
}



function fadeInX() {
   TweenMax.from("#x_biker", .8, {scale:0.80, ease: Power3.easeOut});
    TweenMax.to("#x_txt1", 1, {opacity:1});
    TweenMax.to("#x_txt2", 1, {opacity:1, delay:0.5});
    TweenMax.to("#x_txt3", 1, {opacity:1, delay:.8});
}

function fadeOutX() {
    TweenMax.to("#x_txt1", .1, {opacity:0});
    TweenMax.to("#x_txt2", .1, {opacity:0});
    TweenMax.to("#x_txt3", .1, {opacity:0});
}


function animateCorner() {
   //  TweenMax.to("#c_cornerFlip", .5, {left:-4, top:-1, rotation:-1, transformOrigin:"left top", repeat:30, repeatDelay:1, yoyo:true});
     TweenMax.to("#c_cornerFlip", .3, {left: 3, repeat:30, repeatDelay:2, yoyo:true});
}



//window.addEventListener("load", setTimeout(startAd, 3000));
