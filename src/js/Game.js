export class Game {
	constructor() {
		this.playBtn = document.querySelector('.play__btn');
		this.moneyInput = document.querySelector('.play__input');
		this.fundsSpan = document.querySelector('.results__funds > span');
		this.gamesNumberSpan = document.querySelector('.results__draws > span');
		this.winGamesSpan = document.querySelector('.results__wins > span');
		this.lostGamesSpan = document.querySelector('.results__lost > span');
	}
}
