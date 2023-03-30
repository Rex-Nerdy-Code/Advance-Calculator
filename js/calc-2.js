funcBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("variable_square")) {
      expression += "^";
      outputBar.textContent = expression;
    }

    if (btn.classList.contains("square")) {
      expression += "^2";
      outputBar.textContent = expression;
    }

    if (btn.classList.contains("root")) {
      expression += "\u221a";
      outputBar.textContent = expression;
    }

    if (btn.classList.contains("pi")) {
      expression += "*3.1415926535897932384626";
      outputBar.textContent = expression;
    }

    if (btn.classList.contains("sin")) {
      expression += "sin(";
      outputBar.textContent = expression;
    }

    if (btn.classList.contains("cos")) {
      expression += "cos(";
      outputBar.textContent = expression;
    }

    if (btn.classList.contains("tan")) {
      expression += "tan(";
      outputBar.textContent = expression;
    }
  });
});
