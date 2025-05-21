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