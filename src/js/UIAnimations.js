export class UIAnimations {
    constructor() {
        this.boxes = [...document.querySelectorAll('.boxesContainer__box')];
        this.colors = ['#c70039', '#ff5733', '#ffc300'];
    }
    changeColor(box, colorIndex) {
        box.style.backgroundColor = this.colors[colorIndex];
    }
    animate() {

        this.boxes.forEach((box, index) => {
            setInterval(() => {
                this.changeColor(box, index++);
                if (index >= this.colors.length) index = 0;
            }, 2000);
        });

    }
}
