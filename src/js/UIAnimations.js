export class UIAnimations {
    constructor(colors) {
        this._colors = colors;
    }
    changeColor(box, colorIndex) {
        box.style.backgroundColor = this._colors[colorIndex];
    }

    animate(boxes) {
        boxes.forEach((box, index) => {
            setInterval(() => {
                this.changeColor(box, index++);
                if (index >= this._colors.length) index = 0;
            }, 500);
        });

    }
}


