/*
 * Count how many matches are between a string and a pattern that both are passed through parameters
 * 
 * @param {string} str the string source.
 * @param {string} pattern the pattern that are going to look for.
 * @returns {number} returns the numbers.
 * 
 */
const countMatches = (str, pattern) => {
  return ((str || '').match(pattern) || []).length
}

/*
 * Given a array of string, It found the longest repeated subsets
 * 
 * @param {input} str the string source.
 * @param {string} pattern the pattern that are going to look for.
 * @returns {[]} returns an array of strings where each string represents an longest repeated subset.
 * 
 */
const findLongestRepeatedSubset = (input) => {
  const inputString = input.toString().replace(/,/g, ''); // just to keep the input as a string 

  let repeatedSubsets = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      let subset = inputString.substring(i, j); // this is the subset that we are going to find if it's repeated
      const matchesCount = countMatches(inputString, new RegExp(subset, 'g'));
      if (matchesCount > 1) {
        // repeated subset found
        repeatedSubsets = [...repeatedSubsets, subset];
      }
    }
  }
  
  // not found repeated subsets
  if (repeatedSubsets.length === 0) {
    return [];
  }

 
  // gets the max length of the subsets found
  let maxLength = repeatedSubsets[0].length;
  repeatedSubsets.forEach(subset => maxLength = Math.max(maxLength, subset.length));
 
  // gets only with the subsets that have the max length that we got above
  longests = [];
  repeatedSubsets.forEach(subset => {
    if (subset.length == maxLength && longests.indexOf(subset) === -1) {
      longests = [...longests, subset];
    }
  });
  
  return longests.map(subset => Array.from(subset));
}

module.exports = findLongestRepeatedSubset;