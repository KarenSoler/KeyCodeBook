const BookModel = require('../models/book')

exports.create = (req, res) => {
    if(Object.entries(req.body).length == 0){
        return res.status(400).send({
            message: 'Todos los campos son obligatorios.'
        })
    }
}