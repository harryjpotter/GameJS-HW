
var secretNum = Math.floor((Math.random() * 100) + 1);

$(document).ready(function(){
   alert("The computer chose a number between 1 and 100. You need to guess it. Good-luck! :) ") 
});

function give_up() {
    alert("the number is:" + x);
}

function guessing() {


    var GuessedNum = $("#guessingArea").val();//המספר שמנחשים
    if(GuessedNum>secretNum)
        alert("LOWER!");
    if(GuessedNum<secretNum)
        alert("HIGHER!");
    if(secretNum==GuessedNum)
    alert("YES, THIS IS THE NUMBER!");
}
