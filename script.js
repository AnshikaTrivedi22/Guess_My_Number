let guessnumber=Math.trunc(Math.random()*20+1);
console.log(guessnumber);
let scores=20;
let highscore=document.querySelector(".highscore").textContent;
document.querySelector(".check").addEventListener("click",function(){
    const gussedvalue=Number(document.querySelector(".guess").value);
    console.log(gussedvalue);
    if(!gussedvalue){
        document.querySelector(".message").textContent="⛔No Number Guessed";
    }
    else{
    if(guessnumber===gussedvalue)
    {
        if(scores<=0){
            document.querySelector(".message").textContent="😶‍🌫️Sorry!! you lost the game";
            document.querySelector(".score").textContent=00;
            }
            else
        document.querySelector(".message").textContent="🤩🤩Congratulations You Won";
        document.querySelector("body").style.backgroundColor="#60b347";
        document.querySelector(".number").style.width="29rem";
        document.querySelector(".number").textContent=guessnumber;
        if(highscore<scores){
            highscore=scores;
            document.querySelector(".highscore").textContent=highscore;
        }
    }
    else
    if(gussedvalue>guessnumber){
        if(gussedvalue-guessnumber>2){
        document.querySelector(".message").textContent="📈Number guessed is too High";}
        else
        {
            document.querySelector(".message").textContent="📈Number guessed is High";
        }
        scores--;
        if(scores<=0){
            document.querySelector(".message").textContent="😶‍🌫️Sorry!! you lost the game";
            document.querySelector(".score").textContent=00;
            }
        else document.querySelector(".score").textContent=scores;
    }
    else
    if(gussedvalue<guessnumber){
        if(guessnumber-gussedvalue>2)
        document.querySelector(".message").textContent="📉Number guessed is too Low";
        else
        document.querySelector(".message").textContent="📉Number guessed is Low";
        scores--;
        if(scores<=0){
            document.querySelector(".message").textContent="😶‍🌫️Sorry!! you lost the game";
            document.querySelector(".score").textContent=00;
            }
            else
        document.querySelector(".score").textContent=scores;
    }
}
});
document.querySelector(".again").addEventListener("click",function(){
    guessnumber=Math.trunc(Math.random()*20+1);
    console.log(guessnumber);
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".message").textContent="Start guessing...";
    document.querySelector(".number").textContent="?";
    document.querySelector(".number").style.width="15.08rem";
    document.querySelector(".score").textContent="20";
    document.querySelector(".highscore").textContent=highscore;
    document.querySelector(".guess").value=null;
});