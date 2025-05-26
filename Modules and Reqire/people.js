const people = [
  "Tayyab",
  "Ali",
  "Ahmed",
  "Hassan",
  "Usman",
  "Awais",
  "Bilal",
  "Fahad",
  "Hammad",
  "Hamza",
];

const ages = [25, 30, 22, 28, 26, 24, 27, 29, 31, 23];

// if i want to import this file into module.js, I can do it like this
// module.exports = people;
// module.exports = ages;
module.exports = {
  //   people: people,
  //   ages: ages,
  people,
  ages,
};
