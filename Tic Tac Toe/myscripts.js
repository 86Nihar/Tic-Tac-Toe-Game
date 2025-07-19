let boxes= document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgamebutton = document.querySelector("#new");
let msgcon =document.querySelector(".msg");
let msg= document.querySelector("#winner");


let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,5,8],
    [3,4,5],
    [6,7,8], 
    [1,4,7],
    [2,5,8],
    [2,4,6],
    
];

const resetGame = ()=>{
   turn0 = true;
   enableboxes();
   msgcon.classList.add("hide");


}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        
        
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
            box.disabled = true;
            checkWinner();
        });

});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled =true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
}
const showDraw= () =>{
    msg.innerHTML="Sorry, this match will draw";
    msgcon.classList.remove("hide");
}
const showWinner=(Winner) =>{
    msg.innerHTML = `Congratulations, Winner is ${Winner}`;
    msgcon.classList.remove("hide");
    disableboxes();
}


const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val !=""&& pos2Val !="" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val==pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);   
            }
             
             
        } 
    }
    
};


newgamebutton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
