const fs = require("fs");
const hashmap = {};

// Read the history file and parse the data
const array = fs.readFileSync("history.txt").toString().split("\n");
for (historyCom in array) {
  const command = array[historyCom].split(" ");
  // we only want to store the command, ignore the first 2 elements
  const spliceC = command.slice(3).toString();

  // if the command is not in the hashmap, add it
  if (!(spliceC in hashmap)) {
    hashmap[spliceC] = 1;
  } else {
    // if the command is in the hashmap, increment the count
    hashmap[spliceC] += 1;
  }
}

// now, let's sort the hashmap by value
const sortedHash = Object.fromEntries(
  Object.entries(hashmap).sort(([, lowerValue], [, higherValue]) => higherValue - lowerValue  )
);

console.log(sortedHash);
for (const [key, value] of Object.entries(sortedHash)) {
  console.log(`${key}: ${value}`);
  if (value == max) {
    returnArray.push(key);
  }
}

console.log(returnArray);
