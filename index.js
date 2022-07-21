let computerScore = 0, userScore = 0, totalTie = 0;
function rock() {
    // alert('you clicked rock button')
    main("R")
    document.getElementById('image').src = "./images/rock.png"
}

function paper(){
    main("P")
    document.getElementById('image').src = "./images/paper.png"
}

function scissor(){
    main("S")
    document.getElementById('image').src = "./images/scissor.png"
}

function randomInput(){
    let choiceArray = ["R", "P", "S"]
    return choiceArray[Math.floor(Math.random()*3)]
}

function main(userInput){
    let computerInput = randomInput()
    if(userInput === computerInput){
        console.log("game is tie")
        totalTie++;
        document.getElementById('totalTie').innerText = "Number of ties are: "+totalTie
    }
    else if((computerInput === "R" && userInput === "S") || (computerInput === "P" && userInput === "R") || (computerInput === "S" && userInput === "P")){
        console.log("Computer is winner");
        computerScore++;
        document.getElementById('computer').innerText = "Computer score is: " + computerScore
    }
    else{
        console.log("You are winner");
        userScore++;
        document.getElementById('user').innerText = "Your score is: " + userScore
    }
    
}  
