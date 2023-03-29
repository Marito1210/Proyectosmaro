//selecionamos los elementos a utilizar 
const numero1= document.getElementById("numero1");
const numero2= document.getElementById("numero2");
const btnSuma =document.getElementById("btn-suma");
const btnResta =document.getElementById("btn-resta");
const btnMultiplicar =document.getElementById("btn-multiplicar");
const btnDividir =document.getElementById("btn-dividir");
//usamos las funciones flecha para cada operacion
const sumar= (a,b)=>`${a} + ${b} = ${a+b}`;
const restar=(a,b)=>`${a} - ${b} = ${a-b}`;
const multiplicar=(a,b)=>`${a} x ${b} = ${a*b}`;
const dividir=(a,b)=>`${a} ÷ ${b} = ${a/b}`;
//agregar los eventos click a los botones para realizar las operaciones
btnSuma.addEventListener("click", ()=> {
    const n1 = parseFloat(numero1.value);
    const n2 = parseFloat(numero2.value);
    Resultado.value= sumar(n1,n2);
});
btnResta.addEventListener("click", ()=> {
    const n1 = parseFloat(numero1.value);
    const n2 = parseFloat(numero2.value);
    Resultado.value= restar(n1,n2);
});
btnMultiplicar.addEventListener("click", ()=> {
    const n1 = parseFloat(numero1.value);
    const n2 = parseFloat(numero2.value);
    Resultado.value= multiplicar(n1,n2);
});
btnDividir.addEventListener("click", ()=> {
    const n1 = parseFloat(numero1.value);
    const n2 = parseFloat(numero2.value);
    Resultado.value= dividir(n1,n2);
});