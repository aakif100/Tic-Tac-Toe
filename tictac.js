// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");

// let turnO = true; //playerX, playerO
// let count = 0; //To Track Draw

// const winPatterns = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// const resetGame = () => {
//   turnO = true;
//   count = 0;
//   enableBoxes();
//   msgContainer.classList.add("hide");
// };

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (turnO) {
//       //playerO
//       box.innerText = "O";
//       turnO = false;
//     } else {
//       //playerX
//       box.innerText = "X";
//       turnO = true;
//     }
//     box.disabled = true;
//     // count++;

//     let isWinner = checkWinner();

//     if (count === 9 && !isWinner) {
//       gameDraw();
//     }
//   });
// });

// const gameDraw = () => {
//   msg.innerText = `Game was a Draw.`;
//   msgContainer.classList.remove("hide");
//   disableBoxes();
// };

// const disableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = true;
//   }
// };

// const enableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = false;
//     box.innerText = "";
//   }
// };

// const showWinner = (winner) => {
//   msg.innerText = `Congratulations, Winner is ${winner}`;
//   msgContainer.classList.remove("hide");
//   disableBoxes();
// };

// const checkWinner = () => {
//   for (let pattern of winPatterns) {
//     let pos1Val = boxes[pattern[0]].innerText;
//     let pos2Val = boxes[pattern[1]].innerText;
//     let pos3Val = boxes[pattern[2]].innerText;

//     if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//       if (pos1Val === pos2Val && pos2Val === pos3Val) {
//         showWinner(pos1Val);
//         // return true;
//       }
//     }
//   }
// };

// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);


let boxes=document.querySelectorAll(".box"); //done
let  reset=document.querySelector("#reset-btn"); //done
let cont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg"); //done
let newg=document.querySelector("#new-btn");
let change=document.querySelector(".mode");


 mode="light";
change.addEventListener("click",()=>{
    if(mode==="light"){
       let pos= document.querySelector("body");
        pos.classList.add("dark");
        pos.classList.remove("light");
        pos.classList.add("dd");


        mode="dark";
        // pos.classList.remove("dark");
    }
    else{
        let pos= document.querySelector("body");
        pos.classList.add("light");
        pos.classList.remove("dark");
        pos.classList.remove("dd");
        mode="light"

    }
})




count=0;
turnO=true;


const pat=[[0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],];

// the main game is under this node and checkwin for all function callin in it 


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
    if(turnO){
       box.innerText="O"
       box.classList.add("coloro")
        
        console.log("O");
        turnO=false;
        box.disabled=true;
    }
    else{
        box.innerText="X";
        box.classList.add("colorx")
        console.log("X");
        turnO=true;
        box.disabled=true;
    }
    count++;
    draw();
    checkwin();
    // count++;
//     let draw=checkwin();

// if (count === 9 && !draw) {
//           gameDraw();
//         }

    
//     const gameDraw = () => {
//       msg.innerText = `Game was a Draw.`;
//       msgContainer.classList.remove("hide");
//       disableBoxes();
//     };

   
});

});






    






const checkwin=()=>{
for(let pattern of pat){
    // console.log([pattern[0].innerText,pattern[1].innerText,pattern[2].innerText]);
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;

    if(pos1 !="" && pos2 !="" && pos3!= ""){
        if(pos1===pos2 && pos2===pos3){
            console.log("the winner is ",pos1);
            disableall();
            winneris(pos1);

        }
    }
    
}

}







const disableall=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}


const winneris=(winner)=>{

    // let message=document.querySelector("#msg");
    cont.classList.remove("hide");
    msg.innerText=`the winner is ${winner} `;
    scoreg(winner);
    msg.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
        inline: 'center'
      });



}

// now for reset game and new game:
// reset.addEventListener("click",resetg);

const resetg=()=>{
    turnO=true;
    // boxes.disabled=false;
    for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
          }
      
}


const newgame=()=>{
    resetg();
    cont.classList.add("hide");
}


reset.addEventListener("click",resetg);
newg.addEventListener("click",newgame);


let p1=document.querySelector(".p1");
let p2=document.querySelector(".p2");




var score=0;
var score1=0;

let scoreg=()=>{
if("O"){
    score1++;
    p2.innerText=`player X SCORE:${score1}`

}
if("X"){
    score++;
    p1.innerText=`player O SCORE: ${score}`

}
else{
    console.log("not right");
}

// p1.innerText=`player O SCORE: ${score}`
// p2.innerText=`player X SCORE:${score1}`
}

// let check=checkwin();
// let count=0;
// let draw=()=>{
//     if (count===9 && !check){
//         cont.classList.remove("hide");
//         msg.innerText=`it is a tie `;



//     }
// }