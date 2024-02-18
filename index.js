const boxes=document.querySelectorAll(".box");
const info=document.querySelector('.info-text');
const back=document.querySelector('.back');
const newGame=document.querySelector('.info2');
let winner='' ;
let fillCount=1;


let BoxJs=[];
let currentPlayer;


gameint();

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        game(index);
        fillCount++;
        console.log("fillcount",fillCount);
       
    })
});


const winCondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function swap(){
    if(currentPlayer==='X')
    currentPlayer='O';
    else 
    currentPlayer='X';
}

function game(index){
    if(winner!=='')
    return;

    else if(BoxJs[index]==''){
        BoxJs[index]=currentPlayer;
        boxes[index].textContent=currentPlayer;
        swap();
        info.textContent=`Current Player-${currentPlayer}`;
        checkOver();
    }
    else return;
}





function gameint(){
    console.log('new game start');
     BoxJs=['','','','','','','','',''];
     currentPlayer= 'X';
    info.textContent=`Current Player-${currentPlayer}`;
    boxes.forEach((ele)=>{
        ele.textContent='';
        ele.classList.remove('active');
    })
    back.classList.remove('active');
    newGame.style.transform = "scale(0)";
    winner='';
    fillCount=1;
}


function checkOver(){
    
    winCondition.forEach((position)=>{
        console.log(position);
        if((BoxJs[position[0]]!=='' && BoxJs[position[1]]!==''&& BoxJs[position[2]]!=='' )
        && (BoxJs[position[0]]===BoxJs[position[1]])
        && ( BoxJs[position[0]]===BoxJs[position[2]])){
            console.log("we got our winner");
            if(BoxJs[position[0]]=='X')
                winner='X';
                else winner='O';
                 //Now we set winner.
        //display winer  in UI
        if(winner!=='')
        info.textContent=`Winner-${winner}`;
        
        //chnage the background color of the win player
        boxes[position[0]].classList.add('active');
        boxes[position[1]].classList.add('active');
        boxes[position[2]].classList.add('active');

        back.classList.add('active');

        newGame.style.transform = "scale(1)";
        }
        })

        gameTie();
        
   
       
}



//New game 


newGame.addEventListener('click',gameint);

//game tie 
function gameTie(){
    if(fillCount==9 && winner==''){
        info.textContent='Game Tie';
        newGame.style.transform = "scale(1)";
        back.classList.add('active');
    }
}