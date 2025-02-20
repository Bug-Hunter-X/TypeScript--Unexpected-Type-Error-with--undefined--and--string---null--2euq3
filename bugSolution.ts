function greet(name: string | null | undefined): string {
  if (name === null || name === undefined) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Works as expected
console.log(greet(undefined)); // Works as expected

//Alternative solution:

function greet2(name: string | null): string {
  if (typeof name === 'undefined' || name === null) {
      return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet2(null));
console.log(greet2(undefined));