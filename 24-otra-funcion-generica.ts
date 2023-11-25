interface Lengthy {
  length: number;
}

function countElements<U, T extends Array<U>>(arr: T) {
  let description;
  if (arr.length === 1) {
    description = "Tiene 1 elemento";
  } else {
    description = `Tiene ${arr.length} elementos`;
  }

  return [arr, description];
}

console.log(
  "cantidad de elementos",
  countElements<string, Array<string>>(["carlos", "enrique", "roberto"])
);
console.log(
  "cantidad de elementos",
  countElements<number, Array<number>>([50, 30, 90])
);
