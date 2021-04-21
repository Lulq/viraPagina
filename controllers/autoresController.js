const { Autor , sequelize } = require('../models');


const autoresController = {
    index: async (req, res) => {
        let autores = await Autor.findAll();
        return res.json(autores);
    },

    create: async (req, res) => {
        let { autor } = req.body;
        let novoAutor = await Autor.create({
            autor
        })
        return res.json(novoAutor)
    },

    update: async (req,res) => {
        const {autor} = req.body
        let {id} = req.params
        let alteraAutor = await Autor.update({
            autor
        }, {
            where: {id}
        })
        return res.json(alteraAutor)
    },
    delete: async (req,res) => {
        let {id} = req.params
        let deletarAutor = await Autor.destroy({
            where: {id}
        })

        return res.json(deletarAutor)
    }
    

}

module.exports = autoresController;