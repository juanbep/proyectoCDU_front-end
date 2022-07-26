function cambia_color() {
  celda = document.getElementById("celda" + document.fcolor.celda.value);
  celda.style.backgroundColor = document.fcolor.micolor.value;
}

function cambiar_color_over(celda, color) {
  celda.style.backgroundColor = color;
}

function cambiar_color_over(celda) {
  celda.style.backgroundColor = "#66ff33";
}
function cambiar_color_out(celda) {
  celda.style.backgroundColor = "#dddddd";
}
