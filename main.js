
var x = Math.floor((Math.random() * 100) + 1);

function give_up() {
    alert("the number is:" + x);
}

function guessing() {
var y=3;//המספר שמנחשים
    if(y>x)
        alert("LOWER!");
    if(y<x)
        alert("HIGHER!");
    if(x==y)
    alert("YES, THIS IS THE NUMBER!");
    alert("?????");
}