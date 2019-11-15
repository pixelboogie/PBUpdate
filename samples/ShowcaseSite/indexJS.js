function animateIt() {
	let myCollection = document.getElementsByTagName("p");

	const tl = new TimelineLite();
	tl.from("#myTitle", 1, { opacity: 0 })

	let myVar = setInterval(myTimer, 100);
	let i = 1;
	function myTimer() {
		
		let thisDiv = "#div" + i;
		TweenLite.to(thisDiv, 1.5, { opacity: 1 });
		if (i >= myCollection.length) {
			clearInterval(myVar);
		}
		i++;
	}
}

animateIt();