const Livro = require("./Livro")

module.exports = (sequelize, DataTypes) => {
    const Idioma = sequelize.define(
        'Idioma', {
            idioma: DataTypes.STRING
        },{
            tableName: 'idioma',
            timestamps: false
        }
    )
    
    Idioma.associate = (models) => {
        Idioma.belongsTo(models.Livro, {as:"livro", foreignKey: 'idioma_id'})

    }

    return Idioma
}