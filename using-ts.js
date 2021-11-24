var button2 = document.querySelector('button');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
// we add : number to indicate that we accept arguments of type number
function addTwoNum(num1, num2) {
    return num1 + num2;
}
button2.addEventListener('click', function () {
    console.log(addTwoNum(+num1.value, +num2.value));
    console.log('Hi');
});
