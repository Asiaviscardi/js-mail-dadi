const email = ["asia@email.it", "ciao@email.it", "js@email.it"]

const accesso = prompt ("inserisci mail")

for (i = 0; i < email.length; i++){
    if (accesso === email[i]){
        console.log("accesso effettuato")
    }else {
        console.log("accesso non effettuato")
    }
}