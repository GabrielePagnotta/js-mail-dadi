let inputemail = document.getElementById('mail');


function checkemail(){
    let emailvalue = inputemail.value;
    let emaillist = ["peppino@gmail.com", "patrizio@gmail.com", "armando@gmail.com"]


    let emailtf = false;
    for (let i = 0; i < emaillist.length; i++){
    
    if (emailvalue == emaillist[i]){
       emailtf = true;
}

}

if (emailtf == true){
    console.log(`${emailvalue} "è corretta"`);
}

else {
    console.log(`${emailvalue} "è sbagliata"`);
}

}





