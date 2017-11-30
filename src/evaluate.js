let container = document.getElementById('container');
let keyMap = {
  91: false,
  66: false
}
container.addEventListener('keydown', e => {
  if(e.keyCode in keyMap) {
    keyMap[e.keyCode] = true;
    if(keyMap[91] && keyMap[66]) {
      e.preventDefault();      
      runProgram();
    }
  }
});

container.addEventListener('keyup', e => {    
  if(e.keyCode in keyMap) {
    keyMap[e.keyCode] = false;
  }
});

function runProgram() {
  let code = container.innerText.split(/\r?\n/)[1];    
  let output = new Function('return ' + code)();
  document.getElementById('console').innerText = output;
}