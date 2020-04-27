export class UIAnimations {
    constructor(colors) {
        this._colors = colors;
    }

    animate(boxes) {
        boxes.forEach((box, index) => {

            setInterval(() => {
                box.style.order = index++;
                if (index >= this._colors.length) index = 0;
            }, 500);
            
        });
    }
}


