export class UIAnimations {
    constructor(colors) {
        this._colors = colors;
    }

    startAnimation(boxes, animationSpeed) {

        this._intervalIndexes = [];
        boxes.forEach((box, index) => {

            this._intervalIndexes[index] = setInterval(() => {
                box.style.order = index++;
                if (index >= this._colors.length) index = 0;
            }, animationSpeed);

        });
    }
    stopAnimation() {
        for (const index of this._intervalIndexes) {
            clearInterval(index);
        }
    }

    setColors(boxes, drawnColors) {

        boxes.forEach((box, index) => {
            box.style.background = drawnColors[index];
            box.style.boxShadow = '0 0 0 0 ';
        });

    }
}


