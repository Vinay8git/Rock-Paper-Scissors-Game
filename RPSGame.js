// let usermove='';
let computerMove='';
let win=0
let tie=0
let lose=0
let result=''
let gameplayed=0;
let gameHistory=[];

function generateComputerMove(){
    const randomNumber=Math.floor(Math.random()*3);
    if (randomNumber===0){
        computerMove='Rock';
        }
    else if (randomNumber===1) {
        computerMove='Paper';
        } 
    else{
        computerMove='Scissors';
        }
    console.log(`Your Move:       ${usermove}\nComputer's Move: ${computerMove}`);
}
function evaluateMoves(){
    if(usermove===computerMove)
    {
        tie+=1
        result='Tie'
    }
    else if(usermove==="Rock" && computerMove==="Paper")
    {
        lose +=1
        result = 'Lose'
        }
        else if(usermove==="Rock" && computerMove==="Scissors")
        {
            win+=1
            result = 'Win'
            }
        else if(usermove==="Paper" && computerMove==="Rock")
            {
            win +=1
            result = 'Win'
                }
        else if(usermove==="Paper" && computerMove==="Scissors")
        {
            lose +=1
            result = 'Lose'
        }
        else if(usermove==="Scissors" && computerMove==="Rock")
        {
            lose +=1
            result = 'Lose'
        }
        else if(usermove==="Scissors" && computerMove==="Paper")
        {
            win +=1
            result = 'Win'
        }
        gameplayed=gameplayed+1;
        console.log(`You : ${result}`);
        console.log(win , lose , tie);   
        gameHistory.push({
            userMove: usermove,
            comMove: computerMove,
            score: result
        });                  
        
}
function renderGameSummary(){
    document.getElementById('wins').innerHTML=win;
    document.getElementById('loses').innerHTML=lose;
    document.getElementById('ties').innerHTML=tie;
    document.getElementById('gp').innerHTML=win+lose+tie;
}
function renderGameHistory() {
    const tableBody = document.getElementById('his');

    tableBody.innerHTML = "";
    for (let i = 0; i < gameHistory.length; i++) {
        
        const row = document.createElement("tr");

       
        const numberCell = document.createElement("td");
        numberCell.textContent = i + 1; 
        row.appendChild(numberCell);

        const userMoveCell = document.createElement("td");
        userMoveCell.textContent = gameHistory[i].userMove;
        row.appendChild(userMoveCell);

        const computerMoveCell = document.createElement("td");
        computerMoveCell.textContent = gameHistory[i].computerMove;
        row.appendChild(computerMoveCell);

        const resultCell = document.createElement("td");
        resultCell.textContent = gameHistory[i].result;
        row.appendChild(resultCell);

        tableBody.appendChild(row);
    }
}

function persist()
{
    
}
function resetGame()
{
    game={
        win:0,
        lose:0,
        tie:0

    }
    renderGameSummary();
    renderGameHistory();
}