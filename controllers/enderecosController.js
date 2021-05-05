const { Endereco_usuario, sequelize } = require('../models')

const enderecosController = {
    // view adicionar endereço
    cadastro_endereco: async (req, res) => {
        res.render('reg-user-endereco')
    },

    index: async (req, res) => {
        let enderecos = await Endereco_usuario.findAll();
        return res.json(enderecos);
    },


    create: async (req, res) => {
        let { id } = req.session.usuarioLogado
        let { rua, numero, complemento, bairro, cidade, estado, usuario_id, cep } = req.body;
        let novoEndereco = await Endereco_usuario.create({
            // rua, 
            // numero,
            // complemento, 
            bairro, 
            cidade, 
            estado,
            usuario_id : id  
            // cep
        })
        return res.json(novoEndereco)
    },
    
    update: async (req, res) => {
        let novaInfo = req.body
        let editarEndereco = await Endereco_usuario.update(novaInfo,
            { 
                where: {id : req.params.id}
            }
        )
        console.log(editarEndereco)
        return res.json(editarEndereco)
    },
    
    delete: async (req, res) => {
        let { id } = req.params
        let deletarEndereco = await Endereco_usuario.destroy({
            where: { id }
        })
        return res.json(deletarEndereco)
    }
}

module.exports = enderecosController