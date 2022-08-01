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

function modal(){
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("btnModal");
  var span = document.getElementsByClassName("close")[0];
  var body = document.getElementsByTagName("body")[0];

  btn.onclick = function() {
    modal.style.display = "block";

    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
  }

  span.onclick = function() {
    modal.style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";

      body.style.position = "inherit";
      body.style.height = "auto";
      body.style.overflow = "visible";
    }
  }
}

