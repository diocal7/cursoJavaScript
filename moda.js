


function calcularModa(lista1){
    const lista1Count={};

lista1.map(
function(elemento){
    if(lista1Count[elemento]){
        lista1Count[elemento] += 1;
    } else{

    lista1Count[elemento]= 1 ;
     }
}

);

const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor){
      return valorAcumulado[1] - nuevoValor[1] ;
      
    }
);

const moda = lista1Array[lista1Array.length-1];

const elemento1 = moda[0];
const elemento2 = moda[1];


console.log("la moda es "+ elemento1 + "y se repitio un total de "+ elemento2);
}