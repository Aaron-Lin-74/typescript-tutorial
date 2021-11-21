const button2 = document.querySelector('button')
const num1 = document.getElementById('num1')! as HTMLInputElement
const num2 = document.getElementById('num2')! as HTMLInputElement

// we add : number to indicate that we accept arguments of type number
function addTwoNum(num1: number, num2: number) {
  return num1 + num2
}

button2.addEventListener('click', () => {
  console.log(addTwoNum(+num1.value, +num2.value))
})
