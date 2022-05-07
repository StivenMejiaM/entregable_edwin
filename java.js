const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const contrasena = document.getElementById('contrasena');
const confirmaciones = document.getElementById('confirmaciones');
const boton = document.getElementById('boton');
const formulario = document.getElementById('frm-register')
const input = document.getElementById('frm-register input');


datos = [];

function regist(event) {
    if (event.type == 'click') {

    }
}

nombre.addEventListener('keyup',caractersminimo);

function caractersminimo() {
    let letrasinp = document.getElementById('information');
    let cantidad = nombre.value.length;

    let validacion = document.getElementById('validacion');
    let negacion = document.getElementById('negacion');
    document.getElementById('information').textContent = `su nombre debe ser de mas de 3 caracteres `;


    if (cantidad < 4) {
 
        letrasinp.style.color = "white";
        letrasinp.style.fontSize = "19px";
   
        validacion.style.backgroundColor = "transparent";
        validacion.style.visibility = "hidden";
     
        negacion.style.visibility = "visible";
        negacion.style.color = "red";
    }
    else{
       
        document.getElementById('aviso1').textContent = ` `;
       
        validacion.style.color = "rgb(0, 255, 0)";
        validacion.style.visibility = "visible";
        
        negacion.style.backgroundColor = "transparent";
        negacion.style.visibility = "hidden";
    }
}


nombre.addEventListener("keyup",validateTypes);
const mensaje = document.getElementById('mensaje');

function validateTypes(event){
    const regex  = /^[a-zA-Z\s]*$/;

    if (regex.test(event.target.value)) {
        mensaje.textContent = " ";
        mensaje.style.backgroundColor = "transparent";
        mensaje.style.color = "none";
        mensaje.style.boxShadow = "none";
    }else{
        mensaje.textContent = "Caracter invalido";
        mensaje.style.backgroundColor = "rgb(82, 82, 82)";
        mensaje.style.color = "#fff";
        mensaje.style.boxShadow = "0px 0px 16px white";
    }
}



apellido.addEventListener('keyup', caractersminimo2);

function caractersminimo2() {
    let letrasinp = document.getElementById('information1');
    let cantidadCaracteres = apellido.value.length;
    document.getElementById('information1').textContent = `su apellido debe ser mayor a 3 caracteres`;
    let validacion2 = document.getElementById('validacion2');
    let negacion2 = document.getElementById('negacion2');

    if (cantidadCaracteres < 4) {
        letrasinp.style.color = "white";
        letrasinp.style.fontSize = "19px";
        validacion2.style.backgroundColor = "transparent";
        validacion2.style.visibility = "hidden";
        negacion2.style.color = "white";
        negacion2.style.visibility = "visible";
    }else{
        document.getElementById('information1').textContent = ` `;
        validacion2.style.color = "rgb(0, 255, 0)";
        validacion2.style.visibility = "visible";
        negacion2.style.backgroundColor = "transparent";
        negacion2.style.visibility = "hidden";
    }
}

apellido.addEventListener("keyup",validateTypes);

function validateTypes(event) {
    const regex  = /^[a-zA-Z\s]*$/;

    if (regex.test(event.target.value)) {
        mensaje.textContent = " ";
        mensaje.style.backgroundColor = "transparent";
        mensaje.style.color = "none";
        mensaje.style.boxShadow = "none";            
    }else{
        mensaje.textContent = "Caracter invalido";
        mensaje.style.backgroundColor = "rgb(82, 82, 82)";
        mensaje.style.color = "#fff";
        mensaje.style.boxShadow = "0px 0px 16px white";
    }
}

contrasena.addEventListener('keyup', caracte);

function caracte() {
    let confirmacion = document.getElementById('mensaje2');
    let cantidadCaracteres = contrasena.value.length;
    document.getElementById('mensaje2').textContent = `su contraseña debe tener mas de 3 caracteres`;
    let validacion3 = document.getElementById('validacion3');
    let negacion3 = document.getElementById('negacion3');

    if (cantidadCaracteres < 4) {
        confirmacion.style.color = "white";
        confirmacion.style.fontSize = "19px";
        validacion3.style.backgroundColor = "transparent";
        validacion3.style.visibility = "hidden";
        negacion3.style.color = "white";
        negacion3.style.visibility = "visible";
    }else{
        document.getElementById('aviso3').textContent = ` `;
        validacion3.style.color = "rgb(0, 255, 0)";
        validacion3.style.visibility = "visible";
        negacion3.style.backgroundColor = "transparent";
        negacion3.style.visibility = "hidden";
    }
}

confirmaciones.addEventListener('keyup', validacion);

function validacion() {

    let validacion4 = document.getElementById('validacion4');
    let negacion4 = document.getElementById('negacion4');
    document.getElementById('mensaje3').textContent =`la confirmacion de su contraseña es diferente`;
    let mensaje3 = document.getElementById('mensaje3');

    if (contrasena.value == confirmaciones.value) {
        validacion4.style.color = "rgb(0, 255, 0)";
        validacion4.style.visibility = "visible";
        negacion4.style.backgroundColor = "transparent";
        negacion4.style.visibility = "hidden";
        document.getElementById('mensaje3').textContent = ` `;

    }else{
        mensaje3.style.color = "white";
        mensaje3.style.fontSize = "19px";
        validacion4.style.backgroundColor = "transparent";
        validacion4.style.visibility = "hidden";
        negacion4.style.color = "white";
        negacion4.style.visibility = "visible";
    }
} 

