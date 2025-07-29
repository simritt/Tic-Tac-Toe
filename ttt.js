let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newBtn");

let turnX = true;
let cnt=0;

let msgContainer = document.querySelector(".winContainer");
let msg = document.querySelector(".winner_msg");

let winner = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];

boxes.forEach((bx) => {
    bx.addEventListener("click", () => {
        if(turnX==true)
        {
            bx.innerText = "X"
            turnX = false;
        }
        else 
        {
            bx.innerText = "O"
            turnX = true;
        }
        bx.disabled = true;
        cnt++;

        let isWinner = checkWinner();

        if(cnt==9 && !isWinner)
            drawGame();
    });

});

const drawGame = () => {
    console.log("Tie game");
    msg.innerText = `Game was Draw`;
    msgContainer.classList.remove("hide");
    disableBox();
}


const showWinner = (winningPlayer) => {
    msg.innerText = `Congrats!\nWinner is ${winningPlayer}`;
    msgContainer.classList.remove("hide");
    disableBox();
}


const checkWinner = () => {
    for(win of winner)
    {
        let pos1val = boxes[win[0]].innerText;
        let pos2val = boxes[win[1]].innerText;
        let pos3val = boxes[win[2]].innerText;

        if(pos1val != "" && pos1val==pos2val && pos2val==pos3val)
        {
            console.log("winner" + pos1val);
            showWinner(pos1val);
            return true;
            
            // boxes.forEach((bx) => {
            //     bx.innerText="";
            //     bx.disabled = false;
            // });
            // turnX = true;
        }
    }
    return false;
};

// const disableBox = () => {
//     boxes.forEach((bx) => {
//         // bx.innerText="";
//         bx.disabled = true;
//     });
// }


const disableBox = () => {
    for(bx of boxes)
        bx.disabled = true;
}


// const enableBox = () => {
//     boxes.forEach((bx) => {
//         bx.disabled = false;
//         bx.innerText="";
//     });
// }

const enableBox = () => {
    for(bx of boxes) {
        bx.disabled = false;
        bx.innerText="";
    }
}

const reset_game = () => {
    // console.log("clicked");
    enableBox();
    turnX = true;
    cnt=0;
    msgContainer.classList.add("hide");

}


newBtn.addEventListener("click", reset_game);
rstBtn.addEventListener("click", reset_game);



// const reset_game = rstBtn.addEventListener("click", () => {
//     // console.log("clicked");
//     enableBox();
//     turnX = true;
// })