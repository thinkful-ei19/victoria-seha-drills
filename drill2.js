const loaf = {
	flour: 300,
	water: 210,
}
console.log(loaf.flour);
console.log(loaf.water);


const loaf = {
	flour: 300,
	water: 210,

  hydration : function() {
	return (loaf.water / loaf.flour) * 100;
}
}
console.log(loaf.hydration());

const obj = {
	foo: 1,
	bar: 10,
	fum: 100,
	quux: 200,
	spam: 500
}

for (const prop in obj) {
	console.log(`obj.${prop} = ${obj[prop]}`)
}


const hobbit = { meals : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']}

console.log(hobbit.meals[3]);

