export const sumTop = (array, index) => {
  if (!array) return null;
  const init = array[index];
  const next = array[index + 1];
  const nextNext = array[index + 2];
  return init + next + nextNext;
};
