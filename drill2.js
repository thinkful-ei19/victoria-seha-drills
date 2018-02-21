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

if (word[0].charCodeAt() > 100) return ' ';
  return word[word[0].charCodeAt() - 96];


const decodeWords = function(words) {
  return words
    .split(' ')
    .map(decode)
    .join('');
};

console.log(decodeWords('craft block argon meter bells brown croon droop'));

const obj = {
	'a': 2,
	'b': 3,
	'c': 4,
	'd': 5
}

function message(str) {
  const words = str.split(' ');
  const mapped = words.map(word => {
    const firstLetter = word[0]
    const letterNum = obj[firstLetter]

    if (letterNum) {
      return word[letterNum - 1];
    } else {
      return ' ';
    }
  })
  return mapped.join('')
}


console.log(message('craft block argon meter bells brown croon droop'));
