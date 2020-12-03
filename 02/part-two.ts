const uniqueArray = (a: Array<any>) => [...new Set(a)];

function test (testData: string[]) {
  const [rule, password] = testData;

  const countMatch = rule.match(/(\d+)-(\d+)/);
  if (!countMatch || countMatch.length === 0) {
    return false;
  }
  const allowedPositions = uniqueArray(countMatch.map(n => parseInt(n, 10)));

  const letterMatch = rule.match(/([a-z])/);
  if (!letterMatch || letterMatch.length === 0) {
    return false;
  }
  const [, letter] = letterMatch;

  return allowedPositions.map(pos => password.substr(pos - 1, 1)).map(l => l === letter).filter(Boolean).length === 1;
}

const fileContent = await Deno.readTextFile('input.txt');
const rows = fileContent.split('\n');
const tests = rows.map(row => row.split(': '));
const validTests = tests.map(test).filter(Boolean);

console.log(validTests.length);
