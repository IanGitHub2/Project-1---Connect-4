// i need to create a game board

// so create a function that create a div and the a function that puts a class in it

// then in css create a grid

// then call the div and class made to style the div

let col1 = function (){
  for(let i = 0; i < 42; i++){
    let newCol =  document.createElement(`div`);
    newCol.setAttribute('class' ,'littleBox');
  let myBox =  document.querySelector('.box');
  myBox.append(newCol);
}
}
col1();

let clickMe = document.querySelectorAll(".littleBox");

for(let i = 0; i < clickMe.length; i++){
    clickMe[i].addEventListener("click", function(){
      this.style.backgroundColor = "red";
    })
 }


