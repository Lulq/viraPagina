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

    Livro.associate = (models) => { //models recebe todos os models da pasta models
       
        // cria a relação de usuários com livros:
        // varios livros de um usuario
        Livro.belongsTo(models.Usuario, {as: "usuario", foreignKey: 'usuario_id'}) 
        // livro pode ter mais de um autor
        Livro.belongsTo(models.Autor, {as:"autor", foreignKey: "autor_id"})
        // mais de um livro pode ser associado a um idioma N:1
        Livro.belongsTo(models.Idioma, {as:"idioma", foreignKey: "idioma_id"})
        // varios livros de um mesmo genero
        Livro.belongsTo(models.Genero, {as:"genero", foreignKey: "genero_id"})


    }

    return Livro;

}