module.exports = (sequelize, DataTypes) => {
    const Genero = sequelize.define(
        'Genero', {
            genero : DataTypes.STRING
        },{
            tableName: 'genero',
            timestamps: false
        }
    )
    Genero.associate = (models) => {
        Genero.belongsTo(models.Livro, {as:"livro", foreignKey: 'genero_id'})

    }
    return Genero
}