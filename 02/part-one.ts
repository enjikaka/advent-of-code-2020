function test (testData: string[]) {
  const [rule, password] = testData;

  const countMatch = rule.match(/(\d+)-(\d+)/);
  if (!countMatch || countMatch.length === 0) {
    return false;
  }
  const [, minCount, maxCount] = countMatch.map(n => parseInt(n, 10));

  const letterMatch = rule.match(/([a-z])/);
  if (!letterMatch || letterMatch.length === 0) {
    return false;
  }
  const [, letter] = letterMatch;

  const occurancesOfLetter = password.split('').filter(x => x === letter).length;

  return occurancesOfLetter >= minCount && occurancesOfLetter <= maxCount;
}

const fileContent = await Deno.readTextFile('input.txt');
const rows = fileContent.split('\n');
const tests = rows.map(row => row.split(': '));
const validTests = tests.map(test).filter(Boolean);

console.log(validTests.length);
