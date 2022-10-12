const headerName = document.getElementsByClassName('header__izquierda');
const userRaw = localStorage.getItem('user');

//___________poop
class selectors {
    constructor(targetID) {
        this.targetI = document.getElementById(targetID);
        // this.targetClass = document.getElementById(targetID);
    }

    getIdValue() {
        return this.targetI.value;
    }
    // getClassValue() {
    //     return this.targetClass.value;
    // }
}
//_____

const URL_API = 'https://back-sprint-1-production.up.railway.app/';

let user;

const validationSession = () => {
    if (!userRaw) {
        location.href = '../index.html'
    }else {
        user = JSON.parse(userRaw);
    }
}

validationSession();

//funcion que pinta el delete
let iniciar = () =>{
    headerName[0].innerHTML += ` 
    <div class="header__izquierda__img" >
        <img src="${ user.url_imagen_perfil }" alt="" class="header__izquierda__img_me" >             
    </div>  
    <div class="header__izquierda__name">
        ${ user.nombre }
    </div>
    <button id="btnCloseSession">Cerrar Sesión</button>
`
const btnCloseSession = document.getElementById('btnCloseSession');
const handleCloseSession = () => {
    console.log("here");
    localStorage.clear();
    location.href = '../index.html';
}
btnCloseSession.addEventListener('click', handleCloseSession);
}
iniciar();

//funcion que pinta el perfil de la derecha
const headerNameDerecha = document.getElementsByClassName('header__derecha');

let iniciarDerecha = () =>{
    headerNameDerecha[0].innerHTML += ` 
    <div class="header__derecha__img" >
        <img src="${ user.url_imagen_perfil }" alt="" class="header__derecha__img__me" >             
    </div>  
    <div class="header__derecha__name">
        ${ user.nombre }
    </div>
    <img src="../icons/search.svg" alt="" class="busqueda"> 
`
}
iniciarDerecha();





let botonEnviar = document.getElementsByClassName('boton__envia');

let contenidoMensajesDerecha = document.getElementsByClassName('contenedor__mensajes__derecha');

let bontonEnviado = () =>{
    const inputBoton = new selectors('search1');

    const message = {
       mensajeMaria: inputBoton.getIdValue(),
       }
    contenidoMensajesDerecha[0].innerHTML +=`
        <div class="mensaje_enviado">${message.mensajeMaria}</div>

         `


    console.log(message.mensajeMaria);

}
botonEnviar[0].addEventListener('click', bontonEnviado);

// let botonEnviarIzquierda = document.getElementsByClassName('boton__envia__izquierda');

// let contenidoMensajesIzquierda = document.getElementsByClassName('contenedor__mensajes__izquierda');


// let bontonEnviado2 = () =>{
//     const inputBoton2 = new selectors('search1');

//     const message2 = {
//        mensajeMaria2: inputBoton2.getIdValue(),
//        }
//     contenidoMensajesIzquierda[0].innerHTML +=`
//         <div class="mensaje__recibido">${message2.mensajeMaria2}</div>

//          `


//     console.log(message2.mensajeMaria2);

// }

// botonEnviar[0].addEventListener('click', bontonEnviado2);





