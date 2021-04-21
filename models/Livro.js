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
        // 1 usuário pode ter vários livros: relação 1:N
        // cria a relação de usuários com livros:
        Livro.belongsTo(models.Usuario, {as: "usuario", foreignKey: 'usuario_id'}) 
        Livro.hasMany(models.Autor, {as:"autor", foreignKey: "autor_id"})
        Livro.hasMany(models.Idioma, {as:"idioma", foreignKey: "idioma_id"})
        Livro.hasMany(models.Genero, {as:"genero", foreignKey: "genero_id"})


    }

    return Livro;

}