const numeri = ["1", "2", "3", "4", "5", "6" ]

const scelta = prompt ("scegli un numero")

const numeropc = Math.ceil(Math.random() * 6);

console.log(numeropc)

if (scelta > numeropc){
    console.log("il vingitore è umano")
  }

  else if(scelta < numeropc){
    console.log("Il vincitore è PC")
  }
  
  else {
    console.log("pareggio")
  }