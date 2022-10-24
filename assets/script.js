// let inputemail = document.getElementById('mail');


// function checkemail(){
//     let emailvalue = inputemail.value;
//     let emaillist = ["peppino@gmail.com", "patrizio@gmail.com", "armando@gmail.com"]


//     let emailtf = false;
//     for (let i = 0; i < emaillist.length; i++){
    
//     if (emailvalue == emaillist[i]){
//        emailtf = true;
// }

// }

// if (emailtf == true){
//     console.log(`${emailvalue} "è corretta"`);
// }

// else {
//     console.log(`${emailvalue} "è sbagliata"`);
// }

// }

// esercizio 2

let playerWin = 0;
let pcWin = 0;

let winPlayer = document.getElementById("playerCount");
let winPc = document.getElementById("pcCount");

function startInput() {

    // VARIABILI            

    let result = document.getElementById("resultOut");
    let playerNumber = Math.floor(Math.random() * 6 + 1);
    let pcNumber = Math.floor(Math.random() * 6 + 1);

    console.log(playerNumber);
    console.log(pcNumber);

    //Condizioni

    if (playerNumber > pcNumber) {
        result.innerHTML = `Hai vinto! il tuo numero è ${playerNumber}`;
        playerWin = playerWin + 1;

    } else if (playerNumber == pcNumber) {
        result.innerHTML = `Pareggio! ${playerNumber} e ${pcNumber}! `;
    } else {
        result.innerHTML = `Hai perso D: ho fatto ${pcNumber}, Riproviamo?`;
        pcWin = pcWin + 1;
    }

    winPlayer.innerHTML = `Vittorie: ${playerWin}`;
    winPc.innerHTML = `Perdite: ${pcWin}`;

}




