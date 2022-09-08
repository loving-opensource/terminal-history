#!/usr/bin/env node

const readline = require("readline");
const fs = require("fs");
const os = require("os");
const path = require("path");

// CONSTANTS
const hashmap = {};
let numberToShow = 0;
// ------------------------- THIS IS FOR IMPORT HISTORY FROM TERMINAL -----------------
// Read the history file and parse the data

function readFile() {
  const homeDir = os.homedir();
  const historyPath = path.join(homeDir, ".bash_history");
  const possiblePath = [
    path.join(homeDir, ".bash_history"),
    path.join(homeDir, ".zsh_history"),
    path.join(homeDir, ".history"),
    path.join(homdir,".local/share/fish/fish_history"),
  ];

  // need to find the biggest history file

  let biggestHistorySize = 0;
  let biggestHistoryPath;

  for (const path of possiblePath) {
    if (!fs.existsSync(path)) {
      continue;
    }
    if (fs.statSync(path).size > biggestHistorySize) {
      biggestHistorySize = fs.statSync(path).size;
      // we want to use biggest history file
      biggestHistoryPath = path;
    }
  }
  const history = fs.readFileSync(biggestHistoryPath, "utf-8");
  const histories = history.split(os.EOL);
  return histories;
}

// ------------------ THIS IS THE FUNCTION FOR GETTING THE NUMBER OF USER HISTORY --------

function readInput() {
  const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    interface.question(
      "Please input desired top # of commands to display. -> ",
      (answer) => {
        interface.close();
        resolve(answer);
      }
    )
  );
}

async function getUserInput() {
  numberToShow = await readInput();
  // we should catch if the number is NOT a integer, and default to 5.
  if (numberToShow <= 0) {
    console.log("Defaulting to 5 commands.");
    numberToShow = 5;
  } else {
    console.log(
      `Wonderful! We will display the top ${numberToShow} command(s).`
    );
  }
  return numberToShow;
}

// ------------------------- THIS IS FUNCTION FOR GETTING HISTORIES ---------------------

async function getUrHistories() {
  const userNum = await getUserInput();
  const histories = await readFile();
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
  const requiredHis = sortedHash
    .slice(0, userNum)
    .reduce((a, [k, v]) => ({ ...a, [k]: v }), {});

  return [requiredHis, userNum];
}

// This is testing for exporting

getUrHistories().then((history) => {
  const [historyOutput, numberOfCommands] = history;
  console.log(
    `Here's your top ${numberOfCommands} history command(s): \n`,
    historyOutput
  );
});

module.exports = getUrHistories;
