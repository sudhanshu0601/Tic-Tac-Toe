let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector(".reset");
let winnerBtn = document.querySelector(".winner");

let turnO = true;
let drawcount = 0;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;

        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        drawcount++;
        checkDraw();
        checkWin();
    })
});

const checkWin = () => {
    for (pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                boxDisable();
                winnerBtn.innerText = "Winner is " + pos1;
                winnerBtn.classList.remove("hidden");
                restBtn.innerText = "New Game";
            }
        }
    }
}

boxDisable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

boxEnable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turnO = true;
    drawcount=0;
    boxEnable();
    winnerBtn.classList.add("hidden");
    restBtn.innerText = "Reset";
}

checkDraw = () => {
    if (drawcount >= 9) {
        drawcount=0;
        winnerBtn.innerText = "Game Draw"
        winnerBtn.classList.remove("hidden");
    }
}
restBtn.addEventListener("click", resetGame)