export class Results {
    constructor(drawnColors) {
        if (!drawnColors) throw new Error('Results constructor requires \'drawnColors\'argument');
        
        this._drawnColors = drawnColors;
    }

    isWon() {
        console.log(this._drawnColors);

        // if()
    }
}

