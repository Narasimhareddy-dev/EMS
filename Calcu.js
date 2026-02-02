let display = document.getElementById("display");

function appendValue(value) {
  display.value = display.value + value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  if (display.value !== "") {
    display.value = eval(display.value);
  }
}

