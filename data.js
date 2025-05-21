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

let dog = {
name: 'lollipop',
legs: 4,
age: [0,1,4,5,7],
bark: function (){
  return 'wof wof'
}
}
console.log(dog)
console.log(dog['age'][2])
console.log(dog.bark())

dog.breed = 'dogg'

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let npersone = Object.keys(users)
let max = Number.NEGATIVE_INFINITY
for (i=0; i<npersone.length;i++){

  let persona = users[npersone[i]]
  let nskill = persona.skills.length
  if (nskill > max){
    max = nskill
  }
  
}

for (i=0; i<npersone.length;i++){
  if (max === users[npersone[i]].skills.length)
    console.log(users[npersone[i]])
}

let cou = 0
for (i=0; i<npersone.length;i++){
  if (users[npersone[i]].isLoggedIn === true && users[npersone[i]].points >= 50){
    cou++;
  }
}
console.log(cou)

let cc = 0
for (i=0; i<npersone.length;i++){
  let skiller = users[npersone[i]].skills
  if (skiller.includes('JavaScript') && skiller.includes('MongoDB') && skiller.includes('Node')){
    cc++;
  }
}
console.log(cc)

users.Abbate = {
}
console.log(users)
const chiavi = Object.entries(users)
const values = Object.values(users)
console.log(values)
console.log(chiavi)

const personAccount = {
  firstName: 'Luca',
  lastName: 'Borghi',
  incomes: 20000,
  expenses: 5000,
  totalIncome: {
    lavoro: 10000,
    scommesse: 10000
  },
  totalExpenses: {
    schedine: 3000,
    cibo: 2000
  },
  
  }

    const userss = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    



function signUp(){

const myObejct = {
  _id: 'ghderc',
  username: 'Lollo',
  email: 'lollo@thomas.com',
  password: '16809',
  createdAt:'08/01/2024 10:00 AM',
  isLoggedIn: false
}


for (i=0; i<userss.length;i++){
  if (userss[i]._id === myObejct._id){
    console.log('Utente già esistente')
  }
}

userss.push(myObejct)
}

signUp();
console.log(userss)

