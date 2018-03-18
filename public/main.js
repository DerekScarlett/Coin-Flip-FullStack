var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        //it goes by odd numbers in the DOM
        //inner Text would mean getting the text that is inside the li
        //how to bind an event listener to an element
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[4].innerText)
        fetch('thumbsUp', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,

            'thumbUp': thumbUp,

          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        //it goes by odd numbers in the DOM
        //inner Text would mean getting the text that is inside the li
        //how to bind an event listener to an element
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)

        fetch('messagesto', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,

            'thumbDown':thumbDown
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
            window.location.reload(true)
        })
      });
});
//appending a event listener to every single trash can
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('flips', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
//it is doing not a number and we need to maybe console log or figure out what is happening


document.getElementById("heads").onclick=playerClickedHeads;
document.getElementById("tails").onclick=playerClickedTails;
 //-triggers a fuction that decideds if you win
 function playerClickedHeads(){
   var heads = 1;
   var playScore = 0;
   var compScore = 0;
   var total = 0;
   var num = Math.round(Math.random());
   if(heads === num){
     console.log("You win!!!!!!!kdjflasdjf")
     document.getElementById("winLoss").innerHTML = "You Win";
   }else {
     console.log("You lose!!!")
    document.getElementById("winLoss").innerHTML = "You Lose"
   }
 };

 function playerClickedTails(){
   var tails = 0;
   var num = Math.round(Math.random());
   if(tails === num){
     console.log("You win")
     document.getElementById("winLoss").innerHTML = "You Win"
   }else {
     console.log("You lose!!!")
     document.getElementById("winLoss").innerHTML = "You lose"
  }
 };
