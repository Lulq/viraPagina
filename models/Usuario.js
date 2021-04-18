
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
        'Usuario', {
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            telefone: DataTypes.STRING,
            login: DataTypes.STRING,
            senha: DataTypes.STRING,
            livros_favoritos: DataTypes.STRING,
            livros_id: DataTypes.INTEGER,
            endereco_id: DataTypes.INTEGER

        }, {
            tableName: "usuarios",
            timestamps: false
        }
    )

    Usuario.associate = (models) => { //models recebe todos os models da pasta models
        // 1 usuário pode ter vários livros: relação 1:N
        // cria a relação de usuários com livros:
        Usuario.hasmany(models.Livro, {as: "livros", foreignKey: 'usuario_id'}) 

    }
    return Usuario;
}