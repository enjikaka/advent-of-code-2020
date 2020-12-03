const fileContent = await Deno.readTextFile('input.txt');

const rows = fileContent.split('\n');
const rowCount = rows.length;
const columnCount = rows[0].split('').length;
const columnsNeeded = rowCount / columnCount;

const TREE = '#';

function treesHit (rightStep: number, downStep: number) {
  const finalRows = rows.map(row => row.repeat(Math.ceil(columnsNeeded) * rightStep));
  const finalColumnCount = finalRows[0].split('').length;

  let x = 0;
  let trees = 0;

  for (let y = 0; y < rowCount; y += downStep) {
    const terrain = finalRows[y].split('')[x];

    if (terrain === TREE) {
      trees++;
    }

    x += rightStep;
  }

  return trees;
}

console.log(
  treesHit(1, 1) *
  treesHit(3, 1) *
  treesHit(5, 1) *
  treesHit(7, 1) *
  treesHit(1, 2)
);
