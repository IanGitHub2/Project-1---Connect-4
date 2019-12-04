// i need to create a game board

// so create a function that create a div and the a function that puts a class in it

// then in css create a grid

// then call the div and class made to style the div
let playerOne = 1;
let head4 = document.querySelector("h4");

let createGameBoard = function (){
  for(let i = 0; i < 42; i++){
    let newBoard =  document.createElement(`div`);
    newBoard.setAttribute('class' ,'littleBox');
  let myBox =  document.querySelector('.box');
  myBox.append(newBoard);
 console.log(document.querySelectorAll("div"))
  
    newBoard.addEventListener("click", function(){
      if(playerOne == 1){
        this.style.backgroundColor = "red";
        head4.textContent = "player 2";
        playerOne = 0;
      }else{
        this.style.backgroundColor = "yellow";
        head4.textContent = "player 1";
        playerOne = 1;
      }
    })
}
}
createGameBoard();

