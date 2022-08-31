import { sumTop } from "./sumTop.js";

export const sumHourglass = (array) => {
  const allClockSums = [];

  for (let i = 0; i < array.length; i++) {
    const top = array[i];
    const medium = array[i + 1];
    const end = array[i + 2];

    for (let j = 0; j < top.length; j++) {
      const a = sumTop(top, j);
      const b = medium && medium[j + 1];
      const c = sumTop(end, j);

      const sumHourglas = a + b + c;
      const isNan = isNaN(sumHourglas);
      !isNan && allClockSums.push(sumHourglas);
    }
  }
  return Math.max(...allClockSums);
};
