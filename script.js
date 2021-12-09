class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }
}
class Player {
  constructor(name) {
    this.name = name;
    this.playerCard = [];
    this.points = 0;
  }
}
class Deck {
  constructor() {
    this.deck = [];
  }
  createDeck() {
    const suits = ["Heart", "Spades", "Clubs", "Diamonds"];
    const ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for (let suit in suits) {
      for (let i = 0; i < ranks.length; i++) {
        this.deck.push(new Card(suits[suit], ranks[i], values[i]));
      }
    }
  }
  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }

    // let m = this.deck.length; // Starts at 52
    // let i;

    // while (m) {
    //   i = Math.floor(Math.random() * m--);

    //   [this.deck[m], this.deck[i]] = [this.deck[i], this.deck[m]];
    // }
    // return this;
  }

  deal() {
    return this.deck.pop();
  }
}

class Game {
  constructor() {
    this.players = [];
  }
  startGame() {
    // let playerOne = prompt("Enter player one name.");
    // let playerTwo = prompt("Enter player two namme.");
    this.players.push(new Player("Robot"));
    this.players.push(new Player("Ninja"));
    let gameOne = new Deck();
    gameOne.createDeck();
    gameOne.shuffle();
    // this.players[0].playerCard = gameOne.deal();
    // this.players[1].playerCard = gameOne.deal();
    // TESTING THIS CODE BELOW

    for (let i = 0; i < 26; i++) {
      this.players[0].playerCard = gameOne.deal();
      this.players[1].playerCard = gameOne.deal();
      if (this.players[0].playerCard.value > this.players[1].playerCard.value) {
        this.players[0].points = this.players[0].points + 1;
        console.log(`${this.players[0].name} wins round ${i + 1}`);
      } else if (
        this.players[0].playerCard.value < this.players[1].playerCard.value
      ) {
        this.players[1].points = this.players[1].points + 1;
        console.log(`${this.players[1].name} wins round ${i + 1}`);
      } else {
        console.log("Tie!");
      }
    }

    if (this.players[0].points > this.players[1].points) {
      return console.log(
        "Player One wins. Score: " +
          this.players[0].points +
          " to " +
          this.players[1].points
      );
    } else if (this.players[0].points < this.players[1].points) {
      return console.log(
        "Player Two Wins. Score: " +
          this.players[1].points +
          " to " +
          this.players[0].points
      );
    } else {
      return console.log("The game is a tie.");
    }

    // TESTING THIS CODE ABOVE
  }
}
let newGame = new Game();
newGame.startGame();
// console.log(newGame);
// console.log(newGame.players[0].playerCard.value);
// console.log(newGame.players[1].playerCard.value);
// console.log(newGame.players[0].points);
// console.log(newGame.players[1].points);
