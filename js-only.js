const button = document.querySelector('button');
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');

function add(num1, num2) {
  return num1 + num2;
  /*
   * without typescript, we can add the logic to check the typeof operands, to avoid concatenation
   * if (typeof num1 === 'number' && typeof num2 === 'number') {
   *   return num1 + num2
   * } else {
   *   return +num1 + +num2
   * }
   * // we hope we can't pass the string to add instead of doing the type casting
   */
}

button.addEventListener('click', () => {
  // In JS when we access the value of an input element, it is always a string
  console.log(add(input1.value, input2.value));
});
