export class UIAnimations {
    constructor(colors) {
        this._colors = colors;
    }

    startAnimation(boxes) {

        this._intervalIndexes = [];
        boxes.forEach((box, index) => {

            this._intervalIndexes[index] = setInterval(() => {
                box.style.order = index++;
                if (index >= this._colors.length) index = 0;
            }, 1000);

        });
    }
    stopAnimation() {
        for (const index of this._intervalIndexes) {
            clearInterval(index);
        }
    }

    setColors(boxes, colors) {

        boxes.forEach((box, index) => {
            const cssVariable = `--box-${index}-base-color`;
            document.documentElement.style.setProperty(cssVariable, colors[index]);
        });
        
    }
}


