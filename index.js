const fs = require("fs");
const hashmap = {};

// ------------------------- THIS IS FOR IMPORT HISTORY FROM TERMINAL -----------------
// Read the history file and parse the data
const array = fs.readFileSync("kaiHistory.txt").toString().split("\n");

// ------------------ THIS IS THE FUNCTION FOR GETTING THE NUMBER OF USER HISTORY --------
const readline = require("readline");

async function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

const userNum = askQuestion("How many histories do you want? :");

console.log(userNum);

// ------------------------- THIS IS FUNCTION FOR GETTING HISTORIES ---------------------

function getUrHistories(histories, userNum) {
  for (historyCom in histories) {
    const command = histories[historyCom].split(" ").toString();
    // we only want to store the command, ignore the first 2 elements
    cleanCommand = command.replace(/[, ]+/g, " ").replace(/\d+/g, "").trim();

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

  const requiredHis = sortedHash
    .slice(0, userNum)
    .reduce((a, [k, v]) => ({ ...a, [k]: v }), {});

  return requiredHis;
}

// This is testing for exporting
const gethistory = getUrHistories(array, userNum);
console.log(gethistory);

module.exports = getUrHistories;

// ---------------------------- NOTES --------------------------------------
// const spliceC = command.slice(4).toString();
// const command = array[historyCom].split(" ");
// // we only want to store the command, ignore the first 2 elements
// const spliceC = command.slice(3).toString();

// >> How many number of histories
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

// --------- user input Memo -------------

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
