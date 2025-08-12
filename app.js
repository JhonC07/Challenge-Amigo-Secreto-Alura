// challenge-amigo-secreto
let listaAmigos = []
console.log(listaAmigos)

function agregarAmigo(){
    const input = document.getElementById('amigo');
    let nombreIngresado = input.value.trim();
    console.log(nombreIngresado);
    if (nombreIngresado === ''){
        alert('Ingresar un nombre')
        return;
    } else if(listaAmigos.includes(nombreIngresado)){
        alert('Nombre Ingresado')
        return;
    } else {
    listaAmigos.push(nombreIngresado);
    actualizarListaAmigos();
    console.log('Amigo agregado:', nombreIngresado);
    input.value = '';
    input.focus();
    }
}


function actualizarListaAmigos(){
    const lista = document.getElementById('listaAmigos')
    lista.innerHTML = '' //Limnpiar lista antes de actualizar.
    //Recorrer el array
    for (let i=0; i<listaAmigos.length;i++){
        const amigo = listaAmigos[i];
        // Crear un nuevo elemento li
        const li = document.createElement('li');
        li.textContent = amigo
        // Agregar el elemento a la lista ul
        lista.appendChild (li);  
    } 
}

function sortearAmigo() {
    if (listaAmigos.length === 0){
        alert('debe ingresar un nombre');
        return;
    }
        else {
        let numeroAleatorio = Math.floor(Math.random()*listaAmigos.length);
        let amigoSecreto = listaAmigos[numeroAleatorio]
        
        const mostrarAmigoSecreto=document.getElementById('resultado');
         // Limpiar la lista para mostrar solo un resultado
        mostrarAmigoSecreto.innerHTML = '';
        // Creo un li para mostrar el amigo secreto
        const li = document.createElement('li');
        li.textContent = `El amigo secreto es: ${amigoSecreto}`;
        mostrarAmigoSecreto.appendChild(li)
    }
}

function reiniciarJuego() {
    // Vaciar el array
    listaAmigos = [];  
    
    // Limpiar la lista visual de amigos
    const lista = document.getElementById('listaAmigos');
    if (lista) lista.innerHTML = '';
    
    // Limpiar el resultado del sorteo
    const resultado = document.getElementById('resultado');
    if (resultado) resultado.innerHTML = '';
    
    // Limpiar el input
    const input = document.getElementById('amigo');
    if (input) input.value = '';
    
    console.log('Juego reiniciado');
}