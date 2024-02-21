let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options =["rock","paper","scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
    //rock paper scissor
};

const drawGame = () =>{
    msg.innerText = "Game is draw.Play again";
    document.getElementById("msg").style.backgroundColor = "purple";
    
};
const showWinner = (userWin,userchoice,compChoice) =>{
    if(userWin==true)
    {   userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
        document.getElementById("msg").style.backgroundColor = "green";
    }
    else if(userWin==false){
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userchoice}`;
        document.getElementById("msg").style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();
    
    if(userchoice == compChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock")
        {
           userWin = compChoice === "paper" ? false : true;
        }
        else if(userchoice === "paper")
        {
            userWin = compChoice === "scissor" ? false : true ;
        }
        else
        {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
    const userchoice= choice.getAttribute("id");
    playGame(userchoice);
    });
});