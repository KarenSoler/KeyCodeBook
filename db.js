const mongoose = require('mongoose') //Paquete que permite la comunicación con nuestra BD.

const conectDB = () => {
    /*
       Método connect en mongoose => Permite conectarme a una DB, tine las siguientes opciones:
    -- useNewUrlParser: Analizar la información que se le quiere enviar a MongoDB. 
    -- useUnifiedTopology: Escuchar los llamados que hacemos a MongoDB y monitoreaque es lo que pasa.
    */
    mongoose.connect('mongodb+srv://Karen:Karen-2020@karen.f3qgy.mongodb.net/KeyCodeBook?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
        if (error) {
            console.log('Error: ', error)
        }
        else {
            console.log('Nos conectamos a la DB.')
        }
    })
}
/*module.exports: Nos permite exportar una función para que pueda ser utilizada en otra de nuestro proyecto. */
module.exports = { conectDB }