let sequence = [];
let count = 1;
for (let i = 0; i < 11; i++) {
  for (let j = 0; j < count; j++) {
    sequence.push(i+1);
  }
  count++;
}
console.log(sequence[56]);


// function getSequenceDigit(i) {
//     let sequence = [1];
//     let count = 1; // number of digits up to current term
//     let term = 1; // current term
//     while (count < i) {
//       term++;
//       count += term;
//       sequence.push(i+1);
//     }
//     let diff = count - i; // number of digits to subtract to get to i-th digit in term
//     return term - diff;
//     return sequence;
//   }
  
//   console.log(sequence);
//   console.log(getSequenceDigit(2));


// function getIthNumber(i) {
//     let count = 0;
//     let term = 1;
//     while (i > count + term) {
//       count += term;
//       term++;
//     }
//     return term - (i - count - 1);
//     console.log(term - (i - count - 1));
//   }

//   getIthNumber(56)

// function getIthDigit(i) {
//     let count = 0;
//     let term = 1;
//     while (i > count + term) {
//       count += term;
//       term++;
//     }
//     let digitIndex = i - count - 1;
//     let numRepeats = term - 1;
//     let currentNum = term;
//     for (let j = 0; j < digitIndex; j++) {
//       if (numRepeats == 0) {
//         numRepeats = currentNum;
//         currentNum++;
//       }
//       numRepeats--;
//     }
//     return currentNum;
//   }


// var stdin = process.openStdin();
// console.log("Enter an index:");
// stdin.addListener("data", function(d){
//   let sequence = [];
//   let count = 1;
//   for (let i = 0; i < 11; i++) {
//     for (let j = 0; j < count; j++) {
//       sequence.push(i+1);
//     }
//     count++;
//   }
//   let index = parseInt(d.toString().trim());
//   console.log(sequence[index-1]);
// });


// let str = "10101110100010111111111101000000000000001101";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "1") {
//     count++;
//   }
// }
// let percentage = (count / str.length) * 100;
// console.log("Number of 1s: " + count);
// console.log("Percentage of 1s: " + percentage.toFixed(2) + "%");
// if (percentage > 60) {
//   console.log("Yes");
// }else{
//     console.log("No")
// }






// function minSubsequenceLength(seq, S) {
//     let left = 0;
//     let right = 0;
//     let sum = 0;
//     let minLength = Infinity;
//     while (right < seq.length) {
//       sum += seq[right];
//       while (sum >= S) {
//         minLength = Math.min(minLength, right - left + 1);
//         sum -= seq[left];
//         left++;
//       }
//       right++;
//     }
//     return minLength === Infinity ? 0 : minLength;
//   }
  
//   // Example usage:
//   console.log(minSubsequenceLength([5, 1, 3, 5, 10, 7, 4, 9, 2, 8], 15)); // 2
//   console.log(minSubsequenceLength([5, 1, 3, 5, 10, 7, 4, 9, 2, 8], 20)); // 3
//   console.log(minSubsequenceLength([1, 2, 3, 4, 5], 16)); // 0
  
