function contacto(){
    location.href="../html/index4.html"
}
function tipoDeMateria(){
    location.href="../html/index2.html"
}
function materia(){
    location.href="../html/index1.html"
}
function video(){
    location.href="../html/index3.html"
}
let nom,ape,em;

function valores(){
    let nombre = document.getElementById("nombre");
    nom= nombre.value;
    let apellido = document.getElementById("apellido");
    ape=apellido.value;
    let email= document.getElementById("email");
    em=email.value;

    document.write("GRACIAS POR TUS DATOS "+nom +" "+ape +" pronto te enviaremos un correo a: "+em+" ten un lindo dia :D ")

    
}
