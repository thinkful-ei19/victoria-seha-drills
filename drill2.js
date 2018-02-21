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


const arr = [
	{name: 'Seha', job: 'Developer'},
	{name: 'Victoria', job: 'Web Developer'},
	{name: 'Rich', job: 'Teacher'}
]

for (let i = 0; i < arr.length; i++){
	console.log(arr[i])
}


const arr = [
	{name: 'Seha', job: 'Developer', boss: 'Fred'},
	{name: 'Victoria', job: 'Web Developer', boss: 'Mike'},
	{name: 'Rich', job: 'Teacher'}
];

for (let i = 0; i < arr.length; i++){
	if(arr[i].boss !== undefined){
	  console.log(`${arr[i].name} reports to ${arr[i].boss}.`);
}
else{
    console.log(`${arr[i].name} doesn't report to anybody.`);
}
}
