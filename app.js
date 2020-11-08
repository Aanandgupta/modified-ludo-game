var scores,current,roll,currentImage,image,new_1,hold,gameFinished,prev;
gameFinished=1;
scores=[0,0]
round=0;
c=0;
current=document.getElementById("current-0");
currentImage=document.getElementsByClassName('dice')[0];
currentImage.style.display='none';
roll=document.querySelector('.btn-roll');
function roll_dice(){
    if(gameFinished===1){
    var dice;
    prev=dice;
    currentImage.style.display='block';
    dice=Math.floor(Math.random()*6)+1;
    if(dice===6 && prev===6)
    {   document.getElementById("current-"+c).textContent=0;
        document.getElementById("score-"+c).textContent=0;
        scores[c]=0
        c=1-c;
        round=0;
        currentImage.style.display='none';
        document.querySelector('.player-'+(c)+'-panel').classList.remove("active");
        document.querySelector('.player-'+(1-c)+'-panel').classList.add("active"); 
    }
    else{
    currentImage.src='dice-'+dice+'.png';
    round+=dice;
    if(round+scores[c]>=30){
        document.getElementById("name-"+c).textContent='Winner!';
        document.getElementById("score-"+c).textContent=round+scores[c];
        // document.querySelector('.player-'+(1-c)+'-panel').classList.remove("active");
        document.querySelector('.player-'+(c)+'-panel').classList.add("winner");
        gameFinished=0;
    }
    if (dice!==1){
        document.getElementById("current-"+c).textContent=round;
    } 
    else{ 
        document.getElementById("current-"+c).textContent=0;
        c=1-c;
        round=0;
        currentImage.style.display='none';
        document.querySelector('.player-'+(1-c)+'-panel').classList.remove("active");
        document.querySelector('.player-'+c+'-panel').classList.add("active");

    }
}
}
}
//roll event
hold=document.querySelector('.btn-hold');
roll.addEventListener('click',roll_dice,); 
hold.addEventListener('click',hold_s,); 

function hold_s(){
    if(gameFinished===1){
    scores[c]+=round;
    round=0;
    document.getElementById("score-"+c).textContent=scores[c];
    document.getElementById("current-"+c).textContent=0;
    c=1-c;
    currentImage.style.display='none';
    document.querySelector('.player-'+(1-c)+'-panel').classList.remove("active");
    document.querySelector('.player-'+c+'-panel').classList.add("active");
    }
}
new_1=document.querySelector('.btn-new');
new_1.addEventListener('click',new_btn,); 
function new_btn()
{
    scores=[0,0];
    round=0;
    document.getElementById("current-"+c).textContent=0;
    document.getElementById("current-"+(1-c)).textContent=0;
    document.getElementById("score-"+c).textContent=0;
    document.getElementById("score-"+(1-c)).textContent=0;
    document.getElementById("name-"+c).textContent='PLAYER'+(c+1);
    document.getElementById("score-"+(1-c)).textContent=0;
    document.querySelector('.player-'+(c)+'-panel').classList.remove("active");
    document.querySelector('.player-0-panel').classList.add("active");
    document.querySelector('.player-'+(c)+'-panel').classList.remove("winner");
    gameFinished=1;  
    c=0;
    currentImage.style.display='none';
}

