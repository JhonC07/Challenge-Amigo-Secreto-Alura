let numeroMaximo = 10;
let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 0;



function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    //Ingreso Datos Usuario
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //Revisión datos
    console.log(`Intento del usuario: ${numeroDeUsuario}, Número secreto: ${numeroSecreto}`);

    if(numeroDeUsuario===numeroSecreto) {
        //El usuario acertó
        asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acertó
        if(numeroDeUsuario >   numeroSecreto){
            asignarTextoElemento('p','El número Secreto es menor')
        } else {
            asignarTextoElemento('p','El número Secreto es mayor')
        }
        //Incremeta número intentos
        intentos++;
        //Limpia la caja
        limpiarCaja();
    }
    return;
            
}   

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
    }
//Generación número Secreto
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Validar si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    } else{
        //Si el numero está en la lista, hacemos otra operación
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){
    asignarTextoElemento ('h1', 'Juego del Número Secreto')
    asignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}`)
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
    console.log(numeroSecreto);
       
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Resstablecer condiciones iniciales
    condicionesIniciales();
    //Deshabilitar botón nuevo juegos
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
