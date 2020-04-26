import { Draw } from './Draw';
import { Wallet } from './Wallet';
import { Game } from './Game';

const wallet = new Wallet(100);
wallet.changeFunds('-', 10);
console.log(wallet.canPlay());

const draw = new Draw('red', 'orange', 'yellow');
console.log(draw.drawColors());

const game = new Game();
console.log(game)
