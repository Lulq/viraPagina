module.exports = (sequelize, DataTypes) => {
    const Autor = sequelize.define(
        'Autor', {
            autor: DataTypes.STRING
        },{
            tableName: 'autor',
            timestamps: false
        }
    )

    Autor.associate = (models) => {
        Autor.belongsTo(models.Livro, {as:"livros", foreignKey: "autor_id"})
    }

    return Autor


}