

let currentInput = '';
let isDeg = true;

const display = document.getElementById('display');

function updateDisplay(val) {
  display.innerText = val || '0';
}

function press(val) {
  currentInput += val;
  updateDisplay(currentInput);
}

function clearDisplay() {
  currentInput = '';
  updateDisplay('');
}

function del() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput);
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay(currentInput);
  } catch {
    display.innerText = 'Error';
    currentInput = '';
  }
}

/* FUNCTIONS */
function sqrt() { currentInput = Math.sqrt(currentInput); updateDisplay(currentInput); }
function square() { currentInput = currentInput * currentInput; updateDisplay(currentInput); }
function cube() { currentInput = currentInput * currentInput * currentInput; updateDisplay(currentInput); }
function log10() { currentInput = Math.log10(currentInput); updateDisplay(currentInput); }
function ln() { currentInput = Math.log(currentInput); updateDisplay(currentInput); }
function exp() { currentInput = Math.exp(currentInput); updateDisplay(currentInput); }

function sinF() { currentInput = Math.sin(currentInput); updateDisplay(currentInput); }
function cosF() { currentInput = Math.cos(currentInput); updateDisplay(currentInput); }
function tanF() { currentInput = Math.tan(currentInput); updateDisplay(currentInput); }

function asinF() { currentInput = Math.asin(currentInput); updateDisplay(currentInput); }
function acosF() { currentInput = Math.acos(currentInput); updateDisplay(currentInput); }
function atanF() { currentInput = Math.atan(currentInput); updateDisplay(currentInput); }

function percent() { currentInput = currentInput / 100; updateDisplay(currentInput); }

function powXY() { currentInput += '**'; }

/* TOGGLE */
function toggleSci() {
  const sci = document.getElementById("sciPanel");
  const basic = document.querySelector(".buttons");

  sci.classList.toggle("active");
  basic.classList.toggle("hide");
}

/* DEG/RAD */
function toggleMode() {
  isDeg = !isDeg;
  document.getElementById("modeBtn").innerText = isDeg ? "DEG" : "RAD";
}