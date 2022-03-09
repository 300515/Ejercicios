let operacion

function calcular(operacion){
   first = document.getElementById('primerNumero').value;
   second = document.getElementById('segundoNumero').value;
   let resultado = 0;
 
if(!first){
   alert("Agrega el primer numero.")
   return 1;
}
   else if (!second){
      alert("Agrega el segundo numero.")
      return 1;
}


if(operacion == "suma"){
   resultado = parseFloat(first)+parseFloat(second);
   alert("La suma de los dos numeros es: " + resultado + ".");
 }else if(operacion == "resta"){
   resultado = parseFloat(first)-parseFloat(second);
   alert("La resta de los dos numeros es: " + resultado + ".");
 }else if(operacion == "multiplicación"){
   resultado = parseFloat(first)*parseFloat(second);
   alert("La multiplicacion de los dos numeros es: " + resultado + ".");
 }else if(operacion == "división"){
   resultado = parseFloat(first)/parseFloat(second);
   alert("La division de los dos numeros es: " + resultado + ".");
 }
}