var Die = (function () {
    function Die() {
        this.div = document.createElement('div');
        this.div.className = 'die';
    }
    Die.prototype.insert = function () {
        var diceContainer = document.getElementById('dice-container');
        diceContainer.appendChild(this.div);
        this.roll();
    };
    Die.prototype.roll = function () {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        this.div.innerText = String(randomNumber);
        this.value = randomNumber;
    };
    return Die;
}());
var dice = [];
function addDie() {
    var die = new Die();
    die.insert();
    dice.push(die);
}
function rollDice() {
    for (var i = 0; i < dice.length; i++) {
        var die = dice[i];
        die.roll();
    }
}
function sumDice() {
    var sumDice = 0;
    for (var i = 0; i < dice.length; i++) {
        var die = dice[i];
        sumDice += die.value;
        //  die.roll();
        console.log('im doing something, i just dont know what');
    }
    //  let div = document.getElementsByClassName('sum');
    //  this.div.String('Your total is: ' + sumDice);
    alert('Your sum is: [' + sumDice + ']');
}
