const express = require('express') //Estamos utilizando Express en nuestro proyecto
const cors = require('cors')
const bodyParser = require('body-parser')

const {conectDB}=require('./db')
const app = express() //Se convierte a la constante express en un objeto, por el cual vamos a poder trabajar

app.use(cors())
app.use(bodyParser.json())

conectDB() //Estamos ejecutando el modulo de nuestra conexión a la DB.

require('./routes/user')(app)
require('./routes/genre')(app)

app.listen(3000, () => {
    console.log('El servidor se levanto correctamente.')
})