//function values
var $shift_function = document.getElementsByClassName("shift_function");
var $menu_function = document.getElementsByClassName("menu_function");
var $delete_function = document.getElementsByClassName("delete_function");
var $clear = document.getElementsByClassName('clear_function');

//screen
var $screen = document.getElementsByClassName("screen");
var $screen1 = document.getElementsByClassName("screen1");

//mathematical functions
var $sin_angle = document.getElementsByClassName("sin");
var $cos_angle = document.getElementsByClassName("cos");
var $tan_angle = document.getElementsByClassName('tan');
var $pi_value = document.getElementsByClassName('pi');
var $square_value = document.getElementsByClassName('square');
var $inverse_value = document.getElementsByClassName("inverse");
var $square_root = document.getElementsByClassName('root');
var $power_value = document.getElementsByClassName('variable_square');
var $logarithm = document.getElementsByClassName('log');
var $natural_log = document.getElementsByClassName('ln');
var $euler = document.getElementsByClassName('e');
var $exp = document.getElementsByClassName('exp');
var $integration = document.getElementsByClassName('integration');
var $variable_x = document.getElementsByClassName("x");

//operations
var $dot = document.getElementsByClassName('dot');
var $equal = document.getElementsByClassName('equal');
var $addition = document.getElementsByClassName('addition');
var $subtraction = document.getElementsByClassName('subtraction');
var $division = document.getElementsByClassName('division');
var $multiplication = document.getElementsByClassName('multiplication');
var $open_parenthesis = document.getElementsByClassName('open_parenthesis');
var $closed_parenthesis = document.getElementsByClassName('closed_parenthesis');
//numbers

var $zero = document.getElementsByClassName('zero');
var $one = document.getElementsByClassName('one');
var $two = document.getElementsByClassName('two');
var $three = document.getElementsByClassName('three');
var $four = document.getElementsByClassName('four');
var $five = document.getElementsByClassName('five');
var $six = document.getElementsByClassName('six');
var $seven = document.getElementsByClassName('seven');
var $eight = document.getElementsByClassName('eigth');
var $nine = document.getElementsByClassName('nine');


var $answer = eval($screen[0].value);

$zero[0].addEventListener('click', () =>{
    $screen[0].value +='0';
});
$one[0].addEventListener('click', () =>{
    $screen[0].value +='1';
});
$two[0].addEventListener('click', () =>{
    $screen[0].value +='2';
});
$three[0].addEventListener('click', () =>{
    $screen[0].value +="3"
});
$four[0].addEventListener('click', () =>{
    $screen[0].value +="4"
});
$five[0].addEventListener('click', () =>{
    $screen[0].value +="5"
});
$six[0].addEventListener('click', () =>{
    $screen[0].value +="6"
});
$seven[0].addEventListener('click', () =>{
    $screen[0].value +="7"
});
$eight[0].addEventListener('click', () =>{
    $screen[0].value +="8"
});
$nine[0].addEventListener('click', () =>{
    $screen[0].value +="9"
});




$dot[0].addEventListener('click', () =>{
    $screen[0].value +='.';
});
$addition[0].addEventListener('click', () =>{
    $screen[0].value +='+';
});
$subtraction[0].addEventListener('click', () =>{
    $screen[0].value +='-';
});
$division[0].addEventListener('click', () =>{
    $screen[0].value +='/';
});
$multiplication[0].addEventListener('click', () =>{
    $screen[0].value +='*';
});
$open_parenthesis[0].addEventListener('click', () =>{
    $screen[0].value +='(';
});
$closed_parenthesis[0].addEventListener('click', () =>{
    $screen[0].value +=')';
});
$equal[0].addEventListener('click', () =>{
       // $screen[0].value = "";
       let $answer = eval($screen[0].value);
       if($answer == Number.isNaN()){
        $screen[0].value = "enter valid expressions pls";
       }
       else{
        
        
        $answer = $answer + "";
        $screen[0].value = $screen[0].value.replace($screen[0].value, $answer);
        

       }
       
    });
    

//functions operations
$clear[0].addEventListener('click', () =>{
    $screen[0].value = "";
});
$delete_function[0].addEventListener('click', () =>{
    const values = $screen[0].value;
    if($screen[0].value == $screen[0].value){
        $screen[0].value = values.slice(0, -1);
    }
    
    else if($screen[0].value==$answer){
        $delete_function[0].addEventListener('click', () =>{
            $screen[0].value = values.slice(0,1);
            $screen[0].value = $answer.splice($screen[0].value.toUpperCase())
        })
    }
   else{
    alert("empty screen");
   }
});
$shift_function[0].addEventListener('click', () =>{
    let text = document.createElement("p");
    let div = document.createElement("div");
   text.innerHTML = '<p>modal mode<p>';
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
    
    
})



$pi_value[0].addEventListener('click', () =>{
    let $pi = 22/7;
  $screen[0].value = `${$pi}`;
});

$sin_angle[0].addEventListener('click', () =>{
    let $angle_degree = Math.sin(Math.PI * ($screen[0].value/180));
    if($screen[0].value == 30){
        $screen[0].value = `sin(${$screen[0].value}) = ${$angle_degree.toFixed(1)}`;
    }
    else{
        $screen[0].value = `sin(${$screen[0].value}) = ${$angle_degree}`;
    }
    
});
$cos_angle[0].addEventListener('click', () =>{
    let $angle_degree = Math.cos(Math.PI * ($screen[0].value/180));
    $screen[0].value = `cos(${$screen[0].value}) = ${$angle_degree}`;
});

$tan_angle[0].addEventListener('click', () =>{
    let $angle_degree = Math.tan(Math.PI * ($screen[0].value/180));
    $screen[0].value = `cos(${$screen[0].value}) = ${$angle_degree}`;
})


$square_value[0].addEventListener('click', () =>{
    $screen[0].value = `${($screen[0].value)*($screen[0].value)}`
});

$inverse_value[0].addEventListener('click', () =>{
    $screen[0].value = `${1/($screen[0].value)}`
});

$square_root[0].addEventListener('click', ()=>{
    $screen[0].value = `${Math.sqrt($screen[0].value)}`
});

$power_value[0].addEventListener('click', ()=>{
    let $base_value =  Number(prompt("enter base value"));
    let $power_number = Number(prompt("enter power value"));
    $screen[0].value = `${Math.pow($base_value, $power_number)}`
    
});

$logarithm[0].addEventListener('click', ()=>{
    $screen[0].value = `${Math.log10( $screen[0].value)} base 10`
});

$natural_log[0].addEventListener('click', ()=>{
    $screen[0].value = `${Math.log( $screen[0].value)}`;
});

$euler[0].addEventListener('click', ()=>{
    
    $screen[0].value = Math.E;
});

$exp[0].addEventListener('click', ()=>{
    
    let num = $screen[0].value;
    $screen[0].value = Math.exp(num);
});

$variable_x[0].addEventListener('click', ()=>{
    $screen[0].value = $screen[0].value + "x";
})
$integration[0].addEventListener('click', (f,x,dx) =>{
    dx = dx || .0000001;
    if($screen[0].value == !NaN){
        $screen[0].value = "0";
    }
    else{
       alert("find the derivative");
    }
    //return (f(x+dx)-f(x))/dx;
});




