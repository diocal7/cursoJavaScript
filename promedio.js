

function calcularMediaAritmetica(lista1){
 
   // const total=lista1.length;  
  //   let sumaLista1= 0;
  //  for(let i= 0 ; i<total; i++){      
  //  sumaLista1 = sumaLista1 + lista1[i];        
 // }
 //const resultado =sumaLista1/total;
// alert("tu promedio es " + resultado);


const sumaLista = lista1.reduce(
    function(valorAcumulado = 0,nuevoElemento){
      return valorAcumulado + nuevoElemento;
    }
   
);
    
const resultado = sumaLista/lista1.length ;
return resultado; 





}




   
