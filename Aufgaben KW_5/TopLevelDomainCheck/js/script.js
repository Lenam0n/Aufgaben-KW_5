
var check = false;
const domains = [".com",".org",".de",];
function charCheck(params) {
    const eingabe = document.getElementById("emailEingabe").value;
    for (i= 0; i < eingabe.length; i++) {
        let char = eingabe[i];
        if (char === "@") {check = true;}
    }
    if((check == false))console.log("Es fehlt ein @");
    else{
        console.log("eingabe ist valid");
    }}