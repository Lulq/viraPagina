const { Livro } = require('../models')


module.exports = async (req, res, next) => {
    let { titulo } = req.body

    let tituloLivro = await Livro.findAll({ where: { titulo } })
  
    if (tituloLivro.length) {
        res.status(400).json({ erro: "O livro que você está tentando inserir já existe em nosso sistema." })

    }else{
             next()
         }
}