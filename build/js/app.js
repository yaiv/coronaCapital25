document.addEventListener('DOMContentLoaded', function(){
    crearGaleria;
})

function crearGaleria(){

    const galeria = document.querySelector('.galeria-imagenes') //se inyecta en esta clase 

    for (let i = 1; i <= 18; i++){
        const imagen = document.createElement('IMG')
        console.log(imagen);
    }

}