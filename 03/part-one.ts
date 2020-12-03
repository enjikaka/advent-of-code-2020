const fileContent = await Deno.readTextFile('input.txt');

const rows = fileContent.split('\n');
const rowCount = rows.length;
const columnCount = rows[0].split('').length;
const columnsNeeded = rowCount / columnCount;

const RIGHT_STEP = 3;
const TREE = '#';
let trees = 0;
let y = 0;

const completeRows = rows.map(row => row.repeat(Math.ceil(columnsNeeded) * RIGHT_STEP));

for (const x of completeRows) {
  const terrain = x.split('')[y];

  if (terrain === TREE) {
    trees++;
  }

  y += RIGHT_STEP;
}

console.log(trees);
