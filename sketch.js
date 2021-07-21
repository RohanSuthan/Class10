var a,b;

function setup() {
  createCanvas(400, 400);
  a = prompt("Please enter the variable a");
  b = prompt("Please enter the variable b");
  var button1 = createButton("Click here to swap");
  button1.mousePressed(swap);

}

function draw() {
  background(220);
 // console.log(a)
  //console.log(b)

}
function swap(){
  [a,b] = [b,a]
 
  console.log("the number after swapping a is" + a)
  console.log("the number after swapping a is" + b)
}