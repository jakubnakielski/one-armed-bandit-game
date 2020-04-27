import { Wallet } from './Wallet';
import { Game } from './Game';
import { UIAnimations } from './UIAnimations';
import { Stats } from './Stats';
import { Results } from './Results';

// const wallet = new Wallet(100);
// wallet.changeFunds('-', 10);
// console.log(wallet.canPlay());



const game = new Game();

const drawnColors = game.getRandomColors();
const results = new Results(drawnColors);
console.log(results.isWon());

// const stats = new Stats();
// stats.changeStats();


