const path = require("path");

console.log(path.sep); // >>> /
console.log(path.join("desktop", "folders", "work"));
console.log(path.dirname("first.txt"));
console.log(path.basename("path_demo"));
console.log(path.extname(path.basename("path_demo.js")));
