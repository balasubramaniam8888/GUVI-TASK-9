//*** creating header and "container div"  and "para div" and "row div" for the calculator body*** //
//** bootstrap is used ***//

const container = document.createElement("div");
container.classList.add("container");
const header = document.createElement("h1");
header.id = "title";
header.innerHTML = "TASK 9 DOM";
header.classList.add("text-center");
const para = document.createElement("p");
para.id = "description";
para.classList.add("text-center");
para.innerHTML = "--- CALCULATOR ---";

const conatiner_row = document.createElement("div");
conatiner_row.classList.add("row", "border");

const conatiner_col = document.createElement("div");
conatiner_col.classList.add(
  "col-12",
  "border",
  "d-flex",
  "justify-content-center"
);

//*** creating calculator body ***//

const calculator_body = document.createElement("div");
calculator_body.classList.add("card", "mt-3", "mb-3");
calculator_body.style.width = "25rem";
calculator_body.style.height = "20rem";

//*** creating input area ***//

const card_header = document.createElement("input");
card_header.classList.add("card-header");
card_header.id = "result";
card_header.type = "text";
card_header.disabled = true;
card_header.placeholder = "0";

//*** creating calculator body ***///
const card_body = document.createElement("div");
card_body.classList.add("card-body");

//*** creating number buttons for the calculator ***//

const button1 = document.createElement("button");
button1.setAttribute("onclick", "calc(1)");
button1.id = "number1";
button1.innerText = "1";

const button2 = document.createElement("button");
button2.setAttribute("onclick", "calc(2)");
button2.id = "number2";
button2.innerHTML = "2";

const button3 = document.createElement("button");
button3.setAttribute("onclick", "calc(3)");
button3.id = "number3";
button3.innerHTML = "3";

const button4 = document.createElement("button");
button4.setAttribute("onclick", "calc(4)");
button4.id = "number4";
button4.innerText = "4";

const button5 = document.createElement("button");
button5.setAttribute("onclick", "calc(5)");
button5.id = "number5";
button5.innerText = "5";

const button6 = document.createElement("button");
button6.setAttribute("onclick", "calc(6)");
button6.id = "number6";
button6.innerText = "6";

const button7 = document.createElement("button");
button7.setAttribute("onclick", "calc(7)");
button7.id = "number7";
button7.innerText = "7";

const button8 = document.createElement("button");
button8.setAttribute("onclick", "calc(8)");
button8.id = "number8";
button8.innerText = "8";

const button9 = document.createElement("button");
button9.setAttribute("onclick", "calc(9)");
button9.innerText = "9";
button9.id = "number9";

const button0 = document.createElement("button");
button0.setAttribute("onclick", "calc(0)");
button0.innerText = "0";
button0.id = "number0";

//*** Creating Operator buttons ***//

const buttonC = document.createElement("button");
buttonC.setAttribute("onclick", "clr()");
buttonC.innerText = "C";
buttonC.id = "clear";

const buttondel = document.createElement("button");
buttondel.setAttribute("onclick", "del()");
buttondel.innerText = "Del";
buttondel.id = "delete";

const buttonequal = document.createElement("button");
buttonequal.setAttribute("onclick", "Result()");
buttonequal.innerText = "=";
buttonequal.id = "equal";

const buttonsub = document.createElement("button");
buttonsub.setAttribute("onclick", "calc('-')");
buttonsub.innerText = "-";
buttonsub.id = "subtract";

const buttonadd = document.createElement("button");
buttonadd.setAttribute("onclick", "calc('+')");
buttonadd.innerText = "+";
buttonadd.id = "add";

const buttonmulti = document.createElement("button");
buttonmulti.setAttribute("onclick", "calc('*')");
buttonmulti.innerText = "*";
buttonmulti.id = "muiltiply";

const buttondivide = document.createElement("button");
buttondivide.setAttribute("onclick", "calc('/')");
buttondivide.innerText = "/";
buttondivide.id = "divide";

const buttonmod = document.createElement("button");
buttonmod.setAttribute("onclick", "calc('%')");
buttonmod.innerText = " % ";
buttonmod.id = "modolo";

const buttonx = document.createElement("button");
buttonx.setAttribute("onclick", "msg()");
buttonx.innerText = "👽";
buttonx.id = "msg";

const buttonMem = document.createElement("button");
buttonMem.setAttribute("onclick", "memory()");
buttonMem.innerText = "M";
buttonMem.id = "memory";

/// appending all created buttons to the HTML body ///

card_body.append(
  button1,
  button2,
  button3,
  buttonC,
  button4,
  button5,
  button6,
  buttonMem,
  button7,
  button8,
  button9,
  buttondel,
  buttonadd,
  button0,
  buttonsub,
  buttonmulti,
  buttondivide,
  buttonequal,
  buttonmod,
  buttonx
);
calculator_body.append(card_header, card_body);
conatiner_col.appendChild(calculator_body);
conatiner_row.appendChild(conatiner_col);
container.append(header, para, conatiner_row);

document.body.append(container);

/// functions to display numbers in input area ///

var result = document.getElementById("result");

let calc = (number) => {
  result.value += number;
  console.log(result.value);
};

/// functions to perform calculaton operations ///

let Result = () => {
  try {
    result.value = Number.isInteger(eval(result.value))
      ? eval(result.value)
      : eval(result.value).toFixed(2);

    const Mem = result.value;
    localStorage.setItem("mem", JSON.stringify(Mem));
  } catch (error) {
    alert("Only numbers are allowed");
    result.value = " ";
  }
};

/// functions to clear extsting data //

function clr() {
  result.value = " ";
}

function del() {
  result.value = result.value.slice(0, -1);
}

/// function to display clickme

function msg() {
  alert("Have A Nice Day");
}

/// function to get memory  ///

function memory() {
  const getmemory = JSON.parse(localStorage.getItem("mem"));
  result.value = (getmemory);
  console.log(result.value);
}
