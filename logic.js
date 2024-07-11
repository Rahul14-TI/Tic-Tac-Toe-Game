let box = document.querySelectorAll(".box");
let reset = document.querySelector(".Reset");
let msg = document.querySelector(".msg");
let result = document.querySelector("#result");

let turn0 = true; 
let count = 0;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetgame = () =>{
    turn0 = true;
    enablebtn();
    count = 0;
    msg.classList.add("hide");
};


box.forEach(box => {
    box.addEventListener('click', ()=>{
        if(turn0){
            box.innerText = "0";
            turn0 = false;
            box.classList.add("player1");
            box.classList.remove("player2");
        }
        else{
            box.innerText = "X";
            turn0 = true;
            box.classList.add("player2");
            box.classList.remove("player1");
        }
        box.disabled = true;
        count++;

        let iswinner = checkwinner();

        if(count === 9 && !iswinner){
            gamedraw();
        }
    })
});

const gamedraw = () => {
    result.innerText = `Match is Draw`;
    msg.classList.remove("hide");
    disablebtn();
}

const disablebtn = () =>{
    for (const boxes of box) {
        boxes.disabled = true;
    }
};

const enablebtn = () =>{
    for (const boxes of box) {
        boxes.disabled = false;
        boxes.innerText = "";
    }
};

let showWinner = (winner) =>{
   result.innerText = `Winner of the game is ${winner}`;
   msg.classList.remove("hide");
   disablebtn();   
   
};

const checkwinner = () => {
    for(let winner of winpatterns){
        let postion1 = box[winner[0]].innerText;
        let postion2 = box[winner[1]].innerText;
        let postion3 = box[winner[2]].innerText;

        if(postion1 != "" && postion2 != "" && postion3 != ""){
            if(postion1===postion2 && postion2==postion3){
                console.log(`Winner ${postion1}`);
                showWinner(postion1);
            }
        }



    }
};


reset.addEventListener('click',resetgame);