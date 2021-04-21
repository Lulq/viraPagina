module.exports = (sequelize, DataTypes) => {
    const Livro = sequelize.define(
        'Livro', {
            nome: DataTypes.STRING,
            isbn : DataTypes.STRING,
            editora : DataTypes.STRING,
            ano : DataTypes.TIME,
            quantidade: DatyTypes.INT,
            conservacao: DataTypes.STRING,
            venda : DataTypes.INTEGER,
            troca : DataTypes.INTEGER,
            Imagem : DataTypes.STRING,
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