function pintarNegro(evento) {
  evento.target.style.backgroundColor = "black";
}
const blue = document.getElementById("blue");
blue.addEventListener("click", pintarNegro);

const red = document.getElementById("red");
red.addEventListener("click", pintarNegro);

const green = document.getElementById("green");
green.addEventListener("click", pintarNegro);

const yellow = document.getElementById("yellow");
yellow.addEventListener("click", pintarNegro);
