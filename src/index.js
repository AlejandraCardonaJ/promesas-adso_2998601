 //Funcion para simular la descarga de un archivo, utilizando promesas.

function descargarArchivo (){
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve ("📁 Archivo descargado con exito...")
        },5000)
    })
}

// Funcion con Async
async function ejecutar(){
    try {
        console.log("⌛ Descarga en proceso...");
        const respuesta = await descargarArchivo();
        console.log(respuesta);
    } catch (err) {
        console.error("✖️ Error al descargar el archivo...", err);
    }
}

ejecutar();

//Ejercicio, crear una promesa simple, esa promesa con lo que desemos, con un timepo de 
// 8 segundos, con un mensaje, que diga, promesa ejecutada con exito despues de 8 segundos. 

const mensaje = "🚀 Promesa ejecutada con exito";

function promesaConMensaje(mensaje){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mensaje)
        },8000)
    })
}

promesaConMensaje(mensaje)
    .then((mensaje) => {
    console.log(mensaje);
})

