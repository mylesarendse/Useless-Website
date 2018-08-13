var questions = [
    'Awe bru! Whats your name?',
    'Where are you from bru?',
    'How old are you bru?',
    'Is that right?',
    'It was lekker talking you china, Check you later :)'
];

var num = 0;
var output = document.getElementById("result");
output.innerHTML = questions[0];
var inputBox = document.getElementById("ans");

function showResponse (){
  var input = inputBox.value;
  if(input == "") {
  }else {
    if(num == 0){
      output.innerHTML='Awe '+input+'! My name is Mack';
      inputBox.value="";
      ++num;
      setTimeout(changeQuestion,2000);
    }else if(num==1){
      output.innerHTML='I just googled '+input+'. It sounds like a vaaab bru!';
      inputBox.value="";
      ++num;
      setTimeout(changeQuestion,2000);
    }else if (num==2){

      var x = parseInt(input);
      var year = 2018-x;

      output.innerHTML='So you were born in '+year+'?';
      ++num;
      setTimeout(changeQuestion,2000);
    }else if (num==3){
      output.innerHTML='Awe - some bru!';
      inputBox.value="";
      ++num;
      setTimeout(changeQuestion,2000);
    }
  }
}

function changeQuestion(){
  output.innerHTML=questions[num];
  if (num==4) {
    inputBox.style.display=="none";
  }
}
$(document).on('keypress', function(e) {
  if(e.which == 13) {
    showResponse();
  }
  
})
$( "#ans" ).focus();




