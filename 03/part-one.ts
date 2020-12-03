const fileContent = await Deno.readTextFile('input.txt');

const rows = fileContent.split('\n');
const rowCount = rows.length;
const columnCount = rows[0].split('').length;
const columnsNeeded = rowCount / columnCount;

const RIGHT_STEP = 3;
const TREE = '#';
let trees = 0;
let x = 0;

const completeRows = rows.map(row => row.repeat(Math.ceil(columnsNeeded) * RIGHT_STEP));

for (const y of completeRows) {
  const terrain = y.split('')[x];

  if (terrain === TREE) {
    trees++;
  }

  x += RIGHT_STEP;
}

console.log(trees);
