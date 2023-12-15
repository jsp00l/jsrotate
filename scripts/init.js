console.log("init..");

const CANVAS = document.getElementById("main");
const CTX = CANVAS.getContext("2d");
const ctx = CTX;


ctx.beginPath();
ctx.arc(250, 250, 80, 0, 2 * Math.PI);
ctx.stroke();


console.log("...init done!");