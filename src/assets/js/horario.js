function greet(){
    alert("hello");
}

function cambia_color(){
    celda = document.getElementById("celda_" + document.fcolor.celda.value)
    celda.style.backgroundColor=document.fcolor.micolor.value
}