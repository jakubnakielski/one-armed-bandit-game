export class Draw {
	constructor(color1, color2, color3, ...rest) {
		this._colors = [color1, color2, color3, ...rest];
	}

	drawColors() {
		const colorsNumber = this._colors.length;
		const randomColors = [];
		
		for (let i = 0; i < colorsNumber; i++) {
			const index = Math.floor(Math.random() * colorsNumber);
			randomColors.push(this._colors[index]);
		}
		return randomColors;
	}
}

const el = new Draw('red', 'orange', 'yellow');
console.log(el.drawColors());