class Casino {
   constructor(name){
    this.timesPlayed = 0
    this.name = name
   }
   playGame(betAmount){
    this.timesPlayed + 1
    if(Math.random() <= 0.5){
        console.log(this.name + 'wins!')
    } else {
        console.log('player wins!' + betAmount * (this.timesPlayed + 1))
        }
    }
}

const myCasino = new Casino('unlv casino');
console.log(myCasino)
myCasino.playGame(5)
// TESTS


// BONUS TESTS
/*
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);
*/

// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
