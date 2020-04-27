export class UIAnimations {
    constructor(colors) {
        this._colors = colors;
    }
    changeColor(box, index) {
        box.style.order = index;
    }

    animate(boxes) {

        boxes.forEach((box, index) => {
            setInterval(() => {
                this.changeColor(box, index++);
                if (index >= this._colors.length) index = 0;
            }, 1000);
        });

    }
}


