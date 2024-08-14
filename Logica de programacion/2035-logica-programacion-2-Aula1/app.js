let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
         }else{
             listaNumerosSorteados.push(numeroGenerado);
             return numeroGenerado;
         }
    }
    
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario===numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)?'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value='';
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Indica un número del 1 al 10');
    intentos=1;
    numeroSecreto=generarNumeroSecreto();
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //generar numero secreto, cambiar mensajes iniciales, reiniciar intentos
    condicionesIniciales();
    //desahibilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled',true);    
}

condicionesIniciales();