const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("write to our home page");
	}

	if (req.url === "/about") {
		setTimeout(() => {
			for (let i = 0; i < 100; i++) {
				for (let j = 0; j < 100; j++) {
					console.log(`This is the ${i} of ${j}`);
				}
			}
		}, 1000);
		res.end("This is our story, This is the about page");
	}
});
server.listen(5000, () => {
	console.log("Server is listening on port 5000");
});
