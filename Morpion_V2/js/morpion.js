let i = 0;
const cases = document.querySelectorAll(".case");


console.log(cases);

function turn() {
    i++;
    return i % 2 === 0 ? "O" : "X";
}

function displayWinner(win){
    alert(`le gagnant est ${win}`);
    cases.forEach(el => el.innerHTML="");
    i=0;
}

function isGagner(){

    if(cases[0].innerHTML!=="" && cases[0].innerHTML === cases[1].innerHTML &&
        cases[1].innerHTML === cases[2].innerHTML){
        console.log("gagné !");
        displayWinner(cases[0].innerHTML);
    }
    else if(cases[3].innerHTML!=="" && cases[3].innerHTML === cases[4].innerHTML &&
        cases[4].innerHTML === cases[5].innerHTML){
        console.log("gagné !");
        displayWinner(cases[3].innerHTML);
    }
    else if(cases[6].innerHTML!=="" && cases[6].innerHTML === cases[7].innerHTML &&
        cases[7].innerHTML === cases[8].innerHTML){
        console.log("gagné !");
        displayWinner(cases[6].innerHTML);
    }
    else if(cases[0].innerHTML!=="" && cases[0].innerHTML === cases[3].innerHTML &&
        cases[3].innerHTML === cases[6].innerHTML){
        console.log("gagné !");
        displayWinner(cases[0].innerHTML);
    }
    else if(cases[1].innerHTML!=="" && cases[1].innerHTML === cases[4].innerHTML &&
        cases[4].innerHTML === cases[7].innerHTML){
        console.log("gagné !");
        displayWinner(cases[1].innerHTML);
    }
    else if(cases[2].innerHTML!=="" && cases[2].innerHTML === cases[5].innerHTML &&
        cases[5].innerHTML === cases[8].innerHTML){
        console.log("gagné !");
        displayWinner(cases[2].innerHTML);
    }
    else if(cases[0].innerHTML!=="" && cases[0].innerHTML === cases[4].innerHTML &&
        cases[4].innerHTML === cases[8].innerHTML){
        console.log("gagné !");
        displayWinner(cases[0].innerHTML);
    }
    else if(cases[2].innerHTML!=="" && cases[2].innerHTML === cases[4].innerHTML &&
        cases[4].innerHTML === cases[6].innerHTML){
        console.log("gagné !");
        displayWinner(cases[2].innerHTML);
    }
    else if (i===9){
        alert("MATCH NULL");
    }
}
function digitRandom(){
    return Math.floor(Math.random()*9);
}

function iA(){
    let tmp;
    let caseFree=false;
    while(!caseFree){
        tmp = digitRandom();
        if (cases[tmp].innerHTML===""){
            cases[tmp].innerHTML="O";
            i++;
            caseFree=true;
        }
    }
}

