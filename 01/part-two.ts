const fileContent = await Deno.readTextFile('input.txt');
const numbers = fileContent.split('\n').map((n: string) => parseInt(n, 10));

const entries = new Set();

for (const a of numbers) {
  for (const b of numbers) {
    for (const c of numbers) {
      if (a + b + c === 2020) {
        entries.add(a * b * c);
      }
    }
  }
}

console.log(entries);
