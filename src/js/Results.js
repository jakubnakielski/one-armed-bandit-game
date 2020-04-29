export class Results {

    static hasDuplicates(arr) {
        const set = new Set(arr);
        return set.size !== arr.length;
    }

    static isWon(drawnColors) {
        if (!drawnColors) throw new Error('Results constructor requires \'drawnColors\'argument');

        const firstColor = drawnColors[0];
        const areTheSame = drawnColors.every((color) => color === firstColor);
        const hasDuplicates = this.hasDuplicates(drawnColors);

        return areTheSame || !hasDuplicates;
    }
}


