const { Genero , sequelize } = require('../models');


const generosController = {
    index: async (req, res) => {
        let genero = await Genero.findAll();
        return res.json(genero);
    },

    create: async (req, res) => {
        let { genero } = req.body;
        let novoGenero = await Genero.create({
            genero
        })
        return res.json(novoGenero)
    },

    update: async (req,res) => {
        const {genero} = req.body
        let {id} = req.params
        let alteraGenero = await Genero.update({
            genero
        }, {
            where: {id}
        })
        return res.json(alteraGenero)
    },
    delete: async (req,res) => {
        let {id} = req.params
        let deletarGenero = await Genero.destroy({
            where: {id}
        })

        return res.json(deletarGenero)
    }
    

}

module.exports = generosController;