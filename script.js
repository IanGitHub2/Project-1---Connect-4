// i need to create a game board

// so create a function that create a div and the a function that puts a class in it

// then in css create a grid

// then call the div and class made to style the div

let col1 = function (){
  for(let i = 0; i < 42; i++){
    let newCol =  document.createElement(`div`);
    newCol.classList.add(`box`);
    newCol.style.backgroundColor = `black`;
  let myBox =  document.querySelector('.box');
  myBox.append(newCol);
}
}
col1();

// let clickBox = document.querySelectorAll(".box")

// let clickMe = function (){
//   for(let i = 0; i < clickBox.length; i++){
// function evt(){ clickBox.addEventListener('click', function(userClicked){
//   userClicked.preventDefalut();
//   if(userClicked.target.tagName === "DIV"){
//     clickBox.style.backgroundColor = 'yellow';
//   }
  
// })  
// }
// }}
// clickMe();

// let addClass = document.querySelectorAll("div > div");
// let slots = function (){
//   for(let i = 0; i < addClass.length; i++){
//   let crClass = document.createAttributeNS('class','littleBoxs')
//   crClass.value = "littleBoxs";
//   function ent(){
//   addClass.setAttribute(crClass);
// }
// }
// }
// slots();


