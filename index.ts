class Die {
    div: HTMLDivElement;
    value: number;
    
    constructor() {
        this.div = document.createElement('div');
        this.div.className = 'die' ;
        
    }
    insert() {
        let diceContainer = document.getElementById('dice-container');
        diceContainer.appendChild(this.div);
        this.roll();
    }
    roll() {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        this.div.innerText = String(randomNumber);
    }
}

let dice: Array<Die> = [];

function addDie() {
    let die = new Die();
    die.insert();
    dice.push(die);
}

function rollDice() {
    for (let i = 0; i < dice.length; i++) {
        let die = dice[i];
        die.roll();
    }
}
 function sumDice() {
     let sum = 0;
     for (let i = 0; i < dice.length; i++) {
         let die = dice[i];
         sum += die.value;
         
     }
 }

