export const rotLeft = (a, d) => {
  const numbers = [...a];
  const rotations = d;

  for (let i = 0; i < rotations; i++) {
    const firstNumber = numbers.shift();
    numbers.push(firstNumber);
  }
  return numbers;
};
