function validarTexto() {
    let textoUsuario = document.getElementById('texto_usuario').value;
    
    // Expresión regular para letras minúsculas sin acentos
    const regex = /^[a-z\s]+$/;

    if (!regex.test(textoUsuario)) {
        alert('Por favor, ingresa solo letras minúsculas sin acentos.');
        return false;
    }
    return true;
}
function encriptarTexto(){
    if (!validarTexto()) {
        limpiarCaja();
        return;
    }
    let textoUsuario=document.getElementById('texto_usuario').value;
    let listaTextoUsuario=textoUsuario.split('');
    let listaTextoUsuarioEncriptado=[];
    for (let i = 0; i < listaTextoUsuario.length; i++) {
        if (listaTextoUsuario[i]=='a') {
            listaTextoUsuarioEncriptado.push('ai');
        }else if(listaTextoUsuario[i]=='e'){
            listaTextoUsuarioEncriptado.push('enter');
        }else if(listaTextoUsuario[i]=='i'){
            listaTextoUsuarioEncriptado.push('imes');
        }else if(listaTextoUsuario[i]=='o'){
            listaTextoUsuarioEncriptado.push('ober');
        }else if(listaTextoUsuario[i]=='u'){
            listaTextoUsuarioEncriptado.push('ufat');
        }else{
            listaTextoUsuarioEncriptado.push(listaTextoUsuario[i]);
        } 
    }
    eliminarImagen();
    asignarValorElemento('h2','')
    asignarValorElemento('h1',listaTextoUsuarioEncriptado.join(''));
    agregarBotonCopiar();
    limpiarCaja();
}
function desencriptarTexto() {
  if (!validarTexto()) {
    limpiarCaja();
    return;
  }
  let textoUsuario = document.getElementById("texto_usuario").value;
  let textoUsuarioDesencriptado = textoUsuario;
  textoUsuarioDesencriptado = textoUsuarioDesencriptado
    .replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e")
    .replace(/ai/g, "a");
  eliminarImagen();
  asignarValorElemento("h2", "");
  asignarValorElemento("h1", `${textoUsuarioDesencriptado}`);
  agregarBotonCopiar();
  limpiarCaja();
}
function asignarValorElemento(elemento,valor){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=valor;
}
function asignarImagen(){
    let divImagenInicial=document.getElementById('imagen_inicial');
    let imagenInicial=document.createElement('img');

    imagenInicial.src='/img/imagenInicial.jpg';
    imagenInicial.alt='niño exploando letras';
    imagenInicial.width='50px';
    imagenInicial.height='50px';
    imagenInicial.id='imagenDinamica';

    divImagenInicial.appendChild(imagenInicial);
}
function eliminarImagen(){
    let divImagenInicial=document.getElementById('imagen_inicial');
    let imagenInicial=document.getElementById('imagenDinamica');
    if (imagenInicial) {
        divImagenInicial.removeChild(imagenInicial);
    }
}
function agregarBotonCopiar() {
    let h2Elemento=document.querySelector('h2');
    let botonCopiar=document.createElement('button');
    botonCopiar.textContent='Copiar';
    botonCopiar.id='botonParaCopiar';
    botonCopiar.onclick=function copiar(){
        let textoCopiado=document.getElementById('elemento_h1').textContent;
        navigator.clipboard.writeText(textoCopiado);
    }
    h2Elemento.appendChild(botonCopiar);
}
/* function eliminarBotonCopiar(){
    let h2Elemento=document.querySelector('h2');
    let botonCopiar=document.getElementById('botonParaCopiar');
    if (botonCopiar) {
        h2Elemento.removeChild(botonCopiar);
    }
} */
function condicionesIniciales(){
    asignarImagen();
    asignarValorElemento('h1','Ningun mensaje fue encontrado');
    asignarValorElemento('h2','Ingresa el texto que desees encriptar o desencriptar');
}

function limpiarCaja(){
    document.querySelector('#texto_usuario').value='';
}
condicionesIniciales();