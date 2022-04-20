const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
	res.json([
		{
			id: 1,
			task: "Buy a house",
		},
		{
			id: 2,
			task: "Go see Elon Musk",
		},
		{
			id: 3,
			task: "Say hi to Peterson",
		},
		{
			id: 4,
			task: "Eat Marshed Potatoes",
		},
		{
			id: 5,
			task: "Read about Abraham Lincoln",
		},
	]);
});

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});
