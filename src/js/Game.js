import { UIAnimations } from './UIAnimations';
import { Draw } from './Draw';
import { Wallet } from './Wallet';
import { Stats } from './Stats';
import { Results } from './Results';

export class Game {
	constructor() {
		this._playBtn = document.querySelector('.play__btn');
		this._moneyInput = document.querySelector('.play__input');
		this._boxes = [...document.querySelectorAll('.boxesContainer__box')];
		this._fundsSpan = document.querySelector('.results__funds > span');
		this._gamesNumberSpan = document.querySelector('.results__draws > span');
		this._winGamesSpan = document.querySelector('.results__wins > span');
		this._lostGamesSpan = document.querySelector('.results__lost > span');
		this._colors = ['#c70039', '#ff5733', '#ffc300'];
		this._isRunning = false;
		this._wallet = new Wallet({ funds: 200 });

		this._playBtn.addEventListener('click', (e) => {
			// if (this._isRunning)
			// 	return;
			// else
			// 	this._isRunning = true;

			this.startGame(this._boxes, this._colors);
		});

		this._animation = new UIAnimations(this._colors);
		this._animation.startAnimation(this._boxes);
	}

	startGame(_boxes, _colors) {
		if (!_boxes || !_colors) throw new Error('startGame() requires 2 arguments!');
		
		const bid = this._moneyInput.value;

		const drawnColors = this.getRandomColors();
		const results = new Results(drawnColors);
		const isWon = results.isWon();
		
		this._animation.stopAnimation();
		this._animation.setColors(this._boxes, drawnColors);
	}


	getColors() {
		return this._colors;
	}

	getRandomColors() { 
		const draw = new Draw(...this._colors);
		const randomColors = draw.drawColors();

		return randomColors;
	}

	// checkIfWin() {
	// 	const randomColor this.getRandomColors()
	// }
}

