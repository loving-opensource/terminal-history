const fs = require("fs");
const hashmap = {};
const userNum = 0;

// Read the history file and parse the data
const array = fs.readFileSync("kaiHistory.txt").toString().split("\n");

function getUrHistories(history) {
  for (historyCom in history) {
    const command = history[historyCom].split(" ").toString();
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

  console.log(requiredHis);
}

// This is testing for exporting
const gethistory = getUrHistories(array);
console.log(gethistory);

module.exports = getUrHistories;

// notes:
// const command = array[historyCom].split(" ");
// // we only want to store the command, ignore the first 2 elements
// const spliceC = command.slice(3).toString();

// --------- How many number of histories ---------

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
