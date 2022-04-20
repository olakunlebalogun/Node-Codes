const fs = require("fs");
console.log("start");

const first = fs.readFileSync("./content/first.txt", "utf8");
const second = fs.readFileSync("./content/second.txt", "utf8");

fs.writeFileSync(
	"./content/result-sync.txt",
	`Here is the result : ${first}, ${second}`,
	{ flag: "a" }
);

// practice with all file systems methods...

console.log("done with this task");
console.log("starting the next one");
