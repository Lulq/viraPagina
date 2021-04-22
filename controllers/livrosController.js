const { Livro , sequelize } = require('../models')


const livrosController = {
    index: async ( req, res ) => {
        let livros = await Livro.findAll({
            include : ['usuario', 'idioma', 'genero']
        })
        return res.json(livros);
    },
    create: async (req, res) => {
        let {titulo, isbn, editora, ano, quantidade, conservacao, venda, troca, imagem, usuario_id, idioma_id, autor_id, genero_id } = req.body
        let novoLivro = await Livro.create({
            titulo, isbn, editora, ano, quantidade, conservacao, venda, troca, imagem, usuario_id, idioma_id, autor_id, genero_id
        })
        return res.json(novoLivro)
    },
    update: async (req, res) => {
        let {titulo, isbn, editora, ano, quantidade, conservacao, venda, troca, imagem, usuario_id, idioma_id, autor_id, genero_id } = req.body
        var alterarLivro = await Livro.update({
            titulo, isbn, editora, ano, quantidade, conservacao, venda, troca, imagem, usuario_id, idioma_id, autor_id, genero_id
        },{
            where : { id : req.params.id }
        })
        return res.json(alterarLivro)
    },
    delete: async (req, res) => {
        let { id } = req.params
        let deletarLivro = await Livro.destroy({
            where: { id }
        })
        return res.json(deletarLivro)
    }
}

module.exports = livrosController