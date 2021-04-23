const { Livro } = require('../models')

module.exports = async (req, res, next) => {
    let { titulo, ano,  quantidade, venda, troca, conservacao, usuario_id, idioma_id, autor_id } = req.body

    if(!titulo || !quantidade || !conservacao || !usuario_id){
        res.status(400).json({ erro: "Campo obrigatório não preenchido, verifique as informações e tente novamente."}) 
    }else {
        let tituloLivro = await Livro.findAll({ where : {titulo}})
        if (tituloLivro.length) {
            res.status(400).json({ erro: "O livro que você está tentando inserir já está cadastrado em nosso sistema."})
        }else{
            next()
        }
    }
}