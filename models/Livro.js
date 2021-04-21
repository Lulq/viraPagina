module.exports = (sequelize, DataTypes) => {
    const Livro = sequelize.define(
        'Livro', {
            titulo: DataTypes.STRING,
            isbn : DataTypes.STRING,
            editora : DataTypes.STRING,
            ano : DataTypes.TIME,
            quantidade: DataTypes.INTEGER,
            conservacao: DataTypes.STRING,
            venda : DataTypes.INTEGER,
            troca : DataTypes.INTEGER,
            imagem : DataTypes.STRING,
            usuario_id : DataTypes.INTEGER,
            idioma_id : DataTypes.INTEGER,
            autor_id: DataTypes.INTEGER,
            genero_id : DataTypes.INTEGER
        }, {
            tableName: "livros",
            timestamps: false
        }
    )
    return Livro;

}