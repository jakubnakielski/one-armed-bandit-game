import { Draw } from './Draw';
import { Wallet } from './Wallet';
const wallet = new Wallet(100);

wallet.changeFunds('-', 10)
console.log(wallet.canPlay());

const playBtn = document.querySelector('.play__btn');
const moneyInput = document.querySelector('.play__input');

const fundsSpan = document.querySelector('.results__funds > span');
const gamesNumberSpan = document.querySelector('.results__funds > span');
const winGamesSpan = document.querySelector('.results__funds > span');
const lostGamesSpan = document.querySelector('.results__funds > span');

// const draw = new Draw('red', 'orange', 'yellow');
// console.log(draw.drawColors());


