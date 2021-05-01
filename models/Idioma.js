module.exports = (sequelize, DataTypes) => {
    const Idioma = sequelize.define(
        'Idioma',{
            idioma: DataTypes.STRING
        }, {
            tableName: "idioma",
            timestamps: false
        }
    )

    Idioma.associate = (models) => {
        // um idioma pode ser associado a mais de um livro, mas um livro só pode ter um idioma 
        Idioma.hasMany(models.Livro, {as:"livros", foreignKey: 'idioma_id'})

    }
    return Idioma;
}