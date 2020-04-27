export class Wallet {
	constructor({ funds }) {
		this._funds = parseFloat(funds);
		console.log(this._funds);
	}

	getFundsValue() {
		return this._funds;
	}

	changeFunds(type, value) {
		value = parseFloat(value);
		if (isNaN(value) || typeof (value) !== 'number') {
			alert('You must enter your bid!');
			return;
		}

		if (type == '-') {
			this._funds -= value;
		}
		else if (type == '+') {
			this._funds += value;
		}
		else {
			throw new Error('Incorrect type. Type must be \'-\' or \'+\' ');
		}
	}

	canPlay() {
		if (this._funds <= 0) {
			return false;
		}
		return true;
	}
}
