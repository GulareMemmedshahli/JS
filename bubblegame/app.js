let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let start = document.querySelector(".start");
let Stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let score = document.querySelector(".score");
let easy=document.querySelector(".emh1");
let medium=document.querySelector(".emh2");
let hard=document.querySelector(".emh3");

let bubbleinterval;
let bubbleScore = 0;

start.addEventListener("click", function () {
  start.disabled = true;
  Stop.disabled = false;

  bubbleinterval = setInterval(function () {
    createbuble();
  }, 200);
});

Stop.addEventListener("click", function () {
  start.disabled = false;
  Stop.disabled = true;

  clearInterval(bubbleinterval);
});

reset.addEventListener("click", function () {
  start.disabled = false;
  Stop.disabled = false;

  clearInterval(bubbleinterval);
  box1.innerHTML = " ";
  bubbleScore = 0;
  score.innerText = bubbleScore;
});

function createbuble() {
  let leftP = Math.floor(Math.random() * (650 - 1) + 1);
  let topP = Math.floor(Math.random() * (400 - 1) + 1);
  let bubble = document.createElement("div");
  bubble.setAttribute("class", "bubble");
  bubble.style.width = "25px";
  bubble.style.height = "25px";
  bubble.style.backgroundColor = "hotpink";
  bubble.style.borderRadius = "50%";
  bubble.style.border = "1px solid black";
  bubble.style.cursor = "pointer";
  bubble.style.position = "absolute";
  bubble.style.left = `${leftP}px`;
  bubble.style.top = `${topP}px`;

  box1.appendChild(bubble);

  if (document.querySelectorAll(".bubble").length == 100) {
    clearInterval(bubbleinterval);
    alert(`Oyun bitdi... SCORE - ${bubbleScore}`);
    box1.innerHTML = " ";
    bubbleScore = 0;
    score.innerText = bubbleScore;
  }

  bubble.addEventListener("click", function () {
    let Sound = new Audio("./buble.wav");
    Sound.play();
    bubble.remove();
    bubbleScore += 1;
    score.innerText = bubbleScore;
  });
}
// easy.addEventListener("click",function(){
//   bubbleinterval = setInterval(function () {
//     createbuble();
//   }, 200);
// })
// medium.addEventListener("click",function(){
//   bubbleinterval = setInterval(function () {
//     createbuble();
//   }, 100);
// })
// hard.addEventListener("click",function(){
//   bubbleinterval = setInterval(function () {
//     createbuble();
//   }, 0.50);
// })
