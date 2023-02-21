function calculo(){
let total = entrada1 * dolar
alert(`${entrada1} USD son ${total} ARS`)
}

alert("Simulador interactivo JS")
let entrada1
let dolar = 374
entrada1 = Number(prompt("¿Cuantos USD quiere convertir a ARS?"));
while (entrada1 != "ESC"){
    if(entrada1 >0){
        calculo()
        break;
    }else{
        alert("Entrada Incorrecta");
        break;
    };
};