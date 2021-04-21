const { Livro , sequelize } = require('../models')


const livrosController = {
    index: async ( req, res ) => {
        let livros = await Livro.findAll()
        return res.json(livros);
    }
}

module.exports = livrosController