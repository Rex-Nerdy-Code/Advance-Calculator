const decimalBtn = document.getElementsByClassName("decimal_btn");
const specialBtn = document.getElementsByClassName("special_btn");
const arrowBtn = document.getElementsByClassName("arrow_btn");
const outputBar = document.getElementById("output_bar");
const resultBar = document.getElementById("result_bar");

const decimalBtns = [...decimalBtn];
const specialBtns = [...specialBtn];
const arrowBtns = [...arrowBtn];
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

//screen
var $screen = document.getElementsByClassName("screen");
var $screen1 = document.getElementsByClassName("screen1");

//function values
var $shift_function = document.getElementsByClassName("shift_function");
var $menu_function = document.getElementsByClassName("menu_function");

//mathematical functions
var $sin_angle = document.getElementsByClassName("sin");
var $cos_angle = document.getElementsByClassName("cos");
var $tan_angle = document.getElementsByClassName("tan");
var $pi_value = document.getElementsByClassName("pi");
var $square_value = document.getElementsByClassName("square");
var $inverse_value = document.getElementsByClassName("inverse");
var $square_root = document.getElementsByClassName("root");
var $power_value = document.getElementsByClassName("variable_square");
var $logarithm = document.getElementsByClassName("log");
var $natural_log = document.getElementsByClassName("ln");
var $euler = document.getElementsByClassName("e");
var $exp = document.getElementsByClassName("exp");
var $integration = document.getElementsByClassName("integration");
var $variable_x = document.getElementsByClassName("x");

//functions operations
$shift_function[0].addEventListener("click", () => {
  let text = document.createElement("p");
  let div = document.createElement("div");
  text.innerHTML = "<p>modal mode<p>";
  //alert(text.textContent);
  let maintext = text.textContent;
  // alert(`maintext is ${maintext}`);
  //maintext.style.fontSize = "43px";
  let ShiftScreen = document.getElementsByClassName("screen1");
  div.append(maintext);
  div.style.fontSize = "32px";
  ShiftScreen[0].append(div);
  ShiftScreen[0].style.backgroundColor = "blue";
  ShiftScreen[0].style.color = "red";
  ShiftScreen[0].style.fontSize = "22px";
});

$pi_value[0].addEventListener("click", () => {
  let $pi = 22 / 7;
  $screen[0].value = `${$pi}`;
});

$sin_angle[0].addEventListener("click", () => {
  let $angle_degree = Math.sin(Math.PI * ($screen[0].value / 180));
  if ($screen[0].value == 30) {
    $screen[0].value = `sin(${$screen[0].value}) = ${$angle_degree.toFixed(1)}`;
  } else {
    $screen[0].value = `sin(${$screen[0].value}) = ${$angle_degree}`;
  }
});
$cos_angle[0].addEventListener("click", () => {
  let $angle_degree = Math.cos(Math.PI * ($screen[0].value / 180));
  $screen[0].value = `cos(${$screen[0].value}) = ${$angle_degree}`;
});

$tan_angle[0].addEventListener("click", () => {
  let $angle_degree = Math.tan(Math.PI * ($screen[0].value / 180));
  $screen[0].value = `cos(${$screen[0].value}) = ${$angle_degree}`;
});

$square_value[0].addEventListener("click", () => {
  $screen[0].value = `${$screen[0].value * $screen[0].value}`;
});

$inverse_value[0].addEventListener("click", () => {
  $screen[0].value = `${1 / $screen[0].value}`;
});

$square_root[0].addEventListener("click", () => {
  $screen[0].value = `${Math.sqrt($screen[0].value)}`;
});

$power_value[0].addEventListener("click", () => {
  let $base_value = Number(prompt("enter base value"));
  let $power_number = Number(prompt("enter power value"));
  $screen[0].value = `${Math.pow($base_value, $power_number)}`;
});

$logarithm[0].addEventListener("click", () => {
  $screen[0].value = `${Math.log10($screen[0].value)} base 10`;
});

$natural_log[0].addEventListener("click", () => {
  $screen[0].value = `${Math.log($screen[0].value)}`;
});

$euler[0].addEventListener("click", () => {
  $screen[0].value = Math.E;
});

$exp[0].addEventListener("click", () => {
  let num = $screen[0].value;
  $screen[0].value = Math.exp(num);
});

$variable_x[0].addEventListener("click", () => {
  $screen[0].value = $screen[0].value + "x";
});
$integration[0].addEventListener("click", (f, x, dx) => {
  dx = dx || 0.0000001;
  if ($screen[0].value == !NaN) {
    $screen[0].value = "0";
  } else {
    alert("find the derivative");
  }
  //return (f(x+dx)-f(x))/dx;
});
