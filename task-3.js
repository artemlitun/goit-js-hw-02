// const findLongestWord = function (string) {
//   const stringArr = string.split(" ");
//   let wordLength = 0;
//   let longestWord;
//   for (let i = 0; i < stringArr.length; i += 1) {
//     wordLength = stringArr[1].length;

//     if (stringArr[i].length > wordLength) {
//       longestWord = stringArr[i];

//       return longestWord;
//     }
//   }
// };

const findLongestWord = function (string) {
  const stringArr = string.split(" ");
  let longestWord = "a";

  for (let word in stringArr) {
    if (stringArr[word].split("").length > longestWord.split("").length) {
      longestWord = stringArr[word];
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'
