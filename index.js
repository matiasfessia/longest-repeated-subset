/*
 * Largest repeated subset.
 * Find the longest repeated subset of array elements in given array. For example,
 * for array('b','r','o','w','n','f','o','x','h','u','n','t','e','r','n','f','o','x','r','y','h','u','n')
 * the longest repeated subset will be array('n','f','o','x').
 */

const findLongestRepeatedSubset = require('./findLongestRepeatedSubset');
const inputData = ['b','r','o','w','n','f','o','x','h','u','n','t','e','r','n','f','o','x','r','y','h','u','n'];
const result = findLongestRepeatedSubset(inputData);
console.log('The largest repeated subset: ', result);
