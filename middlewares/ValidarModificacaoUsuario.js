const { Usuario } = require('../models')

module.exports = async (req, res, next) => {
    let { login , cpf } = req.body

    let userLogin = await Usuario.findAll({ where: { login } })
    
    if (userLogin.length) {
        res.status(400).json({ erro: "O e-mail informado já está cadastrado com outro usuário, escolha um e-mail diferente ou tente recuperar sua senha."})
    }else{
        let userCpf = await Usuario.findAll({ where: { cpf }})
        if (userCpf.length){
            res.status(400).json({ erro: "CPF já cadastrado, verirfique as informações e tente novamente."})
        }else{
            next()
        }

    }
}

//TODO concertar este middleware que não deixa modificar apens cpf ou apenas login.