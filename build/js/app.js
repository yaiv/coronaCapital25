document.addEventListener('DOMContentLoaded', function(){
    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()
})

function navegacionFija(){
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    document.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        }else {
            header.classList.remove('fixed')
        }
    })

}
function crearGaleria(){

    const galeria = document.querySelector('.galeria-imagenes') //se inyecta en esta clase 
    const CANTIDAD_IMAGENES = 20

    for (let i = 1; i <= CANTIDAD_IMAGENES; i++){  //itera hasta que se llegue a las 18 imagenes de la galeria 
        const imagen = document.createElement('IMG') //Se genera la etiqueta de img
        imagen.src = `src/img/gallery/full/${i}.jpg` //Se pone la ruta de donde se va a trabajar con la imagen 
        imagen.alt = `Imagen de galeria ${i}` //se integra texto de la galeria 

        //evento handler  detecta donde se dio click en galeria 
        imagen.onclick = function(){
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)

    }

}

function mostrarImagen(i){
    //para generar la imagen 
    const imagen = document.createElement('IMG') //Se genera la etiqueta de img
    imagen.src = `src/img/gallery/full/${i}.jpg` //Se pone la ruta de donde se va a trabajar con la imagen 
    imagen.alt = `Imagen de galeria ${i}` //se integra texto de la galeria 


    //generar modal 

    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    //generar boton para cerrar

    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    //Se agrega al html 
    modal.appendChild(imagen)

    modal.appendChild(cerrarModalBtn)

    //Se agrega al HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden') //se desabilita scroll desde globales
    body.appendChild(modal)


}

//para cerrar el modal 

function cerrarModal(){
    const modal = document.querySelector('.modal')
    //Se agrega animacion para retrazar por medio segundo
    modal.classList.add('fade-out')

    setTimeout(() => {
        modal?.remove() 

        //para recuperar el scroll 
        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden') //Hace que la clase aparezca y desaparezca 
    }, 500);
}


function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(window.scrollY >= (sectionTop - sectionHeight / 4 ) ) {
                actual = section.id
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('active')
            }
        })
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}