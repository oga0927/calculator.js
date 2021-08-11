function clearScreen(){
  console.log('aaa');
  document.getElementById('result').value = "";
};

function display(value) {
  document.getElementById('result').value += value;
}
