let turn = 'X';
let pinfo = document.getElementById("pinfo");
let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("resetbtn");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let clickaudio = new Audio("click.wav");
let victoryaudio = new Audio("victory.mp3");
victoryaudio.loop = true;
let vimg = document.getElementById("vimg");
var gameover = false;
let Mquery = window.matchMedia("(max-width: 620px)");

// for turn change --------
pinfo.innerText = `Turn : ${turn}`;

function turnchange() {
    if (turn == 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    }
    pinfo.innerText = `Turn : ${turn}`;

}

// for check won -------
function checkwon() {
    let winp = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2],
    ]

    for (let i = 0; i < winp.length; i++) {
        if ((boxes[winp[i][0]].innerText === boxes[winp[i][1]].innerText) && (boxes[winp[i][1]].innerText === boxes[winp[i][2]].innerText) && (boxes[winp[i][0]].innerText != '')) {
            victoryaudio.play();

            if (Mquery.matches) {
                vimg.style.width = "5rem";
            } else {
                vimg.style.width = "10rem";
            }

            clickaudio.pause();
            gameover = true;

            // declaring won --------
            if (boxes[winp[i][0]].innerText === "X") {
                pinfo.innerText = player1 + " won";
            } else {
                pinfo.innerText = player2 + " won";
            }
            
        }
    }
}

// for create player name -----

let player1 = prompt("create player 1 name", "Player 1" );
let player2 = prompt("create player 2 name", "Player 2" );

p1.innerText = player1 + ": X";
p2.innerText = player2 + ": O";

// main function -------

boxes.forEach(box => {
    
    //function for reset -------
    function reset() {
        gameover = false;
        vimg.style.width = "0rem";
        victoryaudio.pause();
        box.innerHTML = '';
        turn = 'X';
        pinfo.innerText = `Turn : ${turn}`;
    }
    
    
    // for play--------
    box.addEventListener('click', function main() {
        if (box.innerHTML == '') {
            clickaudio.play();
            box.innerHTML = turn;
            turnchange();
            checkwon();

        }
        // reset after 10sec -----
        if (gameover ===true) {
            setTimeout(() => {
                resetbtn.click()
            }, 5000);
        }

    });

    resetbtn.addEventListener("click", reset);

});

