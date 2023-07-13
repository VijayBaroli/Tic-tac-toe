let turn = 'X';
let pinfo = document.getElementById("pinfo");
let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("resetbtn");


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
        if ((boxes[winp[i][0]].innerText === boxes[winp[i][1]].innerText) && (boxes[winp[i][1]].innerText === boxes[winp[i][2]].innerText) && (boxes[winp[i][0]].innerText != ''))
        {
            pinfo.innerText = boxes[winp[i][0]].innerText+ " win";
            return;
        }
    }
}


// main function -------

boxes.forEach(box => {
    box.addEventListener('click', function color() {
        if (box.innerHTML == '') {
            box.innerHTML = turn;
            turnchange();
            checkwon();
        }
    });

    resetbtn.addEventListener("click", reset = () =>{
        box.innerHTML = '';
        turn = 'X';
        pinfo.innerText = `Turn : ${turn}`;
    });

});