function iAadvancedTestLigne(){
    //test FIRST line, droite
    if (cases[0].innerHTML !=="" && cases[0].innerHTML === cases[1].innerHTML && cases[2].innerHTML ===""){
        cases[2].innerHTML = "O";
        i++;
    }// centre
    else if (cases[0].innerHTML !=="" && cases[0].innerHTML === cases[2].innerHTML && cases[1].innerHTML ===""){
        cases[1].innerHTML = "O";
        i++;
    }// gauche
    else if (cases[1].innerHTML !=="" && cases[1].innerHTML === cases[2].innerHTML && cases[0].innerHTML ===""){
        cases[0].innerHTML = "O";
        i++;
    }
    //test SECOND line droite
    else if (cases[3].innerHTML !=="" && cases[3].innerHTML === cases[4].innerHTML && cases[5].innerHTML ===""){
        cases[5].innerHTML = "O";
        i++;
    }// centre
    else if (cases[3].innerHTML !=="" && cases[3].innerHTML === cases[5].innerHTML && cases[4].innerHTML ===""){
        cases[4].innerHTML = "O";
        i++;
    }// gauche
    else if (cases[4].innerHTML !=="" && cases[4].innerHTML === cases[5].innerHTML && cases[3].innerHTML ===""){
        cases[3].innerHTML = "O";
        i++;
    }
    //test THIRD line right
    else if (cases[6].innerHTML !=="" && cases[6].innerHTML === cases[7].innerHTML && cases[8].innerHTML ===""){
        cases[8].innerHTML = "O";
        i++;
    }// center
    else if (cases[6].innerHTML !=="" && cases[6].innerHTML === cases[8].innerHTML && cases[7].innerHTML ===""){
        cases[7].innerHTML = "O";
        i++;
    }// left
    else if (cases[7].innerHTML !=="" && cases[7].innerHTML === cases[8].innerHTML && cases[6].innerHTML ===""){
        cases[6].innerHTML = "O";
        i++;
    }
    //***********************************************************************************************************
    //test FIRST column below
    else if (cases[0].innerHTML !=="" && cases[0].innerHTML === cases[3].innerHTML && cases[6].innerHTML ===""){
        cases[6].innerHTML = "O";
        i++;
    }// centre
    else if (cases[0].innerHTML !=="" && cases[0].innerHTML === cases[6].innerHTML && cases[3].innerHTML ===""){
        cases[3].innerHTML = "O";
        i++;
    }// up
    else if (cases[3].innerHTML !=="" && cases[3].innerHTML === cases[6].innerHTML && cases[0].innerHTML ===""){
        cases[0].innerHTML = "O";
        i++;
    }
    // test SECOND column below
    else if (cases[1].innerHTML !=="" && cases[1].innerHTML === cases[4].innerHTML && cases[7].innerHTML ===""){
        cases[7].innerHTML = "O";
        i++;
    }// centre
    else if (cases[1].innerHTML !=="" && cases[1].innerHTML === cases[7].innerHTML && cases[4].innerHTML ===""){
        cases[4].innerHTML = "O";
        i++;
    }// up
    else if (cases[4].innerHTML !=="" && cases[4].innerHTML === cases[7].innerHTML && cases[1].innerHTML ===""){
        cases[1].innerHTML = "O";
        i++;
    }
    //test THIRD column below
    else if (cases[2].innerHTML !=="" && cases[2].innerHTML === cases[5].innerHTML && cases[8].innerHTML ===""){
        cases[8].innerHTML = "O";
        i++;
    }// centre
    else if (cases[2].innerHTML !=="" && cases[2].innerHTML === cases[8].innerHTML && cases[5].innerHTML ===""){
        cases[5].innerHTML = "O";
        i++;
    }// up
    else if (cases[5].innerHTML !=="" && cases[5].innerHTML === cases[8].innerHTML && cases[2].innerHTML ===""){
        cases[2].innerHTML = "O";
        i++;
    }
    //****************************************************************************************************************
    //test diagonal below
    else if (cases[0].innerHTML !=="" && cases[0].innerHTML === cases[4].innerHTML && cases[8].innerHTML ===""){
        cases[8].innerHTML = "O";
        i++;
    }// centre
    else if (cases[0].innerHTML !=="" && cases[0].innerHTML === cases[8].innerHTML && cases[4].innerHTML ===""){
        cases[4].innerHTML = "O";
        i++;
    }// up
    else if (cases[4].innerHTML !=="" && cases[4].innerHTML === cases[8].innerHTML && cases[0].innerHTML ===""){
        cases[0].innerHTML = "O";
        i++;
    }
    //test diagonal up
    else if (cases[6].innerHTML !=="" && cases[6].innerHTML === cases[4].innerHTML && cases[2].innerHTML ===""){
        cases[2].innerHTML = "O";
        i++;
    }// centre
    else if (cases[6].innerHTML !=="" && cases[6].innerHTML === cases[2].innerHTML && cases[4].innerHTML ===""){
        cases[4].innerHTML = "O";
        i++;
    }// up
    else if (cases[4].innerHTML !=="" && cases[4].innerHTML === cases[2].innerHTML && cases[6].innerHTML ===""){
        cases[6].innerHTML = "O";
        i++;
    }
    else(iA());


}

function play(){
    if (this.innerHTML===""){
        this.innerHTML=turn();
        //if(i<9)iA();
        if(i<9)iAadvancedTestLigne();
        isGagner();
    }
}

cases.forEach(el => el.addEventListener("click",play));
