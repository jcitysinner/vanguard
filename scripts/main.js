document.addEventListener('DOMContentLoaded', function() {
		// Overwriting defaults
		repeatAnimation();
	});

	function repeatAnimation(){
			var svg = new Walkway({
		selector: '#wireframeOne',
			duration: '1700',
			// linear easing
			easing: 'linear'
		});

		svg.draw(function() {
			console.dir('done wireframeOne!');
		});

		var svg2 = new Walkway({
			selector: '#wireframeTwo',
			duration: '1200',
			// linear easing
			easing: 'linear'
		});

		svg2.draw(function() {
			console.dir('done wireframeTwo!');
		});

		var svg3 = new Walkway({
			selector: '#wireframeThree',
			duration: '700',
			// linear easing
			easing: 'linear'
		});

		svg3.draw(function() {
			console.dir('done wireframeThree!');
		});

	}

	document.getElementById('growID').onclick = function(e){
	repeatAnimation();

	var generalArray=['logo-main','logo-text','planet-1','planet-2','planet-3','planet-4'];
	var arrayOfItems=[];

	//make wireframe visbile
	for (var i=0;i<document.getElementsByClassName('logo').length;i++){
		document.getElementsByClassName('logo')[i].style.opacity='1';
	}


	for (var i=0;i<generalArray.length;i++){
			var e= document.getElementsByClassName(generalArray[i])[0];
			arrayOfItems.push(e);
			e.style.opacity='0';
			e.className='0';
	}


	//make logo invisible
	document.getElementById('growID').style.opacity='0';
	// console.log(document.getElementById('growID'));

	setTimeout(function(){ 
		for (var i=0;i<generalArray.length;i++){
				var e= arrayOfItems[i];
				e.className=generalArray[i];
				e.style.opacity='1';
		}
	}, 100);

	setTimeout(function(){ 

		//make logo ontop visible
		document.getElementById('growID').style.opacity='1';

		//make wireframes invisible
		for (var i=0;i<document.getElementsByClassName('logo').length;i++){
			document.getElementsByClassName('logo')[i].style.opacity='0';
		}

	}, 1700);

};