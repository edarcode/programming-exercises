import { sumHourglass } from "./sumHourglass.js";

// dada una matriz 2d 6X6 debe simular los trazos de un reloj de arena, es decir, algo parecido a una X,
// pero incluyendo el número superior e inferior de su intercepción. cada valor expuesto en el array genera un reloj,
// si y solo si puede dibujar el reloj entero
// el primer reloj de arena del array 2 sería: 1+1+1 1+1+1 (simulamos la X), +1(top) + 1(bottom)  = 8 el primer reloj de arena.
// al final return el reloj con la suma mas alta

const array1 = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
const array2 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]; // 19
console.log(sumHourglass(array1)); // 28
console.log(sumHourglass(array2)); // 19
