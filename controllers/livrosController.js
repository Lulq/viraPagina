const { Livro , sequelize } = require('../models')
const { v4 : uuidv4 } = require('uuid')
let uuid = uuidv4()


const livrosController = {
 
    index: async ( req, res ) => {
        let livros = await Livro.findAll({
            include : ['usuario', 'idioma', 'autor', 'genero']
        })
       
        return res.render('livros', { livros });
    },

    addBook : (req, res) => {
        return res.render('novo-livro')
    },

    buscar: async ( req, res ) => {
        return res.render('buscaLivros');
    },

    found: async (req, res) => {
        return res.render('livros-encontrados')
    },

    yourbooks: async (req, res) => {
        res.render('seus-livros')
    },

    livro: async ( req, res ) => {
        const { id } = req.params
        let livro = await Livro.findOne(
            {
                include : ['usuario', 'idioma', 'autor', 'genero'],
                where: { id }  
            })

        console.log(`Este é o ID recebido do url: ${id}`)
        console.log(JSON.stringify(livro, null, 2))
        
        return res.render('perfilLivro',{ livro  });  // renderiza a view que queremos, passando o objeto livro
    },

    gowpp: async (req, res) => {
        return res.render('gowpp')
    },

    create: async (req, res) => {
        let {titulo, isbn, editora, ano, quantidade, conservacao, venda, troca, imagem, usuario_id, idioma_id, autor_id, genero_id } = req.body
        let novoLivro = await Livro.create({
            id : uuid,
            titulo, 
            isbn, 
            editora, 
            ano, 
            quantidade, 
            conservacao, 
            venda, 
            troca, 
            imagem, 
            usuario_id, 
            idioma_id, 
            autor_id, 
            genero_id
        })

        return res.render('index', novoLivro)
    },
    update: async (req, res) => {
        let novaInfo = req.body
        let alterarLivro = await Livro.update( novaInfo,{ //exemplo
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