const { Usuario, sequelize } = require("../models")

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll();

        return res.json(usuarios);
    }
}

module.exports = usuariosController;