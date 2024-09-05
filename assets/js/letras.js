const key = document.getElementById("key");

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "a":
      key.style.backgroundColor = "pink";
      break;
    case "s":
      key.style.backgroundColor = "orange";
      break;
    case "d":
      key.style.backgroundColor = "blue";
      break;
  }
});

const key2 = document.getElementById("key2");
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "q":
      key2.style.backgroundColor = "purple";
      break;
    case "w":
      key2.style.backgroundColor = "grey";
      break;
    case "e":
      key2.style.backgroundColor = "red";
      break;
  }
});
