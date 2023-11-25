function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Max" }, { obj: 15 });
//console.log("mergeObj", mergeObj)

function merge2(objA: { name: string }, objB: { age: number }) {
  return Object.assign(objA, objB);
}

merge2({ name: "José Carlos" }, { age: 45 });

function merge3<T, U>(objA: { name: T }, objB: { age: U }) {
  return Object.assign(objA, objB);
}

console.log("merge3", merge3({ name: "Alfonso" }, { age: 50 }));

console.log("merge4", merge3<string, number>({ name: "Justo" }, { age: 45 }));
console.log("merge4", merge3<string, number>({ name: "Luis" }, { age: 45 }));

function merge4<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const result = merge4<
  { name: string; alias: string },
  { lastname: string; alias: string }
>({ name: "Luis", alias: "xxx" }, { lastname: "Pastrana", alias: "yyy" });
console.log(result);
