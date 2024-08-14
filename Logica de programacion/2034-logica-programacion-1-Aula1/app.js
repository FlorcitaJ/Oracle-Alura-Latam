let numeroSecreto = parseInt(Math.floor(Math.random()*10)+1);
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");
let intentos = 1;

console.log(numeroUsuario);
console.log("Resultado de la comparacion ", numeroUsuario == numeroSecreto);
//este codigo realiza la comparacion
while (intentos<3&&numeroSecreto!=numeroUsuario) {
    console.log("intento n°: ",intentos);
    alert(`Vas ${intentos} de 3 intentos`);
  if (numeroUsuario > numeroSecreto) {
    //no se cumplio la condicion
    console.log(`Valor del número secreto: ${numeroSecreto}`);
    alert(`El número secreto es menor a ${numeroUsuario}`);
  } else {
    alert(`El número secreto es mayor a ${numeroUsuario}`);
  }
  numeroUsuario=prompt("Ingrese otro valor entre 1 y 10");
    intentos+=1;
}
if(intentos==3){
    alert("Lo siento, ya acabaste todos los intentos, ¡gracias por jugar!")
}else if(numeroSecreto==numeroUsuario){
    alert(`Acertaste, el número es: ${numeroSecreto}`);
}
//Desafio 
//el cambio que se debe realizar es crear una variable para poner un valor máximo posible y reemplazar en la linea uno el *10 por *numero maximo posible, tambien hay que cambiar la linea 2 y 18 por comillastemplate string y reemplazar el 10 por la variable nueva.

/* //Ejercicios
//1
alert("¡Bienvenida y bienvenido a nuestro sitio web");
//2
let nombre= "Luna";
//3
let edad=25;
//4
let numeroDeVentas=50;
//5
let saldoDisponible=1000;
//6
alert("¡Error! Completa todos los campos")
//7
let mensajeDeError="¡Error! Completa todos los campos";
alert(mensajeDeError);
//8
let nombre2=prompt("¿Como es su nombre?");
//9
let edad2=prompt("¿Cual es su edad?");
//10
if(edad2>=18){
    alert("¡Puedes obtener tu licencia de conducir!");
} */
//***********************
/* //Ejercicios parte 2
//1
let diaDeLaSemana=prompt("¿Que día es hoy?");

if(diaDeLaSemana==="Sábado" ){
    alert("¡Buen fin de semana!");
}else if(diaDeLaSemana==="Domingo"){
    alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!");
}
//2
let numeroIngresado=prompt("Introduzca un número");

if(numeroIngresado>0){
    alert(`El número ${numeroIngresado} es positivo`);
}else if(numeroIngresado<0){
    alert(`El número ${numeroIngresado} es negativo`);
}else{
    alert(`El número ${numeroIngresado} no es positivo ni negativo ya que es 0`);
}
//3
let puntuacion;
if(puntuacion>=100){
    alert("¡Felicidades, has ganado!");
}else{
    alert("Intentalo nuevamente para ganar");
}
//4
let saldoCuenta;
alert(`El saldo de su cuenta es: ${saldoCuenta}`);
//5
let nombreUsuario=prompt("Ingrese su nombre");
alert(`¡Bienvenid@ ${nombreUsuario}`); */
//***********************
/* //Ejercicios parte 3
//1
let contador=1;
while(contador<=10){
    alert(contador);
    contador++;
}
//2
let contador1=10;
while(contador1>=0){
    alert(contador1);
    contador1--;
}
//3
let numeroAContar=prompt("Ingrese el número hasta el que desea contar");
let contador3=0;
while(contador3<=numeroAContar){
    alert(contador3);
    contador3++;
} */
//***********************
/* //Ejercicios parte 4
//1
console.log("¡Bienvenido!");
//2
let nombre="Flor";
console.log(`¡Hola ${nombre}!`);
//3
let nombre2="Flor";
alert(`¡Hola ${nombre2}!`);
//4
let lenguajePreferido= prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(lenguajePreferido);
//5 y 6
let valor1=7;
let valor2=3;
let resultado=valor1+valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);
//la parte que correaponde a 6
resultado=valor1-valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es ${resultado}`);
//7
let edadUsuario=prompt("Por favor ingrese su edad");
if(edadUsuario<18){
    console.log("Usted es menor de edad");
}else{
    console.log("Usted es mayor de edad");
}
//8
let numero=parseInt(prompt("Por favor ingrese un número"));
if(numero<0){
    alert(`El número ${numero} es negativo`);
}else if(numero>0){
    alert(`El número ${numero} es positivo`);
}else{
    alert(`El número ${numero} no es ni negativo ni positivo ya que es 0`);
}
//9
let contadorAscendente=1;
while(contadorAscendente<=10){
    console.log(contadorAscendente);
    contadorAscendente++;
}
//10
let nota=7;
if(nota>=7){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}
//11
let random=Math.random();
console.log(random);
//12
let numeroEntre1Y10=Math.floor(Math.random()*10)+1;
console.log(numeroEntre1Y10);
//13
let numeroEntre1y1000=Math.floor(Math.random()*1000)+1; */

