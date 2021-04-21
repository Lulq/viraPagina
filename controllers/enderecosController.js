const { Endereco , sequelize } = require('../models');


const enderecosController = {
    index: async (req, res) => {
        let enderecos = await Endereco.findAll();
        return res.json(enderecos);
    },

    create: async (req, res) => {
        let { rua, complemento, bairro, cidade, estado, cep } = req.body;
        let novoEndereco = await Endereco.create({
            rua,
            complemento,
            bairro,
            cidade,
            estado,
            cep
        })
        return res.json(novoEndereco)
    },

    update: async (req,res) => {
        let { rua, complemento, bairro, cidade, estado, cep } = req.body;
        let {id} = req.params
        let alteraEndereco = await Endereco.update({
            rua,
            complemento,
            bairro,
            cidade,
            estado,
            cep
        }, {
            where: {id}
        })
        return res.json(alteraEndereco)
    },
    delete: async (req,res) => {
        let {id} = req.params
        let deletarEndereco = await Endereco.destroy({
            where: {id}
        })

        return res.json(deletarEndereco)
    }
    

}

module.exports = enderecosController;