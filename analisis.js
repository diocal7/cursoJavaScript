//Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
       
   }
   
 
   function calcularMediaAritmetica(lista1){
       
       
   const sumaLista = lista1.reduce(
       function(valorAcumulado = 0,nuevoElemento){
          return valorAcumulado + nuevoElemento;
        }
       
    );
        
    const resultado = sumaLista/lista1.length ;
    return resultado; 
   }
// Calculadora de mediana


function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);

    if (esPar(lista.length)){

        const personitaMitad1= lista[mitad-1];
        const personitaMitad2= lista[mitad];
        
        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;

    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//mediana general
const salariosCol= colombia.map(
 function(personita){
    return personita.salary;
 }

);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB ;
    }
);





const medianaGeneralCol= medianaSalarios(salariosColSorted);

//mediana del top 10%


const spliceStart = (salariosColSorted.length * 90)/100 ;
const spliceCount = (salariosColSorted.length- spliceStart);

const salariosColTop10 = salariosColSorted.splice(
  spliceStart,
  spliceCount,

);

const medianaTop10Col= medianaSalarios(salariosColTop10);




console.log(medianaGeneralCol,
    medianaTop10Col,
    );