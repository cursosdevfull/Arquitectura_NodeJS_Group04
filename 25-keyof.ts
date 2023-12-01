const user = {
  name: "Jorge",
  lastname: "Cardoza",
  age: 40,
};

function extractValue<T extends object, U extends keyof T>(
  value: T,
  property: U
) {
  return value[property];
}

console.log(extractValue(user, "name"));
