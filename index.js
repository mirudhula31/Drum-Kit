var noButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<noButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        if(this.innerHTML=='a'){
            var audio1=new Audio("sounds/tom-2.mp3")
            audio1.play();
        }
        else if(this.innerHTML=='w'){
            var audio1=new Audio("sounds/tom-1.mp3")
            audio1.play();
        }
        else if(this.innerHTML=='s'){
            var audio1=new Audio("sounds/tom-3.mp3")
            audio1.play();
        }
        else if(this.innerHTML=='d'){
            var audio1=new Audio("sounds/tom-4.mp3")
            audio1.play();
        }
        else if(this.innerHTML=='j'){
            var audio1=new Audio("sounds/snare.mp3")
            audio1.play();
        }
        else if(this.innerHTML=='k'){
            var audio1=new Audio("sounds/crash.mp3")
            audio1.play();
        }
        else{
            var audio1=new Audio("sounds/kick-bass.mp3")
            audio1.play();
        }


        
    });
}
// for(var i=0; i<noButtons; i++){
// window.addEventListener("keydown",keypresss,false);
// function keypresss(key){
//     if(key.keyCode=='65'){
//         var audio1=new Audio("sounds/tom-2.mp3")
//         audio1.play();
//     }
//     else if(key.keyCode='87'){
//         var audio2=new Audio("sounds/tom-1.mp3")
//         audio2.play();
//     }
//     else if(key.keyCode=='83'){
//         var audio3=new Audio("sounds/tom-3.mp3")
//         audio3.play();
//     }
//     else if(key.keyCode=='68'){
//         var audio4=new Audio("sounds/tom-4.mp3")
//         audio4.play();
//     }
//     else if(key.keyCode=='74'){
//         var audio5=new Audio("sounds/snare.mp3")
//         audio5.play();
//     }
//     else if(key.keyCode=='75'){
//         var audio6=new Audio("sounds/crash.mp3")
//         audio6.play();
//     }
//     else if(key.keyCode=='76'){
//         var audio7=new Audio("sounds/kick-bass.mp3")
//         audio7.play();
//     }
//     else{

//     }

// }

// }

var numberOfButtons =
	document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
.addEventListener("click", function() {

	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
sound(event.key);
animation(event.key);
});

function sound(key) {
switch (key) {
	case "w":
	var sound1 = new Audio("sounds/tom-1.mp3");
	sound1.play();
	break;

	case "a":
	var sound2 = new Audio("sounds/tom-2.mp3");
	sound2.play();
	break;

	case "s":
	var sound3 = new Audio('sounds/tom-3.mp3');
	sound3.play();
	break;

	case "d":
	var sound4 = new Audio('sounds/tom-4.mp3');
	sound4.play();
	break;

	case "j":
	var sound5 = new Audio('sounds/snare.mp3');
	sound5.play();
	break;

	case "k":
	var sound6 = new Audio('sounds/crash.mp3');
	sound6.play();
	break;

	case "l":
	var sound7 = new Audio('sounds/kick-bass.mp3');
	sound7.play();
	break;

	default: console.log(key);
}
}

function animation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("animation");

setTimeout(function() {
	activeButton.classList.remove("animation");
}, 100);
}

