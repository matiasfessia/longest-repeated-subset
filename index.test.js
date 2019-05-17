const findLongestRepeatedSubset = require('./findLongestRepeatedSubset');

test(`it should match with the original input of the exercise`, () => {
  const input = ['b','r','o','w','n','f','o','x','h','u','n','t','e','r','n','f','o','x','r','y','h','u','n'];
  expect(findLongestRepeatedSubset(input)).toStrictEqual([['n', 'f', 'o', 'x']]);
});

test(`it should match when there are more than one longest subset`, () => {
  const input = ['b','r','o','w','n','f','o','x','h','u','n','y', 't','e','r','n','f','o','x','r','y','h','u','n','y'];
  expect(findLongestRepeatedSubset(input)).toStrictEqual([['n', 'f', 'o', 'x'], ['h', 'u', 'n', 'y']]);
});

test(`it should match for a few repeated subsets with length in one`, () => {
  const input = ['b','r','o','w','n','h','t','e','r','n','f','o','x','r','y','h','u','n','y'];
  expect(findLongestRepeatedSubset(input)).toStrictEqual([ ['r'], ['o'], ['n'], ['h'], ['y'] ]);
});

test(`it should return an empty array when not repeated subset found`, () => {
  const input = ['b','r','o','w','n','h','t','e'];
  expect(findLongestRepeatedSubset(input)).toStrictEqual([]);
});