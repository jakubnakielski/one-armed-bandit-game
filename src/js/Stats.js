export class Stats {
    constructor() {
        this._gamesOverall = 0;
        this._wins = 0;
        this._lost = 0;
    }

     updateStats(isWon) {
        isWon ?
            this._wins++ :
            this._lost++;

        this._gamesOverall++;
    }

     getStats() {
        const stats = {
            gamesOverall: this._gamesOverall,
            wins: this._wins,
            lost: this._lost,
        };
        return stats;
    }

}