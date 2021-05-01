const { Idioma, sequelize } = require('../models');


const idiomasController = {
    index: async (req, res) => {
        let idioma = await Idioma.findAll();
        return res.json(idioma);
    },

    create: async (req, res) => {
        let { idioma } = req.body;
        let novoIdioma = await Idioma.create({
            idioma
        })
        return res.json(novoIdioma)
    },

    update: async (req, res) => {
        const { idioma } = req.body
        let { id } = req.params
        let alteraIdioma = await Idioma.update({
            idioma
        }, {
            where: { id }
        })
        return res.json(alteraIdioma)
    },
    delete: async (req, res) => {
        let { id } = req.params
        let deletarIdioma = await Idioma.destroy({
            where: { id }
        })

        return res.json(deletarIdioma)
    }


}

module.exports = idiomasController;