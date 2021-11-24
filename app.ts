/** Union types */
function combine(
  input1: string | number,
  input2: string | number,
  resultConversion: string
) {
  let result
  // perform the runtime check if needed when using the union type.
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    // convert to number by adding a + sign
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}

const combineAges = combine('29', 32, 'as-number')
const combineNames = combine('Aaron', 'Lin', 'as-text')
console.log(combineAges)
console.log(combineNames)
