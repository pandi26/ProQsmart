export function getHeatColor(value, min, max) {
  const v = Number(value);

  if (min === max) return "rgb(255,255,200)";

  const ratio = (v - min) / (max - min);
  const red = Math.floor(255 * ratio);
  const green = Math.floor(255 * (1 - ratio));

  return `rgb(${red}, ${green}, 120)`;
}
