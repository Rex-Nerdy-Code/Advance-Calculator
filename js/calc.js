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

decimalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    resultBar.textContent = "";
    expression += btn.textContent;
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
      if (expression.length > 0) {
        expression = expression.slice(0, expression.length - 1);
        outputBar.textContent = expression;
      }
    }

    if (btn.classList.contains("clear_function")) {
      expression = "";
      resultBar.textContent = "";
      outputBar.textContent = expression;
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

// TODO: Implement arrowBtns
// arrowBtns.forEach((btn) => {
//   let forward = 0;
//   let backwards = 0;
//   btn.addEventListener("click", (e) => {
//     if (btn.classList.contains("backward_direction")) {
//       backwards += 1;
//     }

//     if (btn.classList.contains("forward_direction")) {
//       forward += 1;
//     }
//   });
// });
