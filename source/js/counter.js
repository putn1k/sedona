
var growMin = document.querySelector(".grownup-wrapper .button-counter-minus");
var inputGrow = document.getElementById("grownup");

var childMin = document.querySelector(".child-wrapper .button-counter-minus");
var inputChild = document.getElementById("child");

if (inputGrow.value==0) {
  growMin.disabled = true;
}

if (inputChild.value==0) {
  childMin.disabled = true;
}

function input_grow( dir, elid ) {

  var inputValue = document.getElementById(elid);
  var value = parseInt(inputValue.value, 10);

  if (isNaN(value)) {
    value = 0;
  }

  if (dir == "dec") {
    value--
  } else if (dir == "inc"){
    value++;
  }

  inputValue.value = value;

  if (inputValue.value == 0) {
    growMin.disabled = true;
  } else {
    growMin.disabled = false;
  }
}

function input_child( dir, elid ) {

  var inputValue = document.getElementById(elid);
  var value = parseInt(inputValue.value, 10);

  if (isNaN(value)) {
    value = 0;
  }

  if (dir == "dec") {
    value--
  } else if (dir == "inc"){
    value++;
  }

  inputValue.value = value;

  if (inputValue.value == 0) {
    childMin.disabled = true;
  } else {
    childMin.disabled = false;
  }
}
