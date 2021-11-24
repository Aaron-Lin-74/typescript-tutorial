/** We can add type to the object, it is in key-type pair, and looks like DB schema*/
var person = {
    name: 'aaron',
    age: 32
};
console.log(person.name);
/** If we access not existing property, ts will warn us */
// console.log(person.nickname)
