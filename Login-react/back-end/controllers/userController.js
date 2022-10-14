const { Router } = require('express')
const { User } = require('../models')

const router = Router();

// Register Route
router.post('/register', async (req, res) => {
    const {name, email, password} = req.body
    const user = await User.findOne({where: {email}})
    if(user !== null){
        res.send(null)
    }
    const newUser = await User.create({name, email, password})
    if(!newUser){
        throw new Error('Usuário não criado')
    }
    res.send(newUser)
})

// Login Route
router.post('/login', async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({where: {email}})
    if(user === null){
        res.send(null)
    } else if(user.password !== password){
        res.send(null)
    } else { 
        res.send(user)
    }
})

router.delete('/:id', async (req, res) => {
    await User.destroy({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: "Usuário deletado com sucesso"})
})

router.put('/:id', async (req, res) => {
    const {name, email, password} = req.body
    await User.update({name, email, password},
        {
            where: { id: req.params.id }
        })
    res.status(200).json({message: "Atualizado com sucesso"})
})

module.exports = router