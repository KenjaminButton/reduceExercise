// extractValue
// Write a function called extractValue which accepts an array of objects and
// a key and returns a new array with the value of each object at the key.
function extractValue(arr, key) {
  return arr.reduce(function(accumulator, nextPerson) {
    accumulator.push(nextPerson[key])
    return accumulator;
  }, [])
}

console.log('\nExtract Value:')
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
console.log(extractValue(arr,'name')) // ['Elie', 'Tim', 'Matt', 'Colt']

// Vowel Count
// Write a function called vowelCount which accepts a string and returns an object
// with the keys as the vowel and the values as the number of times the vowel appears
// in the string. This function should be case insensitive so a lowercase letter
// and uppercase letter should count
function vowelCount(str) {
  const strArr = str.split('');
  const vowels = 'aeiouAEIOU';
  return strArr.reduce(function(accumulator, char) {
    if (vowels.includes(char)) {
      const lowerCaseChar = char.toLowerCase();
      if (accumulator[lowerCaseChar] === undefined) {
        accumulator[lowerCaseChar] = 1;
      } else {
        accumulator[lowerCaseChar] += 1;
      }
    }
    return accumulator;
  }, {})
}

console.log('\nVowel Count:')
console.log(vowelCount('Elie')) // {e:2,i:1};
console.log(vowelCount('Tim')) // {i:1};
console.log(vowelCount('Matt')) // {a:1})
console.log(vowelCount('hmmm')) // {};
console.log(vowelCount('I Am awesome and so are you')) // {i: 1, a: 4, e: 3, o: 3, u: 1};

// addKeyAndValue
// Write a function called addKeyAndValue which accepts an array of objects and
// returns the array of objects passed to it with each object now including the
// key and value passed to the function.

function addKeyAndValue(arr, key, val) {
  return arr.reduce(function(accumulator, item) {
    accumulator.push({[key]: val, name: item.name})
    return accumulator;
  }, [])
}

console.log('\nAddKeyVal:')
const arr8 = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
console.log(addKeyAndValue(arr, 'title', 'Instructor'))

// [
//   {title: 'Instructor', name: 'Elie'},
//   {title: 'Instructor', name: 'Tim'},
//   {title: 'Instructor', name: 'Matt'},
//   {title: 'Instructor', name: 'Colt'}
// ]


// partition
// Write a function called partition which accepts an array and a callback and returns
// an array with two arrays inside of it. The partition function should run the callback
// function on each value in the array and if the result of the callback function at that
// specific value is true, the value should be placed in the first subarray. If the result
// of the callback function at that specific value is false, the value should be placed
// in the second subarray.

function isEven(val){
  return val % 2 === 0;
}

function partition(arr, callback) {
  const failData = [];
  const passData = arr.reduce(function(accumulator, nextNum) {
    if (callback(nextNum) === true) {
      accumulator.push(nextNum);
    } else {
      failData.push(nextNum)
    }
    return accumulator;
  }, [])
  return [passData, failData]
}

console.log('\nPartition:')
const arr24 = [1,2,3,4,5,6,7,8];
console.log(partition(arr24, isEven)) // [[2,4,6,8], [1,3,5,7]];

function isLongerThanThreeCharacters(val){
  return val.length > 3;
}

const names = ['Elie', 'Colt', 'Tim', 'Matt'];

console.log(partition(names, isLongerThanThreeCharacters)) // [['Elie', 'Colt', 'Matt'], ['Tim']]