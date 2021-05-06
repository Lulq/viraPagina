const { Livro , Autor, Idioma, Genero, Usuario, sequelize } = require('../models')

const autoresController = {
    index: async (req, res) => {
        let autores = await Autor.findAll();
        return res.json(autores);
    },

    addAutor : async (req, res) => {
        return res.render('add-autor')
    },

    added : async (req, res) => {
        return res.render('added-autor')
    },

    create: async (req, res) => {
        const autores = await Autor.findAll()
        const generos = await Genero.findAll()
        const idiomas = await Idioma.findAll()
        let { autor } = req.body;
        const novoAutor = await Autor.create({
            autor
        })
       
        return res.render('added-autor',{novoAutor, autores, generos, idiomas})
      
    },
    
    update: async (req, res) => {
        let { autor } = req.body
        let editarAutor = await Autor.update(
            {autor},
            { where: {id : req.params.id}
        })
        return res.json(editarAutor)
    },
    
    delete: async (req, res) => {
        let { id } = req.params
        let deletarAutor = await Autor.destroy({
            where: { id }
        })
        return res.json(deletarAutor)
    }
}

module.exports = autoresController