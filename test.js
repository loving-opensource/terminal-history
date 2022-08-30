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
