function rollDice(){
    var randomNumber1=Math.floor(Math.random()*6)+1;
    var randomdice1="images/dice" +randomNumber1+ ".png";
    document.querySelectorAll("img")[0].setAttribute('src',randomdice1);

    var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdice2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute('src',randomdice2)
   
    
    if(randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
    }else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML= "🚩Player 2 wins!";
    }
    else{
            document.querySelector("h1").innerHTML="Draw!";
    }

}
