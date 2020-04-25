import { Draw } from './Draw.js';

const playBtn = document.querySelector('.play__btn');
const moneyInput = document.querySelector('.play__input');

const fundsSpan = document.querySelector('.results__funds > span');
const gamesNumberSpan = document.querySelector('.results__funds > span');
const winGamesSpan = document.querySelector('.results__funds > span');
const lostGamesSpan = document.querySelector('.results__funds > span');


const el = new Draw('red', 'orange', 'yellow');
console.log(el.drawColors());


