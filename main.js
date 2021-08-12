function clearScreen(){
  document.getElementById('result').value = "";
};

function display(value) {
  document.getElementById('result').value += value;
}

function calc() {
  result.value = new Function("return " + result.value)();
}
