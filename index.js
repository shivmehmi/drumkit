//button
var numofdrums = document.querySelectorAll(".drum");
for(var i=0;i<numofdrums.length;i++){
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
		var btninnerhtml= this.innerHTML;
		makeSound(btninnerhtml);
		btnanimation(btninnerhtml);
	});
}
//Keyboard
document.addEventListener("keydown",function(event){makeSound(event.key); btnanimation(event.key);});

function makeSound(key){
				switch(key){
				case "w":
				var tom1 = new Audio("sounds/tom1.mp3");
				tom1.play();
				break;
				
				case "a":
				var tom2 = new Audio("sounds/tom2.mp3");
				tom2.play();
				break;
				
				case "s":
				var tom3 = new Audio("sounds/tom3.mp3");
				tom3.play();
				break;
				
				case "d":
				var tom4= new Audio("sounds/tom4.mp3");
				tom4.play();
				break;
				
				case "j":
				var crash = new Audio("sounds/crash.mp3");
				crash.play();
				break;
				
				case "k":
				var snare = new Audio("sounds/snare.mp3");
				snare.play();
				break;
				
				case "l":
				var kick = new Audio("sounds/kick.mp3");
				kick.play();
				break;
				
			default:
				console.log(key);
		}
		
	}

function btnanimation(currentkey){
	var activebtn = document.querySelector("."+currentkey);
	activebtn.classList.add("pressed");
	setInterval(function(){activebtn.classList.remove("pressed");},500);
	document.querySelector("h2").innerHTML=currentkey+" 💛";
	setInterval(function(){	document.querySelector("h2").innerHTML="You are Playing good💖";
						  setInterval(function(){	document.querySelector("h2").innerHTML="Keep Going 💞";},10000);},5000);
	
}
	