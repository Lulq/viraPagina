
const { Usuario, sequelize } = require('../models');
const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid');
let uuid = uuidv4()

const usuariosController = {

    // Renderizar a home page
    homePage : (req, res, next) => {
        return res.render('index')
    },

    about: (req, res) => {
        return res.render('sobre')
    },

    login: async(req, res, next) => {

        const {acao} = req.query;

        let mensagem = "";

        if (acao == "cadastro-usuario-sucesso"){
            mensagem = "Tudo certo, sua conta foi criada!";
        }
        return res.render('login', {mensagem})
    },

    //session logado

    auth: async (req, res) => {
        const { login, senha} = req.body
        const user = await Usuario.findOne({
            where: { login }
        })
        if (user && bcrypt.compareSync(senha, user.senha)){
            req.session.usuarioLogado = user
            return res.redirect('/usuarios/perfil')

        }else {
            console.log('login falhou')
            return res.redirect('/usuarios/login')
        }
    },

    user: async ( req, res ) => {
        const { id } = req.session.usuarioLogado // mudei de req params pra session usuarioLogado
        let usuario = await Usuario.findOne(
            {
                include : ['endereco_usuario', 'livros'],
                where: { id }  
            })

        // console.log(`Este é o ID recebido do url: ${id}`)
        // console.log(JSON.stringify(usuario, null, 2))
        
        return res.render('perfil',{ usuario });  // renderiza a view que queremos, passando o objeto livro
    },

    //logout
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/')
    },

    index: async (req, res) => {
        let usuarios = await Usuario.findAll(
            { include: ["livros", "endereco_usuario" ] }
        );
        return res.json(usuarios);
    },

    create: async (req, res) => {
        let { nome, cpf, telefone, login, senha, livros_favoritos, imagem } = req.body;
        
        let senhaCrypt = bcrypt.hashSync(senha, 10)
        
        let novoUsuario = await Usuario.create({
            id : uuid,
            nome,
            telefone,
            login,
            livros_favoritos,
            senha: senhaCrypt,
        }) 

        req.body.usuarioid = JSON.stringify({idusuario : novoUsuario.id})
        console.log(`Id Novo do controller USUARIO: ${novoUsuario.id}`)
        // return res.json(novoUsuario)
        return res.render('reg-user-endereco', {novoUsuario})
        
    },

    cadastro_usuario: async (req, res) => {
        
        const {acao} = req.query;

        let mensagem = "";

        if (acao == "cadastro-usuario-require"){
            mensagem = "Campo obrigatório não preenchido, verifique as informações e tente novamente.";
        }else if (acao == "cadastro-usuario-password"){
            mensagem = "A senha deve conter entre 6 e 12 caracteres." 
        }else if (acao == "cadastro-usuario-existingmail"){
            mensagem = "O usuário informado já foi cadastrado, escolha um e-mail diferente"
        }
                
        res.render('reg-user',{mensagem})
    },
    
    update: async (req, res) => {
        const { nome, cpf, telefone, login, senha, livros_favoritos, imagem } = req.body
        const senhaCrypt = bcrypt.hashSync(senha, 10)

        var alterarUsuario = await Usuario.update({
            nome,
            cpf,
            telefone,
            login,
            senha: senhaCrypt,
            livros_favoritos,
            imagem            
        }, {
            where: { id: req.params.id }
        })
        return res.json(alterarUsuario)
    },
    delete: async (req, res) => {
        let { id } = req.params
        let deletarUsuario = await Usuario.destroy({
            where: { id }
        })
        return res.json(deletarUsuario)

    }
}

module.exports = usuariosController;