const { Genero , sequelize } = require('../models')

const generosController = {
    index: async (req, res) => {
        let generos = await Genero.findAll();
        return res.json(generos);
    },

    create: async (req, res) => {
        let { genero } = req.body;
        let novoGenero = await Genero.create({
            genero
        })
        return res.json(novoGenero)
    },
    
    update: async (req, res) => {
        let { genero } = req.body
        let editarGenero = await Genero.update(
            { genero },
            { where: {id : req.params.id}
        })
        return res.json(editarGenero)
    },
    
    delete: async (req, res) => {
        let { id } = req.params
        let deletarGenero = await Genero.destroy({
            where: { id }
        })
        return res.json(deletarGenero)
    }
}

module.exports = generosController