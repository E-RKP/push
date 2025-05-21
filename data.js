let ciao = 'ciao'
console.log('ciao')

let newArr = [1,5,88,190,57,10]
let min = Number.POSITIVE_INFINITY
for (i=0; i<newArr.length;i++){
  if (newArr[i] < min){
    min = newArr[i]
  }
}
console.log(min)

const myButton = document.getElementById ('actualbutton')
const messaggio = document.getElementById('ciao')
const namem = document.getElementById('nome')

function cliccaeSaluta(){

  messaggio.textContent = `ciao ${namem.value}!`
  if (namem.value === ''){
    messaggio.textContent = 'Inserisci un nome'
  }
}

myButton.addEventListener('click', ()=>{
  cliccaeSaluta();
})

const numerino = document.getElementById('numerino')
const numerone = document.getElementById('numerone')
const aggiungere = document.getElementById('aggiungi')
const diminuire = document.getElementById('diminuire')
const azzerare = document.getElementById('azzera')

let counterB = 0
let counterm = 0

function counterplus (){

  counterB++;
  counterm++;

  return {
    counterB,
    counterm
  };
}
function countermenus (){
  counterB--;
  counterm++;
  if (counterB < 0){
    counterB = 0
  }
   return {
    counterB,
    counterm
  };
}

aggiungere.addEventListener('click', ()=>{

  counterplus();
  numerino.innerHTML = counterm;
  numerone.innerHTML = counterB;
})

diminuire.addEventListener('click', ()=>{

  countermenus();
  numerino.innerHTML = counterm;
  numerone.innerHTML = counterB;
})

azzerare.onclick = function azzerus (){
  counterB = 0
  counterm = 0
  numerino.innerHTML = counterm;
  numerone.innerHTML = counterB;
}