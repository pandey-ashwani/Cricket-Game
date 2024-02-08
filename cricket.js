function generateComputerChoice(){
    let randomNumber= Math.random()*3;
    if(randomNumber>0 && randomNumber<=1)
    {
        return 'bat';
    }
    else if(randomNumber>1 && randomNumber<=2)
    {
        return 'ball';
    }
    else
    {
        return 'stump';
    }
}

function generateResult(userMove,computerMove){
    if(userMove==='bat'){
            if(computerMove==='bat'){
                    score.tie++;
                    return 'its a tie';

            }
            else if(computerMove==='ball'){
                    score.win++;
                    return 'user won';
            }
            else{
                    score.lost++;
                    return 'computer has won';
            }
    }
    else if(userMove==='ball'){
            if(computerMove==='bat'){
                    score.lost++;
                    return 'comptuer has won';

            }
            else if(computerMove==='ball'){
                    score.tie++;
                    return 'its a tie';
            }
            else{
                    score.win++;
                    return 'user won';
            }
    }
    else{
            if(computerMove==='bat'){
                    score.win++;
                    return 'user won';

            }
            else if(computerMove==='ball'){
                    score.lost++;
                    return 'computer has won';
            }
            else{
                    score.tie++;
                    return 'its a tie';
            }
    }

}

function showResult(userC,computerCh,result){
   alert(`
   You have Chosen ${userC}
   Computer Choice is ${computerCh}
   ${result}
   ${score.displayScore()}`)
   }

let score={
    win:0,
    lost:0,
    tie:0,
    };

score.displayScore =function() {
    return `win:${score.win}, lost:${score.lost}, tie:${score.tie}`;
    };
