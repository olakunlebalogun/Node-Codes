const url = require("url");

// const myUrl = new URL("http://example.com:3000?age=23&name=kunle");

// console.log(
// 	myUrl.searchParams.forEach((name, value) => {
// 		console.log(`${name} : ${value}`);
// 	})
// );

// const newFunc = async () => {
// 	console.log("first");
// 	const first = await setTimeout(() => {
// 		console.log("second");
// 	}, 0);
// 	console.log("third");
// };
// newFunc();

const newProm = new Promise((resolve, reject) => {
	resolve(console.log("first"));
}).then((setTimeout) => {
	console.log("second");
}, 0);

console.log(newProm);
