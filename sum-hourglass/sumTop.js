export const sumTop = (arr, index) => {
  const init = arr[index];
  const next = arr[index + 1];
  const nextNext = arr[index + 2];
  if (init === undefined || next === undefined || nextNext === undefined)
    return;
  return init + next + nextNext;
};
