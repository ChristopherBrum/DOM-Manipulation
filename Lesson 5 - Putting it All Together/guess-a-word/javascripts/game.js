/*
- MAIN REQUIREMENTS
	- A function that picks a random word from an array of words. The function has to pick a different word every time it runs, and when it's out of words, it returns undefined.
	- How to start a new game. We'll need a Game constructor that can be used to create game objects.

- RANDOM WORD FUNCTION
- we'll need a function randomWord that can pick one word out at a time randomly. A picked word can't be picked again, and when all words are taken, return undefined. Returns undefined after words are used

- STARTING A NEW GAME
- We need a Game constructor that we can use to create a new game object. When we plan out the constructor, we need to examine all the states that a game needs to track.
	- The word chosen for the current game.
	- Number of incorrect guesses: this controls the number of apples we show.
	- All the letters guessed: the letters will show for "Guesses"
	- Total allowed wrong guesses: this should be 6, since we only have 6 apples!

- A game object, after it's constructed, should be able to do the following:
	- It needs to choose a word from the words array as the word of the game. If all words are chosen, show the "Sorry, I've run out of words!" message.
	- Number of incorrect guesses should be initialized to 0.
	- The letters guessed should be initialized as an empty array.
	- Set total allowed wrong guesses to 6.
	- Create blanks in the "Word:" container. The number of blanks should be the same as the length of the chosen word.

GAME FLOW
- starting a new game
	- select a word, remove word from remaining array of words
	- reset the tree/apples
	- reset 'word' placeholder
	- reset 'guesses' 
	- reset background color

- each turn (check for keydown event)
	- capture keyboard input
	- if the character is in the current word
		- expose character in 'word'
		- add character to 'guesses'
	- otherwise
		- remove apple from tree
		- add character to 'guesses'

- if apples/guesses have been exceeded OR if word has been completed (check for event??)
	- display message
	- fade background color
	- display 'play again' link (reset game, but with same array of words)

*/
document.addEventListener('DOMContentLoaded', () => {
	const gamePrototype = (function() {
		// const words = [
		// 	'apple', 'banana', 'carrot', 'dog', 'elephant',
		// 	'flower', 'guitar', 'happiness', 'island', 'jazz'
		// ];

		const words = [
			'apple', 'banana', 'carrot',
		];

		return {
			init: function() {
				this.setGame();
				this.wins = 0;
				this.losses = 0;
				this.bindHandlers();
			},
			
			setGame: function() {
				this.word = this.randomWord();
				this.lettersGuessed = [];
				this.correctGuesses = [];
				this.incorrectGuesses = 0;
				this.incorrectGuessesAllowed = 6;
				this.setupWordDisplay();
				this.updateBackgroundDisplay();
			},

			handleGameReset: function() {
				if (words.length === 0) this.endGame();
				const spans = document.querySelectorAll('span');
				for (let i = spans.length - 1; i >= 0; i -= 1) {
					spans[i].remove();
				}
				
				this.setGame();
				this.togglePlayAgain();
				this.resetApples();
			},

			endGame: function() {
				const messageElement = document.getElementById('message');
				const replay = document.getElementById('replay');
				const outroMessage =  `Thanks for playing! You had ${this.wins} wins and ${this.losses} loss(es)!`;
				messageElement.textContent = outroMessage;
				replay.classList.add('empty');
			},
			
			randomWord: function() {
				const randomIdx = Math.floor(Math.random() * words.length);
				return words.splice(randomIdx, 1)[0];
			},

			setupWordDisplay: function() {
				const spaces = document.getElementById('spaces');
				let chars = this.word;

				for (let i = 0; i < chars.length; i += 1) {
					let span = document.createElement('span');
					span.dataset.character = chars[i];
					spaces.append(span);
				}
			},

			resetApples: function() {
				document.getElementById('apples').className = '';	
			},

			togglePlayAgain: function(message) {
				const messageElement = document.getElementById('message');
				messageElement.textContent = message;
				messageElement.parentElement.classList.toggle('empty');
			},

			bindHandlers: function() {
				const replay = document.getElementById('replay');

				document.addEventListener('keydown', this.handleGuess.bind(this));
				replay.addEventListener('click', this.handleGameReset.bind(this));
			},

			updateWordDisplay: function(key) {
				const spaces = document.getElementById('spaces');

				[...spaces.children].forEach(element => {
					if (element.dataset.character === key) element.textContent = key;
				});
			},

			updateAppleDisplay: function() {
				const apples = document.getElementById('apples');
				apples.className = 'guess_' + String(this.incorrectGuesses);
			},

			updateBackgroundDisplay: function(backgroundClass) {
				if (!backgroundClass) {
					document.body.classList.remove('lose');
					document.body.classList.remove('win');
				} else {
					document.body.className = backgroundClass;
				}
			},

			invalidGuess: function(key) {
				const messageElement = document.getElementById('message');
				return (!messageElement.parentElement.classList.contains('empty')) || 
					  	 (/[^a-z]/i.test(key) || key.length !== 1);
			},

			handleGuess(e) {
				const key = e.key.toLowerCase();
				if (this.invalidGuess(key)) return;

				if (!this.lettersGuessed.includes(key)) { 						
					const guesses = document.getElementById('guesses');
					const newSpan = document.createElement('span');					
					newSpan.dataset.character = key;
					newSpan.textContent = key;
					guesses.append(newSpan);
					
					this.lettersGuessed.push(key);											

					if (this.word.match(key)) {
						this.correctGuesses.push(key);
						this.updateWordDisplay(key)
					} else {
						this.incorrectGuesses += 1;
						this.updateAppleDisplay();
					}
					this.checkGameEnd();
				}
			},

			checkGameEnd: function() {
				const loser = this.incorrectGuesses >= this.incorrectGuessesAllowed;
				const winner = this.word.split('').every(char => {
					return this.correctGuesses.includes(char);
				})

				if (loser) {
					document.removeEventListener('keydown', this.handleGuess);
					this.togglePlayAgain('Sorry! You\'re out of guesses');
					this.updateBackgroundDisplay('lose');
					this.losses += 1;
				} else if (winner) {
					this.togglePlayAgain('You win!');
					this.updateBackgroundDisplay('win');
					this.wins += 1;
				}
			},
		}
	})();

	const game = Object.create(gamePrototype);
	game.init();
});