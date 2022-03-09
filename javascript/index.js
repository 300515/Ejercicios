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
let Ope;

function calcular (Ope){
   const first = document.getElementById('factorial').value;
   let resultado = 0;
   
   if (!first){
      alert ("Elige un número para obtener su factorial.")
      return 1;
   }

   if (Ope == 'MostrarNumeros'){
      resultado = ""
      for (let i = 1; i < parseFloat(first) + 1; i++){
         resultado = resultado + i
      }
      alert("El factorial del número es: "+ resultado + ".")

   }else if (Ope == 'MostrarResultFactorial'){
      resultado = 1
      for (let i =1; i < parseFloat(first) + 1; i++){
         resultado = resultado * parseFloat (i);
      }
      alert("El desarrollo del factorial del número es: "+ resultado + ".")
   }
}
