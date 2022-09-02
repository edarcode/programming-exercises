import { sumTop } from "./sumTop.js";

export const sumHourglass = (arr) => {
  const allClockSums = [];

  for (let i = 0; i < arr.length; i++) {
    const top = arr[i];
    const medium = arr[i + 1];
    const end = arr[i + 2];
    if (top === undefined || medium === undefined || end === undefined)
      continue;
    for (let j = 0; j < top.length; j++) {
      const a = sumTop(top, j);
      const b = medium[j + 1];
      const c = sumTop(end, j);
      if (a === undefined || b === undefined || c === undefined) continue;
      allClockSums.push(a + b + c);
    }
  }
  return Math.max(...allClockSums);
};
