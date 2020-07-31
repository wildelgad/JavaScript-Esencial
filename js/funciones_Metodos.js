/* ********** Parámetros de Una Función ***********
function saludar(nombre, edad){
    console.log("hola: " + nombre);
    console.log("\nsu edad: " + edad);
    var resultado = nombre + " tiene " + edad + " años";
    return resultado;
}

var mensaje = saludar("yo", 100);
console.log(mensaje);
*/



/* ********** Inicializacion de Parámetros ***********/
/*
function contar(cantidad = 20){
    console.log('Total: ' + cantidad)
}
*/



/* ********** Parámetros  de tipo REST ***********/
/*
function cocinar(ingrediente1, ingrediente2, ...masIngredientes){
    console.log('El ingrediente 1 es: ' + ingrediente1);
    console.log('El ingrediente 2 es: ' + ingrediente2);
    console.log("Otro ingrediente es: " + masIngredientes);
}

cocinar("Pollo", "Tomate", "Arroz", "Frijoles", "Pescado");
*/




/* ********** Parámetros  de tipo SPREAD ***********/
/*
function cocinar(ingrediente1, ingrediente2, ingrediente3){
    console.log('El ingrediente 1 es: ' + ingrediente1);
    console.log('El ingrediente 2 es: ' + ingrediente2);
    console.log("El ingrediente 3 es: " + ingrediente3);
}


var ingredientesBase = ["Pollo,", "Tomate"]

cocinar(...ingredientesBase, "Arroz");
*/




/* ********** Funciones Anónimas ***********/

        //----- Forma 1 ------
/*
(
    function(){
        var mensaje = "Hola de nuevo";
        console.log(mensaje);
    }
)()


        //----- Forma 2 ------
var saludar = function(nombre){
    var mensaje = "Hola de nuevo " + nombre + " \n";
    return mensaje;
}
*/

