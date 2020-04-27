export class UIAnimations {
    constructor(colors) {
        this._colors = colors;
    }

    startAnimation(boxes) {

        this._intervalIndexes = [];
        boxes.forEach((box, index) => {
            console.log();
            
            this._intervalIndexes[index] = setInterval(() => {
                box.style.order = index++;
                if (index >= this._colors.length) index = 0;
            }, 500);

        });
    }
    stopAnimation() {
        for(const index of this._intervalIndexes) {
            clearInterval(index);
        }
    }

    setColors(boxes, colors) {
        boxes.forEach((box, index) => box.style.background = colors[index]);
    }
}


