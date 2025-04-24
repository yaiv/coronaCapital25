document.addEventListener('DOMContentLoaded', function(){
    crearGaleria()
})

function crearGaleria(){

    const galeria = document.querySelector('.galeria-imagenes') //se inyecta en esta clase 
    const CANTIDAD_IMAGENES = 20

    for (let i = 1; i <= CANTIDAD_IMAGENES; i++){  //itera hasta que se llegue a las 18 imagenes de la galeria 
        const imagen = document.createElement('IMG') //Se genera la etiqueta de img
        imagen.src = `src/img/gallery/full/${i}.jpg` //Se pone la ruta de donde se va a trabajar con la imagen 
        imagen.alt = `Imagen de galeria ${i}` //se integra texto de la galeria 
        
        galeria.appendChild(imagen)

    }

}