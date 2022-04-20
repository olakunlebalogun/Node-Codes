const http = require("http");

const server = http.createServer((req, res) => {
	console.log("User hits the server");
	const url = req.url;
	if (url === "/") {
		res.writeHead(200, { "content-type": "text/html" });
		res.write("<h1>This is the home page</h1>");
		res.end();
	} else if (url === "/about") {
		res.writeHead(200, { "content-type": "text/html" });
		res.write("<h1>This is the About page</h1>");
		res.end();
	} else if (url === "**") {
		res.writeHead(200, { "content-type": "text/html" });
		res.write("<h1>This is an Error page</h1>");
		res.end();
	}
});

server.listen(4000);
