//Código del cuadrado
console.group("Cuadrado");

const ladoCuadrado=5;

console.log("los lados del cuadrado miden:"+ladoCuadrado +"cm")


const perimetroCuadrado = ladoCuadrado * 4;
console.log("los lados del cuadrado miden:"+perimetroCuadrado+"cm")


const areaCuadrado= ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado es :"+areaCuadrado+"cm2")

console.groupEnd();



console.group("triangulo");
//Código del triangulo
const ladoTriangulo1=5;
const ladoTriangulo2=5;
const baseTriangulo=4;


console.log("los lados del Triangulo miden:"+ladoTriangulo1 +"cm")


const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2+ baseTriangulo;
console.log("los lados del Triangulo miden:"+perimetroTriangulo+"cm")


const areaTriangulo= (ladoTriangulo2 * baseTriangulo)/2;
console.log("el area del Triangulo es :"+areaTriangulo+"cm2")
console.groupEnd();

// Código del circulo

console.group("circulo");
const radioCirculo=3;

console.log("el radio del circulo es :"+ radioCirculo )


const perimetroCirculo = radioCirculo* Math.PI ;
console.log("el perimetro del circulo "+ perimetroCirculo)

const areaCirculo = radioCirculo*radioCirculo*Math.PI;
console.log("el perimetro del circulo "+ areaCirculo)

console.groupEnd();




//Aqui interactuamos

function calcularPerimetroCuadrado()
{
    const input= document.getElementById("InputCuadrado");
    const value = input.value ;
    const perimetro = value*4 
    alert("el perimetro es " +''+ perimetro);

}
function calcularAreaCuadrado()
{
    const input= document.getElementById("InputCuadrado");
    const value = input.value 
    const area = value*value
    alert("el área es" +' '+ area);
}


function hallarAltura(){
    const input= document.getElementById("InputladoIsoceles");
    const lado = input.value;
    const input2=document.getElementById("InputladoBase");
    const base =input2.value;

    const altura = Math.sqrt(lado-base*base/4);

    alert("la altura del triangulo es "+' '+ altura)
}