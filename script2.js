const numeropc = Math.ceil(Math.random() * 6);

const numerogiocatore = Math.ceil(Math.random() * 6);

console.log(numeropc)

if (numerogiocatore > numeropc){
    console.log("il vingitore è umano")
  }

  else if(numerogiocatore < numeropc){
    console.log("Il vincitore è PC")
  }
  
  else {
    console.log("pareggio")
  }