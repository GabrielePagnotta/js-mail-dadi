let inputemail = document.getElementById('mail');


function checkemail(){
    let emailvalue = inputemail.value;
    let emaillist = ["peppino@gmail.com", "patrizio@gmail.com", "armando@gmail.com"]



    for (let i = 0; i < emaillist.length; i++){
    
    if (emailvalue == emaillist[i]){
        console.log(`${emailvalue} "è presente nel database alla sezione: "${i}`)
    }

    else if(emailvalue != emaillist[i]){
        console.log(`${emailvalue} "non è presente nel database"`)
    }
}


}





