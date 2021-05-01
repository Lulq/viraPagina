module.exports = (sequelize, DataTypes) => {
    const Autor = sequelize.define(
        'Autor',{
            autor: DataTypes.STRING
        }, {
            tableName: "autor",
            timestamps: false
        }
    )
    Autor.associate = (models) => {
        //um autor pode ser associado a vários livros
        Autor.hasMany(models.Livro, {as:"livros", foreignKey: "autor_id"})
    }
    ;
    return Autor;
}


