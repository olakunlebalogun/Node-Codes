const myObj = {
	name: "olakunle",
	age: 18,
	score: 100,
	nationality: "california",
};
function getValues(obj) {
	obj.forEach((nameValue, name) => {
		// const { name, nameValue } = value;
		console.log(`${name} ${nameValue}`);
	});
}

getValues(myObj);
