// Function to clear all values
function clearScreen() {
  document.getElementById("result").value = "";
}
// Function to display value
function display(value) {
  document.getElementById("result").value += value;
}

// Function evaluate the expression and return result
function calculate() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}