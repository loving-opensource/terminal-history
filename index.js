const fs = require("fs");
const hashmap = {};
const userNum = 0;

// Read the history file and parse the data
const array = fs.readFileSync("kaiHistory.txt").toString().split("\n");

for (historyCom in array) {
  const command = array[historyCom].split(" ").toString();
  // we only want to store the command, ignore the first 2 elements
  cleanCommand = command.replace(/[, ]+/g, " ").replace(/\d+/g, "").trim();

  // const spliceC = command.slice(4).toString();

  // if the command is not in the hashmap, add it
  if (!(cleanCommand in hashmap)) {
    hashmap[cleanCommand] = 1;
  } else {
    // if the command is in the hashmap, increment the count
    hashmap[cleanCommand] += 1;
  }
}

// now, let's sort the hashmap by value
const sortedHash = Object.entries(hashmap).sort(
  ([, lowerValue], [, higherValue]) => higherValue - lowerValue
);

// console.log(sortedHash);

// We need to ask user How many top histories do you want?
// Connecting to terminal from VScode
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// Ask question to user then, Process getting histories
// const nums = readline.question("How many histories do you want? :", (num) => {
//   readline.close();
// });

const requiredHis = sortedHash
  .slice(0, 5)
  .reduce((a, [k, v]) => ({ ...a, [k]: v }), {});
// console.log(nums);

console.log(requiredHis);

// console.log(userNum);

// console.log("this is user's choice num:", userNum);
// for (const [key, value] of Object.entries(sortedHash)) {
//   // console.log(`${key}: ${value}`);
//   if (howMany != null) {
//     key[num];
//   }
// }

// for (const [key, value] of Object.entries(sortedHash)) {
//   console.log(`${key}: ${value}`);
// }

// notes:
// const command = array[historyCom].split(" ");
// // we only want to store the command, ignore the first 2 elements
// const spliceC = command.slice(3).toString();
