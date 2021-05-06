const { Usuario } = require('../models')

module.exports = async (req, res, next) => {
    let { nome, login, senha } = req.body

    if (!nome || !login || !senha) {
        res.redirect('/usuarios/cadastro?acao=cadastro-usuario-require');

        // res.status(400).json({ erro: "Campo obrigatório não preenchido, verifique as informações e tente novamente." })
    } else {
        if (6 > senha.length || senha.length > 12) {
            res.status(400).json({ erro: "A senha deve conter entre 6 e 12 caracteres." })
        } else {
            let userLogin = await Usuario.findAll({ where : { login }})
            if (userLogin.length){
                res.status(400).json({ erro: "O usuário informado já foi cadastrado, escolhe um e-mail diferente ou tente recuperar sua senha."})
            } else {
               
                    next()
                }
                    
        }
    }
}