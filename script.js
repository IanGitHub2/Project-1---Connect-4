// i need to create a game board

// so create a function that create a div and the a function that puts a class in it

// then in css create a grid

// then call the div and class made to style the div
let playerNumber = 1;
let head4 = document.querySelector("h4");
let head1 = document.querySelector("h1");

let createGameBoard = function (){
  for(let i = 0; i < 42; i++){
    let newBoard =  document.createElement(`div`);
    newBoard.setAttribute('class' ,'littleBox');
  let myBox =  document.querySelector('.box');
  myBox.append(newBoard);
//  console.log(document.querySelectorAll("div"))
  
    newBoard.addEventListener("click", function(){
      if(playerNumber == 1){
        this.style.backgroundColor = "red";
        newBoard.setAttribute('data-player', 1);
        hrCheck();
        vrCheck();
        aglCheck();
        agrCheck(); 
        drawCheck();
        head4.textContent = "Player 2 Turn";
        playerNumber = 2;
      }else{
        this.style.backgroundColor = "yellow";
        newBoard.setAttribute('data-player', 2)
        hrCheck();
        vrCheck();
        aglCheck();
        agrCheck();
        drawCheck(); 
        head4.textContent = "Player 1 Turn";
        playerNumber = 1;
      }
    })
}
}
createGameBoard();


// create a function that checks each div that was clicked next to a div that is selected
let callDivsBack = document.querySelectorAll('div');
// console.log(callDivsBack)
let hrCheck = function (){
  for(let r = 0; r < 39; r++ )
  {
    if((callDivsBack[r].dataset.player) == playerNumber && (callDivsBack[r +1].dataset.player) == playerNumber && (callDivsBack[r + 2].dataset.player) == playerNumber && (callDivsBack[r + 3].dataset.player) == playerNumber ){
      head1.textContent = "Winner Player" + ` ${playerNumber}`;
      head1.style.color = "green";
      head1.style.fontSize = "4em";
    // console.log('win');
    }
  }
}

let vrCheck = function (){
  for(let c = 0; c < 21; c++){
    if((callDivsBack[c].dataset.player) == playerNumber && (callDivsBack[c + 7].dataset.player) == playerNumber && (callDivsBack[c + 14].dataset.player) == playerNumber && (callDivsBack[c + 21].dataset.player) == playerNumber ){
      head1.textContent = "Winner Player" + ` ${playerNumber}`;
      head1.style.color = "green";
      head1.style.fontSize = "4em";
      // console.log('win');
      }
  }
}

let aglCheck = function (){
  for(let c = 0; c < 18; c++){
    if((callDivsBack[c].dataset.player) == playerNumber && (callDivsBack[c + 8].dataset.player) == playerNumber && (callDivsBack[c + 16].dataset.player) == playerNumber && (callDivsBack[c + 24].dataset.player) == playerNumber ){
      head1.textContent = "Winner Player" + ` ${playerNumber}`;
      head1.style.color = "green";
      head1.style.fontSize = "4em";
      // console.log('win');
      }
  }
}

let agrCheck = function (){
  for(let c = 0; c < 21; c++){
    if((callDivsBack[c].dataset.player) == playerNumber && (callDivsBack[c + 6].dataset.player) == playerNumber && (callDivsBack[c + 12].dataset.player) == playerNumber && (callDivsBack[c + 18].dataset.player) == playerNumber ){
      head1.textContent = "Winner Player" + ` ${playerNumber}`;
      head1.style.color = "green";
      head1.style.fontSize = "4em";
      // console.log('win');
      }
  }
}
let drawCheck = function (){
  for(let d = 0; d < 42; d++){
    if(callDivsBack[d].dataset.player === true){
      head1.textContent = "Draw";
    }
  }
}
