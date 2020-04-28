export function getComputedColors() {
  const colors = [];
  const boxes = document.querySelectorAll('.boxesContainer__box');

  for (const box of boxes) {
    const compStyles = getComputedStyle(box);
    const color = compStyles.getPropertyValue('background-image');
    colors.push(color);
  }

  return colors;
}