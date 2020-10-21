const mongoose = require('mongoose')

const conectDB = () => {
    mongoose.connect('mongodb+srv://Karen:Karen-2020@karen.f3qgy.mongodb.net/KeyCodeBook?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
        if (error) {
            console.log('Error: ', error)
        }
        else {
            console.log('Nos conectamos a la Bd.')
        }
    })
}

module.exports= { conectDB }