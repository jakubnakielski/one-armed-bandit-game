export class Results {
    constructor(drawnColors) {
        if (!drawnColors) throw new Error('Results constructor requires \'drawnColors\'argument');
        this._drawnColors = drawnColors;
    }

    hasDuplicates(arr) {
        const set = new Set(arr);
        return set.size !== arr.length;
    }

    isWon() {
        const firstColor = this._drawnColors[0];
        const areTheSame = this._drawnColors.every((color) => color === firstColor);
        const hasDuplicates = this.hasDuplicates(this._drawnColors);

        return areTheSame || !hasDuplicates;
    }
}


