//Guessing Game
max = prompt("Enter a Number"); //Parseeee
if(max!=null){
    max = parseInt(max);
    rannum = Math.random();
    numtoguess = Math.floor(rannum*max)+1;
    console.log("Random Number Generated");
    var lives = 5;
    console.log("Lives : "+lives);
}
while(max!=null){
 
 guess = prompt("Enter your guess");
 if(guess==null){
    break;
 }
 if(guess==numtoguess){
   console.log("Correct hit, number is "+guess);
   break;
 }
 else if(guess<numtoguess){
    if(guess>=numtoguess-5){
        console.log("Guess : "+guess);
        console.log("Guess is smaller,though very close");
        
    }
    else{
    console.log("Guess is smaller");
    }
    lives = lives-1;
    console.log("Lives Remaining : "+lives);
 }
 else if(guess>numtoguess){
    if(guess<=numtoguess+5){
        console.log("Guess : "+guess);
        console.log("Guess is larger,though very close");
    }
    else{
    console.log("Guess is larger");
    }
    lives = lives-1;
    console.log("Lives Remaining : "+lives);
 }
 else{
    console.log("Wrong guess, Try again");
 }
 if(lives==0){
    console.log("Out of Lives, Better Luck next time");
    console.log("The number was : "+numtoguess);
    break;
 }
}
