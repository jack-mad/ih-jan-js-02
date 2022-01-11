console.log("hola mundo")

//funcion declarativa
//function nombre(parametros){ return ;}

function saludar(idioma){
    switch (idioma) {
        case "english":
            return "hello world"
        case "chinese":
            return "ni hao"
        case "spanish":
            return "hola mundo"
    
        default:
            return "no se especifico idioma"
    }
}

//invocacion
const res1 = saludar("chinese");
const res2 = saludar();
const res3 = saludar("spanish");

console.log(res1)
console.log(res2)
console.log(res3)

//funciones de expresion
// a. normal
const despedirse = function(nombre){
    return `Me dio gusto verte ${nombre}`
}
console.log(despedirse("sam"))

//b. flecha
// completa
const gritar = () => {
    return "se me va a mojar la ropa!"
}
console.log(gritar())
//sintetizada
//debe cumplir con una condicion, solo tener una sentencia( una sola linea de codigo dentro de la funcion )
//retorno implicito
const gritarDos = () =>  "aguas! aguas!";
console.log(gritarDos())