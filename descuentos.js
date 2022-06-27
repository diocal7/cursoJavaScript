const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

function descuento(){
    
  

    const price=document.getElementById("InputPrice");
    const precioFinal=document.getElementById("PriceFinal");
    const inputCoupon= document.getElementById("InputCoupon");
    const couponValue=inputCoupon.value;
    
    const priceValue=price.value;
    let descuento;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;



    };

    const userCoupon = coupons.find(isCouponValueValid);
    if (!userCoupon) {
        alert("El cupón " + couponValue + "no es válido");
    }
    
    
    
    switch(couponValue){

        case coupons[0]:
        descuento= 10;
        
        break;
        case coupons[1]:
            descuento=20;
        break;
        case coupons[2]:
            descuento=30;
        break;
    
    }
    

    
const resultado=(priceValue - (priceValue*descuento)/100);

return precioFinal.innerText= "el descuento es " + resultado ;







}

