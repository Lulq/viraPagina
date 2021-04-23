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
            imagem: DataTypes.STRING,
            endereco_id: DataTypes.INTEGER,
            created_at: DataTypes.TIME,
            updated_at: DataTypes.TIME

        }, {
            tableName: "usuarios",
            timestamps: true,
            createdAt: false,
            updatedAt: false

        }
    )

    Usuario.associate = (models) => { //models recebe todos os models da pasta models
        // 1 usuário pode ter vários livros: relação 1:N
        // cria a relação de usuários com livros:
        Usuario.hasMany(models.Livro, {as: "livros", foreignKey: 'usuario_id'}) ;
        Usuario.hasMany(models.Endereco_usuario, {as:"endereco_usuario", foreignKey: "usuario_id"})
    }
    return Usuario;
}