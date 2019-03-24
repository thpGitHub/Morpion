let i = 0;
const cases = document.querySelectorAll(".case");

console.log(cases);

function turn() {
    i++;
    return i % 2 === 0 ? "O" : "X";
}

function isGagner(){

    if(cases[0].innerHTML!=="" && cases[0].innerHTML === cases[1].innerHTML &&
        cases[1].innerHTML === cases[2].innerHTML){
        console.log("gagné !");
    }
}

function play(){
    if (this.innerHTML==="")this.innerHTML=turn();
    isGagner();
}

cases.forEach(el => el.addEventListener("click",play));
