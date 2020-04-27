export class UIAnimations {
    constructor() {
        this.boxes = [...document.querySelectorAll('.boxesContainer__box')];
        this.colors = ['red', 'orange', 'yellow'];
    }
    changeColor(box, colorIndex) {
        box.style.backgroundColor = this.colors[colorIndex];
    }
    animate() {

        this.boxes.forEach(async (box, index) => {
            setInterval(() => {
                this.changeColor(box, index);
            }, 1000);
        });

    }
}
