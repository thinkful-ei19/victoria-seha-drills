function createMyObject(){
	return{
	foo : 'bar',
	answerToUniverse : 42,
	'olly olly' : 'oxen free',
	sayHello : function(){
	return 'hello';
	}

	}
}
console.log(createMyObject);

function updateObject(obj) {
	obj.foo = 'foo';
	obj.bar = 'bar';
	obj.bizz = 'bizz';
	obj.bang = 'bang';
	return obj;
}
console.log(updateObject());

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function() {
    	return this.firstName + ' ' + this.lastName;
    },
  };
  return person;
}
console.log(personMaker());

function keyDeleter(obj) {
  delete obj.foo;
	delete obj.bar;
	return obj;
}

var sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};
console.log(keyDeleter(sampleObj))

function makeStudentReport(data){
	const outcome = [];
	for(let i = 0; i < data.length; i++){
		const item = data[i];
		outcome.push(`${item.name}: ${item.grade}`);
	}
    return outcome;
}
var data = {name: 'Johnny Robot', grade: 'C'};
console.log(makeStudentReport(data));



const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
 const result = [];
 for(i = 0; i < students.length; i++){
	 result.push({
		 name: students[i].name,
		 status: 'In Summer Schooll',
		 course: students[i].course,
		 });
	 }
	 return result;
}
console.log(enrollInSummerSchool(studentData))

  function findById(items, idNum){
  for(let i = 0; i < items.length; i++){
    if(items[i].id === idNum){
      return items[i];
    }
  }
}
const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];
findById(data, 2);




const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
	if (Object.keys(object).length !==  expectedKeys.length){
		return false;
	}
	for(let i = 0; i < expectedKeys.length; i++){
	  if(!Object.keys(object).includes(expectedKeys[i])){
	    return false
	   }
		}
	return true
};
