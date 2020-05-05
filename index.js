
document.addEventListener("click",function(){
  //1

  var randomNumber1 = Math.floor(Math.random()*6)+1;

  var randomDice = "dice" + randomNumber1 + ".png";

  var  randomSource = "images/" + randomDice;

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src",randomSource);

  //2

  var randomNumber2 = Math.floor(Math.random()*6)+1;

  var randomDice2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

  //If palyer1 Won
  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!" ;
  }else if(randomNumber1 < randomNumber2){//If palyer2 Won
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
  }else{//If it is a Draw
    document.querySelector("h1").innerHTML = "Its a Tie";
  }
});
