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
		this._gamesOverallSpan = document.querySelector('.results__draws > span');
		this._winGamesSpan = document.querySelector('.results__wins > span');
		this._lostGamesSpan = document.querySelector('.results__lost > span');
		this._colors = ['#c70039', '#ff5733', '#ffc300'];
		this._wallet = new Wallet({ funds: 200 });
		this._stats = new Stats();
		this._animation = new UIAnimations(this._colors);
		this._animation.startAnimation(this._boxes);

		this.resetStats();

		this._playBtn.addEventListener('click', () => {
			this.startGame(this._boxes, this._colors);
		});

	}

	startGame(_boxes, _colors) {
		if (!_boxes || !_colors) throw new Error('startGame() requires 2 arguments!');

		const bid = parseFloat(this._moneyInput.value).toFixed(2);

		if (bid <= 0) {
			alert('Enter correct bid!');
			return;
		}

		if (!this._wallet.canPlay()) {
			alert('You are broke!\nRefresh for new game ...');
			return;
		}

		if (!this._wallet.hasEnoughFunds(bid)) {
			alert('You don\'t have enough funds!');
			return;
		}

		const drawnColors = this.getRandomColors();
		const results = new Results(drawnColors);
		const isWon = results.isWon();

		isWon ?
			this._wallet.changeFunds('+', bid) :
			this._wallet.changeFunds('-', bid);

		console.log(this._wallet.getFundsValue());
		this._animation.stopAnimation();
		this._animation.setColors(this._boxes, drawnColors);

		this._stats.updateStats({ isWon });
		this.renderStats();
	}

	getColors() {
		return this._colors;
	}

	getRandomColors() {
		const draw = new Draw(...this._colors);
		const randomColors = draw.drawColors();

		return randomColors;
	}

	renderStats() {
		const { gamesOverall, wins, lost } = this._stats.getStats();

		this._fundsSpan.textContent = this._wallet.getFundsValue();
		this._gamesOverallSpan.textContent = gamesOverall;
		this._winGamesSpan.textContent = wins;
		this._lostGamesSpan.textContent = lost;
	}

	resetStats() {
		this._fundsSpan.textContent = this._wallet.getFundsValue();
		this._gamesOverallSpan.textContent = 0;
		this._winGamesSpan.textContent = 0;
		this._lostGamesSpan.textContent = 0;
	}
}

