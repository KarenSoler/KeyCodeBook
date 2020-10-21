const express = require('express') //Estamos utilizando Express en nuestro proyecto
const cors = require('cors')
const bodyParser = require('body-parser')

const {conectDB}=require('./db')
const app = express() //Se convierte a la constanteexpress en un objeto, por el cual vamos a poder trabajar

app.use(cors())
app.use(bodyParser.json())

conectDB()

require('./routes/user')(app)

app.listen(3000, () => {
    console.log('El servidor se levanto correctamente.')
})