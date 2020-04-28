export function getBoxStyles() {
  const boxes = document.querySelectorAll('.boxesContainer__box');
  const gradientColors = [];
  const boxShadows = [];

  for (const box of boxes) {
    const compStyles = getComputedStyle(box);
    const gradientColor = compStyles.getPropertyValue('background-image');
    gradientColors.push(gradientColor);

    const boxShadow = compStyles.getPropertyValue('box-shadow');
    boxShadows.push(boxShadow);
  }

  return [gradientColors, boxShadows];
}