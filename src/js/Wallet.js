export class Wallet {
	constructor(funds) {
		this._funds = funds;
	}

	getFundsValue() {
		return this._funds;
	}

	changeFunds(type, value) {
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
