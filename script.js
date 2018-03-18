

document.getElementById("heads").onclick=playerClickedHeads;
document.getElementById("tails").onclick=playerClickedTails;
 //-triggers a fuction that decideds if you win
 function playerClickedHeads(){
   var heads = 1;
   var num = Math.ceil(Math.random());
   if(heads === num){
     console.log("You win!!!!!!!kdjflasdjf")
     document.getElementById("winLoss").innerHTML("You Win")
   }else {
     console.log("You lose!!!")
    document.getElementById("winLoss").innerHTML("You Lose")
   }
 };

 function playerClickedTails(){
   var tails = 0;
   var num = Math.ceil(Math.random());
   if(tails === num){
     console.log("You win")
     document.getElementById("winLoss").innerHTML("You Win")
   }else {
     console.log("You lose!!!")
     document.getElementById("winLoss").innerHTML("You Lose")
   }
 };
 //-displays result
//user clicks on Tails
 //-triggers a fuction that decideds if you win
  //-display result
//user clicks on Heads
