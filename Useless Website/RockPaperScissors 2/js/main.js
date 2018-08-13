
// var audio = new Audio('rock,paper,scissors.mp3');
// audio.play(); 







//with this first line we're saying: "when the page loads (document is ready) run the following script"
$(document).ready(function () {

    //select the POPUP FRAME and show it
    $("#popup").hide().fadeIn(1000);

    //close the POPUP if the button with id="close" is clicked
    $("#close").on("click", function (e) {
        e.preventDefault();
        $("#popup").fadeOut(1000);
    });

});



//game//
var computerChoice;

document.querySelectorAll('.button').forEach(function(element){
	element.addEventListener("click",function(){ //add event listener to 
		toastr.info(Choice(this.dataset.choice));
		computerChoice = Math.random();

	})
});
	  computerChoice = Math.random();
		var compare = function(choice1,choice2){
	    if(choice1===choice2){
	        return "The result is a tie!";
	    }
	    if(choice1==="rock"){
	        if(choice2==="scissors"){
	        	var audio = new Audio('sounds/yay.mp3');
				audio.play(); 
	            return "You Win!";
	        }
	        else{
	        	var audio = new Audio('sounds/aww.mp3');
				audio.play(); 
	            return "You Lose!";

	        }
	    }
	    if(choice1==="paper"){
	        if(choice2==="rock"){
	        	var audio = new Audio('sounds/yay.mp3');
				audio.play(); 
	            return "You Win!";
	        }
	        else{
	        	var audio = new Audio('sounds/aww.mp3');
				audio.play(); 
	            return "You Lose!";
	        }
	    }
	    if(choice1==="scissors"){
	        if(choice2==="rock"){
	        	var audio = new Audio('sounds/aww.mp3');
				audio.play(); 
	            return "You Lose!";
	        }
	        else{
	        	var audio = new Audio('sounds/yay.mp3');
				audio.play(); 
	            return "You Win!";
	        }
	    }
	};
function Choice(choice){
	var userChoice = choice;

	if (computerChoice <0.34){
	    computerChoice = "rock";
	}else if(computerChoice <=0.67){
	    computerChoice = "paper";
	}
	else{
	    computerChoice = "scissors";
	}

	return compare(userChoice,computerChoice);

}














































