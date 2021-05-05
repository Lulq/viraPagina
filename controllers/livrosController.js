const { Livro , Autor, Idioma, Genero, Usuario, sequelize } = require('../models')
const { v4 : uuidv4 } = require('uuid')
const { user } = require('./usuariosController')
let uuid = uuidv4()


const livrosController = {
 
    index: async ( req, res ) => {
        let livros = await Livro.findAll({
            include : ['usuario', 'idioma', 'autor', 'genero']
        })
       
        return res.render('livros', { livros });
    },

    addBook : async (req, res) => {

        const autores = await Autor.findAll()
        const generos = await Genero.findAll()
        const idiomas = await Idioma.findAll()
        console.log(autores)
        return res.render('novo-livro', {autores, generos, idiomas})
    },

    buscar: async ( req, res ) => {
        return res.render('buscaLivros');
    },

    found: async (req, res) => {
        return res.render('livros-encontrados')
    },

    yourbooks: async (req, res) => {
        const { id } = req.session.usuarioLogado
        let seusLivros = await Livro.findAll({ 
            where: {usuario_id : id }
        })

        return res.render('seus-livros', {seusLivros} )
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
        const { id } = req.session.usuarioLogado
                
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
            usuario_id : id, 
            idioma_id, 
            autor_id, 
            genero_id
        })

        console.log(`Este é o Usuario Logado ${JSON.stringify(user)}`)

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
        let { idlivro } = req.body
        let deletarLivro = await Livro.destroy({
            where: { id : idlivro  }
        })
        return res.redirect('/livros/seus_livros')
    }
}

module.exports = livrosController