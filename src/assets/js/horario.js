function greet(){
    alert("hello");
}

function cambia_color(){
    celda = document.getElementById("celda_" + document.fcolor.celda.value)
    celda.style.backgroundColor=document.fcolor.micolor.value
}

function cambiar_color_over(celda, color){
    celda.style.backgroundColor= color;
 }
 