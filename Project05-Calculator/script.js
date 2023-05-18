// const userInput = document.getElementById('user_input')
// let expression = ''

// function press(num){
//   expression+=num
//   userInput.value=expression
// }

const userInput = document.getElementById('user_input')

function press(num) {
  userInput.value += num;
  console.log("Press function: ",userInput.value)
}

// Function to erase the input
function erase() {
  userInput.value = "";
}

function equal() {
  let expression = userInput.value;
  console.log("Equal Function:", expression)
  let result = eval(expression);
  userInput.value = result;
 
}