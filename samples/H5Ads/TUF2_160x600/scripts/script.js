var adDiv;

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {
    adDiv = document.getElementById("ad");
    addEventListeners();

	TweenMax.to("#logo", 1, {opacity:1});
	TweenMax.to("#vs", 1, {opacity:1, delay:0.5});
	TweenMax.to("#guyLeft", .7, {ease: Power1.easeIn, x:160, delay:0.50});
	TweenMax.to("#guyRight", .7, {ease: Power1.easeIn, x:-160, delay:0.50});
    TweenMax.to("#tuneIn", 1, {opacity:1, delay:1.7});
    TweenMax.to("#FX", 1, {opacity:1, delay:2});
    TweenMax.to("#TUF", 1, {opacity:1, delay:2.4});

    console.log("startAd complete!");
}

function addEventListeners() {
   document.getElementById("banner").addEventListener("click", clickthrough);
}

function clickthrough() {
//    EB.clickthrough();
	console.log("Clicked through!");
}

//window.addEventListener("load", initEB);
window.addEventListener("load", startAd);
