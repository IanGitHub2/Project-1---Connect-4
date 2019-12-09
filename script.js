// i need to create a game board

// so create a function that create a div and the a function that puts a class in it

// then in css create a grid

// then call the div and class made to style the div
$(window).on('load',function(){
  $('#exampleModal').modal('show');
});
let playerNumber = 1;
let head4 = document.querySelector("h4");
let head1 = document.querySelector("h1");
let master = document.querySelector("span");
let clickCounter = 0;

let createGameBoard = function (){
  for(let i = 0; i < 42; i++){
    let newBoard =  document.createElement(`div`);
      newBoard.setAttribute('class' ,'littleBox');
    let myBox =  document.querySelector('.box');
      myBox.append(newBoard);

  // player 1 and 2 below it click listener that checks if they win
    newBoard.addEventListener("click", function(){
      if(this.dataset.player == 1 || this.dataset.player == 2){
        return
      }
      if(playerNumber == 1){
        this.style.backgroundColor = "red";
        newBoard.setAttribute('data-player', 1);
        clickCounter++;
        hrCheck();
        vrCheck();
        aglCheck();
        agrCheck(); 
        clickLimit();
        backGroundChange();
        head4.textContent = "Player 2 Turn";
        head4.style.color = "yellow";
        head4.style.textShadow= "2px 2px 4px #000000";
        playerNumber = 2;
      }else{
        this.style.backgroundColor = "yellow";
        newBoard.setAttribute('data-player', 2);
        clickCounter++;
        hrCheck();
        vrCheck();
        aglCheck();
        agrCheck();
        clickLimit();
        backGroundChange();
        head4.textContent = "Player 1 Turn";
        head4.style.color = "red";
        head4.style.textShadow= "2px 2px 4px #000000";
        playerNumber = 1;
      }
    })
}
}
createGameBoard();
//try putting the class in the body and then toggling between
// switch up half way thought the game if no win yet
let backGroundChange = function (){
  if(clickCounter == 12) {
    head1.textContent = "Let's change things up";
    document.body.style.backgroundImage = "url('./trianglify-lowresgreen.png')";
    master.setAttribute('id',"changeUp");
  }
}
// create a function that checks each div that was clicked next to a div that is selected
let callDivsBack = document.querySelectorAll('div');
let hrCheck = function (){
  for(let r = 0; r < 39; r++ )
  {
    if((callDivsBack[r].dataset.player) == playerNumber && (callDivsBack[r +1].dataset.player) == playerNumber && (callDivsBack[r + 2].dataset.player) == playerNumber  && (callDivsBack[r + 3].dataset.player) == playerNumber){
      head1.textContent = "Winner Player" + ` ${playerNumber}`;
      head1.style.color = "green";
      head1.style.fontSize = "4em";
      head1.style.textShadow= "2px 2px 4px #000000";
    }
  }
}

let vrCheck = function (){
  for(let c = 0; c < 21; c++){
    if((callDivsBack[c].dataset.player) == playerNumber && (callDivsBack[c + 7].dataset.player) == playerNumber && (callDivsBack[c + 14].dataset.player) == playerNumber && (callDivsBack[c + 21].dataset.player) == playerNumber ){
      head1.textContent = "Winner Player" + ` ${playerNumber}`;
      head1.style.color = "green";
      head1.style.fontSize = "4em";
      head1.style.textShadow= "2px 2px 4px #000000";
      }
  }
}

let aglCheck = function (){
  for(let c = 0; c < 18; c++){
    if((callDivsBack[c].dataset.player) == playerNumber && (callDivsBack[c + 8].dataset.player) == playerNumber && (callDivsBack[c + 16].dataset.player) == playerNumber && (callDivsBack[c + 24].dataset.player) == playerNumber ){
      head1.textContent = "Winner Player" + ` ${playerNumber}`;
      head1.style.color = "green";
      head1.style.fontSize = "4em";
      head1.style.textShadow= "2px 2px 4px #000000";
      }
  }
}

let agrCheck = function (){
  for(let c = 0; c < 21; c++){
    if((callDivsBack[c].dataset.player) == playerNumber && (callDivsBack[c + 6].dataset.player) == playerNumber && (callDivsBack[c + 12].dataset.player) == playerNumber && (callDivsBack[c + 18].dataset.player) == playerNumber ){
      head1.textContent = "Winner Player" + ` ${playerNumber}`;
      head1.style.color = "green";
      head1.style.fontSize = "4em";
      }
  }
}
let clickLimit = function (){
    if(clickCounter == 42) {
      head1.textContent = "Draw";
      head1.style.color = "yellow";
      head1.style.fontSize = "4em";
    }
  }
