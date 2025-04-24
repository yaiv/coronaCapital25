import { src, dest, watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'


const sass = gulpSass(dartSass)

//Genera copia de archivo y lo deja listo para llamar desde build
export function js( done ) {
    src('src/js/app.js')
        .pipe( dest('build/js') ) 

    done()
}

export function css( done ){
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/css', {sourcemaps: '.'}) )

    done()
}

export function dev(){
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)

}

export default series( js, css, dev )


// /*
// Configuracion de gulpfile detallada

// // Importa módulos esenciales para manejar rutas y sistemas de archivos
// import path from 'path';
// import fs from 'fs';

// // Importa glob para realizar búsquedas de patrones en el sistema de archivos
// import { glob } from 'glob';

// // Importa funciones de Gulp para manejar tareas automatizadas
// import { src, dest, watch, series } from 'gulp';

// // Configura Sass para compilar archivos SCSS, usando la implementación de Dart Sass
// import * as dartSass from 'sass';
// import gulpSass from 'gulp-sass';
// const sass = gulpSass(dartSass);

// // Importa gulp-terser para minificar archivos JavaScript
// import terser from 'gulp-terser';

// // Importa sharp para procesar imágenes (redimensionar y convertir formatos)
// import sharp from 'sharp';

// // Tarea para minificar JavaScript
// export function js(done) {
//     // Define la fuente del archivo JS y el destino de salida
//     src('src/js/app.js')
//         .pipe(terser()) // Minifica el archivo JavaScript
//         .pipe(dest('build/js')); // Guarda el archivo minificado en la carpeta de salida

//     done(); // Indica que la tarea ha finalizado
// }

// // Tarea para compilar SCSS a CSS
// export function css(done) {
//     // Define la fuente del archivo SCSS y habilita los mapas de fuente para depuración
//     src('src/scss/app.scss', { sourcemaps: true })
//         .pipe(sass({
//             outputStyle: 'compressed' // Comprime el CSS resultante
//         }).on('error', sass.logError)) // Maneja errores de compilación Sass
//         .pipe(dest('build/css', { sourcemaps: '.' })); // Guarda el CSS con mapas de fuente en la carpeta de salida

//     done(); // Indica que la tarea ha finalizado
// }

// // Tarea para recortar imágenes a un tamaño específico
// export async function crop(done) {
//     // Define las carpetas de entrada y salida
//     const inputFolder = 'src/img/gallery/full';
//     const outputFolder = 'src/img/gallery/thumb';
//     const width = 250; // Ancho deseado para las imágenes
//     const height = 180; // Altura deseada para las imágenes

//     // Crea la carpeta de salida si no existe
//     if (!fs.existsSync(outputFolder)) {
//         fs.mkdirSync(outputFolder, { recursive: true });
//     }

//     // Filtra imágenes JPG en la carpeta de entrada
//     const images = fs.readdirSync(inputFolder).filter(file => {
//         return /\.(jpg)$/i.test(path.extname(file));
//     });

//     try {
//         // Redimensiona y guarda cada imagen en la carpeta de salida
//         images.forEach(file => {
//             const inputFile = path.join(inputFolder, file);
//             const outputFile = path.join(outputFolder, file);
//             sharp(inputFile)
//                 .resize(width, height, {
//                     position: 'centre' // Ajusta el recorte al centro
//                 })
//                 .toFile(outputFile); // Guarda el archivo redimensionado
//         });

//         done();
//     } catch (error) {
//         console.log(error); // Muestra errores en la consola
//     }
// }

// // Tarea para procesar y copiar imágenes a diferentes formatos
// export async function imagenes(done) {
//     const srcDir = './src/img'; // Carpeta fuente de las imágenes
//     const buildDir = './build/img'; // Carpeta destino
//     const images = await glob('./src/img/**/*{jpg,png}'); // Busca imágenes JPG y PNG

//     // Procesa cada imagen encontrada
//     images.forEach(file => {
//         const relativePath = path.relative(srcDir, path.dirname(file));
//         const outputSubDir = path.join(buildDir, relativePath);
//         procesarImagenes(file, outputSubDir); // Llama a la función para procesar imágenes
//     });

//     done();
// }

// // Función para procesar imágenes (copia y convierte a formatos como WebP y AVIF)
// function procesarImagenes(file, outputSubDir) {
//     if (!fs.existsSync(outputSubDir)) {
//         fs.mkdirSync(outputSubDir, { recursive: true }); // Crea la carpeta de salida si no existe
//     }

//     const baseName = path.basename(file, path.extname(file)); // Nombre base del archivo
//     const extName = path.extname(file); // Extensión del archivo
//     const outputFile = path.join(outputSubDir, `${baseName}${extName}`); // Archivo JPEG
//     const outputFileWebp = path.join(outputSubDir, `${baseName}.webp`); // Archivo WebP
//     const outputFileAvif = path.join(outputSubDir, `${baseName}.avif`); // Archivo AVIF

//     const options = { quality: 80 }; // Opciones de calidad para las imágenes
//     sharp(file).jpeg(options).toFile(outputFile); // Convierte y guarda como JPEG
//     sharp(file).webp(options).toFile(outputFileWebp); // Convierte y guarda como WebP
//     sharp(file).avif().toFile(outputFileAvif); // Convierte y guarda como AVIF
// }

// // Tarea para ejecutar el entorno de desarrollo
// export function dev() {
//     watch('src/scss/**/*.scss', css); // Observa cambios en archivos SCSS y ejecuta la tarea de CSS
//     watch('src/js/**/*.js', js); // Observa cambios en archivos JS y ejecuta la tarea de JavaScript
//     watch('src/img/**/*.{png,jpg}', imagenes); // Observa cambios en imágenes y ejecuta la tarea de procesamiento
// }

// // Tarea predeterminada que ejecuta todas las tareas en serie
// export default series(crop, js, css, imagenes, dev);

// */