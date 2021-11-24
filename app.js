/** Union types */
function combine(input1, input2, resultConversion) {
    var result;
    // perform the runtime check if needed when using the union type.
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        // convert to number by adding a + sign
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine('29', 32, 'as-number');
var combineNames = combine('Aaron', 'Lin', 'as-text');
console.log(combineAges);
console.log(combineNames);
