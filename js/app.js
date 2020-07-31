"use strict"

//alert("Hola, desde un archivo externo");
console.log("hola de consola desde archivo externo");

var persona = {
    nombre: 'sergio',
    twitter: 'yacafx'
}

var personas = [
    {nombre: 'Hugo', twitter: 'dcHugo'},
    {nombre: 'Paco', twitter: 'dcPaco'},
    {nombre: 'Luis', twitter: 'dcLuis'},
    persona
]

var personaJSON = JSON.stringify(persona);

var nuevaPersona = JSON.parse(personaJSON);