const UserModel = require('../models/user')

exports.create = (req, res) => {

    if(Object.entries(req.body).length==0{
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }

    const user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email:  req.body.email,
        password: req.body.password,
        role: req.body.role,
        birthDate: req.body.birthDate,
        age: req.body.age
    })

    user.save()
    .then((dataUser) => {res.send(dataUser)})
    .catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}

exports.update=(req, res)=>{
    if(Object.entries(req.body).length==0{
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email:  req.body.email,
            password: req.body.password,
            role: req.body.role,
            birthDate: req.body.birthDate,
            age: req.body.age
        }

    UserModel.findByIdAndUpdate(req.params.id, user)
    .then(
        (userUpdate) => {
            res.send(userUpdate)
        }
    )
    .catch(
        (error) => {
            res.status(500).send({
                message: error.message
            })
        }
    )
}
