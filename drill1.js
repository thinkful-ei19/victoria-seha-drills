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
