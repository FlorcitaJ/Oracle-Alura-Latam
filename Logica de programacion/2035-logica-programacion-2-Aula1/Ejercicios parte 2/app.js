/* //1
function mensajeConsola() {
  console.log("¡Hola, mundo!");
}
mensajeConsola();
//2
function saludar(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}
saludar("Flor");
//3
function doble(numero) {
  return numero * 2;
}
console.log(doble(3));
//4
function promedio(a, b, c) {
  let promedio = (a + b + c) / 3;
  return promedio;
}
console.log(promedio(5, 8, 9));
//5
function mayor(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
  //con operador ternario seria num1>num2?num1:num2;
}
console.log(mayor(5, 7));
//6
function multiplicado(num) {
  return num * num;
}
console.log(multiplicado(7));
 */

//EJERCICIOS PARTE 3
//1
/* function calculoIMS(peso,altura) {
  let IMS=peso/Math.pow(altura,2);
  return IMS;
}
console.log(`El indice de masa corporal es ${calculoIMS(95,1.8)}`);
//2
function calculoFactorial(numero){
  let factorial=1;
  if(numero===0){
    factorial=1;
  }else{
    for (let index = numero; index > 0; index--) {
      factorial=factorial*index;
    }
  }
  return factorial;
}
console.log(`El factorial es ${calculoFactorial(5)}`);
//3
function conversion(dolares){
  let reales=dolares*4.8;
  
  return reales;
}
console.log(`El monto ingresado en dolares es equivalente a ${conversion(10)} reales`);
//4
function areaPerimetro(alto,ancho){
  let area=alto*ancho;
  let perimetro=2*(alto+ancho);

  return {area,perimetro};
}
const resultados=areaPerimetro(5,10);
alert(`El área de la sala es ${resultados.area} y su perímetro es ${resultados.perimetro}`);
//5
function areaPerimetroCircular(radio){
  let areaCirculo=3.14 * Math.pow(radio,2);
  let perimetroCirculo=2*3.14*radio;
  return{ areaCirculo,perimetroCirculo};
}
const valores=areaPerimetroCircular(15);
alert(`El área de la sala Circular es ${valores.areaCirculo} y su perímetro es ${valores.perimetroCirculo}`);
//6
function tablaDeMultiplicar(valor){
  for (let index = 1; index <= 10; index++) {
    let resultado=index*valor; console.log(`${index} * ${valor} = ${resultado}`);  
  }
}
tablaDeMultiplicar(20); */
//Ejercicios parte 4
//1
/* let listaGenerica=[];
//2
let lenguajesDeProgramacion=['JavaScript','C','C++','Kotlin','Python'];
//3
lenguajesDeProgramacion.push('Java','Ruby','GoLang');
//4
function mostrarElementos(lista){
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}
mostrarElementos(lenguajesDeProgramacion);
//5
function mostrarElementosInversos(lista){
  for (let i = lista.length-1; i >=0; i--) {
    console.log(lista[i]);
  }
}
mostrarElementosInversos(lenguajesDeProgramacion);
//6
let suma=0;
let promedio=0;
let listaDeNumeros=[1,2,3,4,5,6,7,8,9,10]
function promedioLista(lista){
  for (let i = 0; i < lista.length; i++) {
    suma=suma+lista[i];
  }
  promedio=suma/lista.length;
  return promedio;
}
console.log(promedioLista(listaDeNumeros));
//7
let mayor;
let menor;
function mayorMenor(lista){
  for (let i = 0; i < lista.length; i++) {
    if(i==0){
      mayor=lista[i];
      menor=lista[i];
    }else{
      if(mayor<lista[i]){
        mayor=lista[i];
      }
      if(menor>lista[i]){
        menor=lista[i];
      }
    }
  }
}
listaDeNumeros=[19,24,62,7,11,31];
mayorMenor(listaDeNumeros);
console.log(`El mayor elemento de la lista es ${mayor} y el menor es ${menor}`);
//8
function sumaLista(lista){
  let suma=0;
  for (let i = 0; i < lista.length; i++) {
    suma=suma+lista[i];
  }
  return suma;
}
console.log(`La suma de los elementos de la lista es ${sumaLista(listaDeNumeros)}`);
//9
function posicion(lista,elemento){
  if(lista.includes(elemento)){
    return lista.indexOf(elemento);
  }else{
    return -1;
  }
}
console.log(posicion(listaDeNumeros,7));
//10
let listaDeNumerosDos=[8,5,20,3,74,10];
function sumaDeListas(lista,lista2){
  let listaSumada=[];
  for (let i = 0; i < lista.length; i++) {
    listaSumada[i]=lista[i]+lista2[i];    
  }
  return listaSumada;
}
console.log(sumaDeListas(listaDeNumeros,listaDeNumerosDos));
//11
function listaCuadrada(lista){
  let listaValoresCuadrados=[];
  for (let i = 0; i < lista.length; i++) {
    listaValoresCuadrados[i]=Math.pow(lista[i],2);    
  }
  return listaValoresCuadrados;
}
console.log(listaCuadrada(listaDeNumeros)); */