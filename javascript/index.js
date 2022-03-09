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
