// Global Objects

// This show global objects in console
// console.log(global);

// This show absolute path of the current directory
// console.log("Currently in", __dirname);

// This shows the absolute path of the current file
// console.log("Current file is", __filename);

// Shows environment variables
// console.log(process.env);

// Node version
// console.log(process.version);

// setTimeout is a global function that executes a function after a specified delay
// setTimeout(() => {
//   console.log("This is a timeout function");
// }, 2000);

// setInterval is a global function that executes a function repeatedly at specified intervals
// (t = 0s)      → (nothing yet)
// (t = 3s)      → After every 3 seconds this will run
// (t = 6s)      → After every 3 seconds this will run
// (t = 9s)      → After every 3 seconds this will run
// (t = 10s)     → Clearing the interval
// (t = 12s+)    → Nothing (interval cleared)
const interval = setInterval(() => {
  console.log("After every 3 seconds this will run");
}, 3000);
setTimeout(() => {
  console.log("Clearing the interval");
  clearInterval(interval);
}, 10000);
