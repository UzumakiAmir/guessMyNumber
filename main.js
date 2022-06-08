// create a random number between 1 to 20
function createRandomNumber(){
    // Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
    return Math.floor(Math.random()*20)+1;
}
let randomNumber = createRandomNumber();
let score = 20;
let highscore = 0;
console.log(randomNumber,'-----ra');  

document.getElementById("again").addEventListener("click",function(){
    randomNumber = createRandomNumber();
    console.log(randomNumber,'-----');
    document.body.style.backgroundColor="rgb(39, 51, 39)";
    score=20;
    document.getElementById("score").innerHTML=`&#128293; Score: ${score}`;
    document.getElementById("input").value='';
    document.querySelector('.trueNumber').textContent='?';
    document.querySelector('.message').innerHTML="Start Guessing...";

},true);

document.getElementById("check").addEventListener("click",function(){
    const input = document.getElementById("input").value; 
    if (input == randomNumber){
        document.querySelector('.message').innerHTML=" &#127919; Correct Number!";
        document.querySelector('.trueNumber').textContent=randomNumber;
        document.body.style.backgroundColor="green";
        highscore = highscore < score ? score : highscore;
        document.querySelector('.highscore').innerHTML=`&#127941; Highscore: ${highscore}`;
    }
    else if(!input){
        document.querySelector('.message').innerHTML="⛔ not a number";
    }
    else if(Number(input)>randomNumber){
        document.querySelector('.message').innerHTML="&#128314; Too high";
        score-=1;
        document.getElementById("score").innerHTML=`&#128293; Score: ${score}`;
    }
    else if(Number(input)<randomNumber){
        document.querySelector('.message').innerHTML="&#128315; Too low";
        score-=1;
        document.getElementById("score").innerHTML=`&#128293; Score: ${score}`;
    }
    if(score==0){
        document.querySelector('.message').textContent=" 💥 you lost the game";
        document.getElementById("check").style.display='none';
        
    }
      
},true);


