/* Fonctions de base */

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function multiply(a, b){
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

/* Afficher les numéros */

document.querySelector('#one').onclick = function() {
  document.getElementById("screen").innerHTML+= '1';
}

document.querySelector('#two').onclick = function() {
  document.getElementById("screen").innerHTML+= '2';
}

document.querySelector('#three').onclick = function() {
  document.getElementById("screen").innerHTML+= '3';
}

document.querySelector('#sum').onclick = function() {
  document.getElementById("screen").innerHTML+= '+';
}

document.querySelector('#four').onclick = function() {
  document.getElementById("screen").innerHTML+= '4';
}

document.querySelector('#five').onclick = function() {
  document.getElementById("screen").innerHTML+= '5';
}

document.querySelector('#six').onclick = function() {
  document.getElementById("screen").innerHTML+= '6';
}

document.querySelector('#subtract').onclick = function() {
  document.getElementById("screen").innerHTML+= '-';
}

document.querySelector('#seven').onclick = function() {
  document.getElementById("screen").innerHTML+= '7';
}

document.querySelector('#eight').onclick = function() {
  document.getElementById("screen").innerHTML+= '8';
}

document.querySelector('#nine').onclick = function() {
  document.getElementById("screen").innerHTML+= '9';
}

document.querySelector('#multiply').onclick = function() {
  document.getElementById("screen").innerHTML+= '*';
}

document.querySelector('#zero').onclick = function() {
  document.getElementById("screen").innerHTML+= '0';
}

document.querySelector('#divide').onclick = function() {
  document.getElementById("screen").innerHTML+= '/'
}

document.querySelector('#clear').onclick = function() {
  document.getElementById("screen").innerHTML= '';
}

document.querySelector('#result').onclick = function() {
  alert(calculate());
  document.getElementById("screen").innerHTML= '';
}

/* Calculer */

function calculate () {
	var integer = document.getElementById("screen").innerHTML;
}