module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
        "Usuario", {
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            telefone: DataTypes.STRING,
            login: DataTypes.STRING,
            senha: DataTypes.STRING,
            livros_id: DataTypes.INTEGER,
            imagem: DataTypes.STRING,
            endereco_id: DataTypes.INTEGER

        }, {
            tableName: "usuarios",
            timestamps: false
        }
    )
    return Usuario;
}