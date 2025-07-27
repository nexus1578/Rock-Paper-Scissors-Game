let userCh;
let compScore=0; userScore=0;
let user, comp;

let choices = document.querySelectorAll(".choice");

const genCompCh = () => {
    options = ["rock", "paper", "scissors"];
    let randomInd = Math.floor(Math.random()*3);
    return options[randomInd];
}

const playGame = (userCh) => {
    compCh = genCompCh();
    console.log("User:", userCh, "Comp:", compCh);

    displayResult(userCh,compCh);
}

choices[0].addEventListener("click", () => {
    userCh = "rock";    
    playGame(userCh);
});
choices[1].addEventListener("click", () => {
    userCh = "paper";    
    playGame(userCh);
});
choices[2].addEventListener("click", () => {
    userCh = "scissors";    
    playGame(userCh);
});


const displayResult = (userCh, compCh) => {
        if (userCh=="rock" && compCh=="paper") compScore++;
    if (userCh=="rock" && compCh=="scissors") userScore++;
    if (userCh=="paper" && compCh=="rock") userScore++;
    if (userCh=="paper" && compCh=="scissors") compScore++;
    if (userCh=="scissors" && compCh=="rock") compScore++;
    if (userCh=="scissors" && compCh=="paper") userScore++;

    let accessResult = document.querySelector(".final-result");
    if (userScore < compScore) {
        accessResult.innerText = "You lost..";
        accessResult.style.color = "black";
        accessResult.style.backgroundColor = "red";
    }
    else if (userScore > compScore) {
        accessResult.innerText = "You Won..";
        accessResult.style.color = "black";
        accessResult.style.backgroundColor="green";
    }
    else if (userScore == compScore){
        accessResult.innerText = "Draw";
        accessResult.style.color = "black";
        accessResult.style.backgroundColor="yellow";
    }
    else if (userCh == compCh){
        accessResult.innerText = "Draw";
        accessResult.style.color = "black";
        accessResult.style.backgroundColor="yellow";
    }
    user = document.querySelector("#user-score");
    user.innerText = userScore;

    comp = document.querySelector("#comp-score");
    comp.innerText = compScore;
}


