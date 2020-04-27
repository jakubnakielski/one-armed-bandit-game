export class Stats {
    constructor() {
        this._gamesOverall = 0;
        this._wins = 0;
        this._lost = 0;
    }

    changeStats(type) {
        this.type++;
    }
}