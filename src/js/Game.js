import { UIAnimations } from './UIAnimations';

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

		this._playBtn.addEventListener('click', () => {
			this.startGame(this._boxes, this._colors);
		});
	}

	startGame(_boxes, _colors) {
		const animation = new UIAnimations(_colors);
		animation.animate(_boxes);
	
	}
}
