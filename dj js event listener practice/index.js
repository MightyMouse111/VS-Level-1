const element = document.getElementById("myBtn");
element.addEventListener("mouseover", myFirstFunction);
element.addEventListener("mouseout", mySecondFunction);
element.addEventListener("mousedown", myThirdFunction);
element.addEventListener("mouseup", myFourthFunction);
element.addEventListener("dblclick", myFifthFunction);
element.addEventListener("keydown", mySixthFunction);
element.addEventListener("keydown", mySeventhFunction);
 
 
function myFirstFunction() {
 document.getElementById("myBtn").style.backgroundColor = "blue";
}
function mySecondFunction() {
 document.getElementById("myBtn").style.backgroundColor = "black";
}
function myThirdFunction() {
 document.getElementById("myBtn").style.backgroundColor = "red";
}
function myFourthFunction() {
 document.getElementById("myBtn").style.backgroundColor = "yellow";
}
function myFifthFunction() {
 document.getElementById("myBtn").style.backgroundColor = "green";
}
//
function mySixthFunction(keydown) {
 var x = keydown.which || keydown.keyCode;
 if (x == 82) {
   document.getElementById("myBtn").style.backgroundColor = "red";
 
 }
}
function mySeventhFunction(keydown) {
 var x = keydown.which || keydown.keyCode;
 if (x == 89) {
   document.getElementById("myBtn").style.backgroundColor = "yellow";
 
 }
}
 
 
window.addEventListener("wheel", myFunction);
function myFunction() {
 document.getElementById("myBtn").style.backgroundColor = "orange";
}
