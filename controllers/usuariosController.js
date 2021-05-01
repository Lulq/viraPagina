const { Usuario , sequelize } = require('../models');
const bycrypt = require('bcryptjs')
const {v4: uuidv4} = require('uuid');
let uuid = uuidv4();

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll({
            include:['livros', 'endereco_usuario']
        });
        return res.json(usuarios);
    },

    create: async (req, res) => {
        let { nome, cpf, telefone, login, senha, livros_favoritos, imagem } = req.body;

        let senhaCrypt = bycrypt.hashSync(senha,10)
        
        let novoUsuario = await Usuario.create({
            id: uuid,
            nome,
            cpf,
            telefone,
            login,
            senha: senhaCrypt,
            livros_favoritos,
            imagem

        })
        return res.json(novoUsuario)
    },

    update: async (req, res) => {
        const {nome, cpf, telefone, login, senha, livros_favoritos, imagem } = req.body
        var alterarUsuario = await Usuario.update({
            nome,
            cpf,
            telefone,
            login,
            senha,
            livros_favoritos,
            imagem
        },{
            where: { id : req.params.id } 
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