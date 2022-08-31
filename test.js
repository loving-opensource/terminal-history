let abilities = {
  technical: {
    Corners: 12,
    Crossing: 12,
    Dribbling: 20,
    Finishing: 14,
    "First Touch": 17,
    "Free Kick": 13,
    Heading: 7,
    "Long Shots": 11,
    "Long Throws": 5,
    Marking: 3,
    Passing: 15,
    "Penalty Taking": 19,
    Tackling: 4,
    Technique: 18,
  },
  mental: {
    Aggression: 8,
    Anticipation: 12,
    Bravery: 17,
    Composure: 15,
    Concentration: 13,
    Decisions: 16,
    Determination: 15,
    Flair: 18,
    Leadership: 6,
    "Off The Ball": 14,
    Positioning: 7,
    Teamwork: 9,
    Vision: 16,
    "Work Rate": 12,
  },
  physical: {
    Acceleration: 17,
    Agility: 20,
    Balance: 16,
    "Jumping Reach": 8,
    "Natural Fitness": 16,
    Pace: 16,
    Stamina: 17,
    Strength: 11,
  },
};

const sortedValues = Object.values(abilities)
  .flatMap(Object.entries)
  .sort(([, a], [, b]) => b - a);
console.log(sortedValues);
const fiveHighest = sortedValues
  .slice(0, 5)
  .reduce((a, [k, v]) => ({ ...a, [k]: v }), {});
const fiveLowest = sortedValues
  .slice(-5)
  .reduce((a, [k, v]) => ({ ...a, [k]: v }), {});

console.log(fiveHighest);
console.log(fiveLowest);

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

// ## TO DO:

// - Protect main branch
// - explore regex to replace splicing
