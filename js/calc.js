const decimalBtn = document.getElementsByClassName("decimal_btn");
const specialBtn = document.getElementsByClassName("special_btn");
const arrowBtn = document.getElementsByClassName("arrow_btn");
const funcBtn = document.getElementsByClassName("func_btn");
const outputBar = document.getElementById("output_bar");
const resultBar = document.getElementById("result_bar");

const decimalBtns = [...decimalBtn];
const specialBtns = [...specialBtn];
const arrowBtns = [...arrowBtn];
const funcBtns = [...funcBtn];
let expression = "";
let cursorPos = 0;

decimalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    resultBar.textContent = "";

    // Insert clicked button at current cursor position
    expression =
      expression.slice(0, cursorPos) +
      btn.textContent +
      expression.slice(cursorPos);
    cursorPos++;

    outputBar.textContent = expression;

    if (btn.classList.contains("exp")) {
      // TODO
      expression = expression.slice(0, expression.length - 3);
      alert("Exp button in progress");
    }

    if (btn.classList.contains("const")) {
      // TODO
      expression = expression.slice(0, expression.length - 3);
      alert("Button in progress");
    }

    if (btn.classList.contains("equal")) {
      expression = expression.slice(0, expression.length - 1);
      outputBar.textContent = expression;

      try {
        expression = filterExpression(expression);
        resultBar.textContent = math.evaluate(expression);
      } catch (error) {
        resultBar.textContent = "Invalid Expression";
      }

      expression = "";
      cursorPos = 0;
    }
  });
});

specialBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("shift_function")) {
      // Shift functionality isn't possible now.
      alert("Shift button in progress");
    }

    if (btn.classList.contains("menu_function")) {
      // Menu functionality isn't possible now.
      console.log("Menu");
      alert("Menu button in progress");
    }

    if (btn.classList.contains("delete_function")) {
      if (expression.length > 0 && cursorPos > 0) {
        // Delete character immediately before current cursor position
        expression =
          expression.slice(0, cursorPos - 1) + expression.slice(cursorPos);
        cursorPos--;
        outputBar.textContent = expression;
      }
    }

    if (btn.classList.contains("clear_function")) {
      expression = "";
      resultBar.textContent = "";
      outputBar.textContent = expression;
      cursorPos = 0;
    }
  });
});

const filterExpression = (expression) => {
  let idx = expression.indexOf("√");
  while (idx !== -1) {
    let num = "";
    let i = idx + 1;
    while (i < expression.length && /\d/.test(expression[i])) {
      num += expression[i];
      i++;
    }
    expression =
      expression.slice(0, idx) + `sqrt(${num})` + expression.slice(i);
    idx = expression.indexOf("√", i);
  }

  return expression;
};

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("backward_direction")) {
      if (cursorPos > 0) {
        cursorPos--;
      }
    } else if (btn.classList.contains("forward_direction")) {
      if (cursorPos < expression.length) {
        cursorPos++;
      }
    }

    outputBar.textContent =
      expression.slice(0, cursorPos) + "|" + expression.slice(cursorPos);
  });
});
