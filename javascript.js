

var fadeBox = document.getElementById('fadeInBox');		// set variable to = the id fadeInBox div
		var counter = 10;		// set variable counter to 10 
		var opacity = 1;		// set variable opacity to 1
		var contentTimer; 		// set variable for the counter on the content
	
	//////////////////////////////////////////////////////////////////////	
		
		var fade_IN = document.getElementById('fadeIN');	// variable fade_in is set to the button id called fadeIn 
		fade_IN.addEventListener("click", callFadeIN);		// click event is set to an EventListener
		
		function callFadeIN(){								//function that will run a timer and fade in an object
			contentTimer = setInterval(fadeIN, "100");		// timer is set to count at the speed of "100"
		}
		function divFade(){								// function that displays the objects opacity
			opacity -= .10;									// object is visible because opacity starts at -=.10 
			fadeBox.style.opacity =  opacity;
		}
		
		function fadeIN() {				// function at starts the counter from 10 and counts down
			
			if ( counter >= 0 ) {			// if statement to check if counter is greater or = to 0
				content.innerHTML = counter;
				counter--;				// counter will count down
				divFade()
				fadeBox.style.opacity = opacity;		
				if(counter == 0){					// if statement that checks if counter is at 0. if it is then opacity will = 0
					opacity = 0;
				}
			} else {
				clearInterval(contentTimer);		// else statement that clears the interval of the timer
				counter = 10;					//counter is set back to 10
			}
		}
			
		
	////////////////////////////////////////////////////////////////////////////////////	
	
		var fade_OUT = document.getElementById('fadeOUT');		// variable fade_OUT is set to the button id called fadeOut
		fade_OUT.addEventListener("click", callFadeOUT);		// click event is set to an EventListener
	
		function callFadeOUT(){								//function that will run a timer and fade out an object
			contentTimer = setInterval(fadeOUT, "100");		// timer is set to count at the speed of "100"
		}
		
		function divShow(){						// function that displays the objects opacity
			opacity += .10;						// object is invisible because opacity starts at +=.10
			fadeBox.style.opacity =  opacity;
			}

		function fadeOUT() {			//function at starts the counter from 10 and counts down
			
			if ( counter >= 0 ) {
				content.innerHTML = counter;
				counter--;					// counter will count down
				divShow()
				fadeBox.style.opacity = opacity;
				if(counter == 0){					// if statement that checks if counter is at 0. if it is then opacity will = 1
					opacity = 1;
				}
			} else {
				clearInterval(contentTimer);			// else statement that clears the interval of the timer
				counter = 10;						//counter is set back to 10
			}
		}
			
		
	////////////////////////////////////////////////////////////////////////////////////////////	
		
		var timer = 10;				// var is set to timer then is set equal to 10
		
		window.addEventListener("load",timeAlert);		// EventListener that runs when page is loaded, a timeAlert also starts
	
		function timeAlert() {		// function that has a timer when page is loaded
			if (timer > 0){			// timer will start at 10 and count down to 0
			timer --;				// timer count down
			}
			else {		// once the timer is = to 0 an alert messagebox will pop up
			alert("You have been on this page for 10 seconds!");// message when you have been on the page for more than 10 seconds
			clearInterval(contentTimer);	// resets the timer back to 10
			}
		}
		
		contentTimer = setInterval(timeAlert, "1000");  // the speed of the counter which = 10 seconds
		
////////////////////////////////////////////////////////////////////////////////////////////	

		var canvas = document.getElementById('myCanvas');		// variable set to id myCanvas
		var context = canvas.getContext('2d');			// var set to canvas  
		var imageObj = new Image();				// variable for image object
		imageObj.src = 'image/smile.jpg';		// path of the image
		
		imageObj.onload = function() {		// function to load image on canvas
			draw();						// call the function draw
			
		}
		
		
		
	////////////////////////////////////////////////////////////////////////////////////////////		

	
  
		function draw(){							// function that displays image
				context.clearRect(0, 0, 500, 400);		// size of the clearrect
				var x = 30;		// image placed x axis 30px
				var y = 40;		// image placed y axis 40px
				
				context.drawImage(imageObj,x,y);	
				
				context.beginPath();				// contents of the object being place on the canvas
				context.rect(288, 100, 200, 100);
				context.fillStyle = 'yellow';
				context.fill();
				context.lineWidth = 7;
				context.strokeStyle = 'black';
				context.stroke();
				console.log("draw");
				
				var centerX = 100;		// another object being placed on the canvas at different location 
				var centerY = 300;
				var radius = 70;		// radius make the object become round

				  context.beginPath();			// content of the object
				  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
				  context.fillStyle = 'green';
				  context.fill();
				  context.lineWidth = 5;
				  context.strokeStyle = '#003300';
				  context.stroke();
			
			}
			
		
				


		
		//http://www.html5canvastutorials.com/tutorials/html5-canvas-element/
		
		
		
		var mouseImg = document.getElementById('mouseObj'); 
		var mouseX = 1;
		var mouseY = 1;
		var opacity = 1;
		
		function moveMouse() {
		
			mouseX += 10;
			mouseY += 10;
			opacity -= .10;
			mouseImg.style.top =  mouseY+"px";
			mouseImg.style.left =  mouseX+"px";
			mouseImg.style.opacity =  opacity;

		}
		
		
		var showResults = document.getElementById('showResults'); 
		showResults.addEventListener("click", moveMouse);
		
		
		
		
		
