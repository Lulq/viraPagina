const { Idioma, sequelize } = require('../models')

const idiomasController = {
    index: async (req, res) => {
        let idiomas = await Idioma.findAll();

        return res({ idiomas : idiomas});
    },

    create: async (req, res) => {
        let { idioma } = req.body;
        let novoIdioma = await Idioma.create({
            idioma
        })
        return res.json(novoIdioma)
    },
    
    update: async (req, res) => {
        let { idioma } = req.body
        let editarIdioma = await Idioma.update(
            {idioma},
            { where: {id : req.params.id}
        })
        return res.json(editarIdioma)
    },
    
    delete: async (req, res) => {
        let { id } = req.params
        let deletarIdioma = await Idioma.destroy({
            where: { id }
        })
        return res.json(deletarIdioma)
    }
}

module.exports = idiomasController