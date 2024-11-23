let librosColeccion=[
    {
    nombre:"anatomia del chico perfecto ",
    cantidadDePagina: 36, 
     autor:"sugary_pale",
     genero: ["romance", "misterio","muertes","secretos"],
    disponible: "si se encuentra " ,
},
{
 nombre:"crueles instintos ",
    cantidadDePagina: 56, 
     autor:"ElenaaL04",
     genero: ["romance", "mafia","muertes","celos"],
    disponible:" si se  encuentra"  ,
}
]


let nuevoLibro={
    nombre:"perversas debilidades",
    cantidadDePagina:70,
    autor:"roseescritora1",
    genero:["romance","accion","asesinato","pasion"],
    disponible:"si se encuentra",


}
  function informacionLibro(librosColeccion){
    return "el libro " + (librosColeccion.nombre) + "tiene " + (librosColeccion.cantidadDePagina) + " paginas " + " fue escrito por " + (librosColeccion.autor) + " y es del genero es   " + (librosColeccion.genero) + " ." + (librosColeccion.disponible);

}

function imprimirLibro(informacionLibro){


}

function agregar(nuevoLibro){
    return librosColeccion.push(nuevoLibro);
}

agregar(nuevoLibro);


for (let index = 0; index < librosColeccion.length; index++) {
    console.log(informacionLibro(librosColeccion[index]));
    
}
// console.log(informacionLibro(librosColeccion));



    
    








