const team1Score = document.querySelector("#scoreteam1")
const team2Score = document.querySelector("#scoreteam2")
const teamOneBtn1 = document.querySelector("#team11");
const teamTwoBtn1 = document.querySelector("#team21")
const teamOneBtn2 = document.querySelector("#team12");
const teamTwoBtn2 = document.querySelector("#team22");
const teamOneBtn3 = document.querySelector("#team13");
const teamTwoBtn3 = document.querySelector("#team23");

const startBtn = document.querySelector(".start-btn");
const teamOneInput  = document.querySelector("#team1_name");
const teamTwoInput = document.querySelector("#team2_name");
let score1 = 0;
let score2 = 0;
let gameStart = false;
let teamOneTitle = document.querySelector(".team-card h2")
let teamTwoTitle = document.querySelector(".team-card:nth-of-type(2) h2")
let team1Name = "";
let team2Name = "";
let winScore = 0;
// Score buttons
let textHeader = document.querySelector(".welcome-text")
const scoreSelector = document.querySelector("#win-score");
let winnerText = document.querySelector(".winner-text")


startBtn.addEventListener("click",function (){
    if(teamOneInput.value === "" || teamTwoInput.value === "" || scoreSelector.value ===""){
        alert("Fill!")
    }
    else  if(scoreSelector.value <= "0"){
        alert("Please insert positive number!")}
    else{
    team1Score.innerText = 0;
    score1 = 0;
    team2Score.innerHTML = 0;
    score2 = 0;
    gameStart = true;
    team1Name = teamOneInput.value;
    team2Name = teamTwoInput.value;
    winScore = scoreSelector.value;
    teamOneTitle.textContent = team1Name;
    teamTwoTitle.textContent = team2Name;
    textHeader.textContent = `Game Start!`
    }
})

function winner(){
    if(score1 >= winScore && score2 <= winScore){
        gameStart = false;
        team1Score.style.color = "green";
        team2Score.style.color = "red";
        winnerText.textContent = `${team1Name} win with ${score1} points!`
        winnerText.style.display = "block";
        startBtn.disabled = true;
    }
    else if(score2 >= winScore && score1 <= winScore){
        gameStart = false;
        team2Score.style.color = "green";
        team1Score.style.color = "red";
        winnerText.textContent = `${team2Name} win with ${score2} points!`
        winnerText.style.display = "block";
        startBtn.disabled = true;
    }
}


teamOneBtn1.addEventListener("click",function(){
    if(gameStart === true){
    score1 +=1;
    team1Score.innerText = score1;
    winner();
    }
    
    
})

teamTwoBtn1.addEventListener("click",function(){
    if(gameStart === true){
    score2 +=1;
    team2Score.innerText = score2;
    winner();
    }
    
})

teamOneBtn2.addEventListener("click",function(){
    if(gameStart === true){
    score1 +=2;
    team1Score.innerText = score1;
    winner();
    }
    
})

teamTwoBtn2.addEventListener("click",function(){
    if(gameStart === true){
    score2 +=2;
    team2Score.innerText = score2;
    winner();
    }
    
    }
)

teamOneBtn3.addEventListener("click",function(){
    if(gameStart === true){
    score1 +=3;
    team1Score.innerText = score1;
    winner();
    }
    
})

teamTwoBtn3.addEventListener("click",function(){
    if(gameStart === true){
    score2 +=3;
    team2Score.innerText = score2;
    winner();
    }
    
})



let resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click",function(){
    textHeader.textContent = "Welcome to Score Kepper!";
    teamOneTitle.textContent = "Team 1";
    teamTwoTitle.textContent = "Team 2";
    team1Score.textContent = "0";
    team1Score.style.color = "white";
    team2Score.textContent = "0";
    team2Score.style.color = "white";
    startBtn.disabled = false;
    winnerText.style.display = "none";
    teamOneInput.value = "";
    teamTwoInput.value = "";
    scoreSelector.value = "";
})


 




