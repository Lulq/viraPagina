module.exports = (sequelize, DataTypes) => {
    const Genero = sequelize.define(
        'Genero',{
            genero: DataTypes.STRING
        }, {
            tableName: "genero",
            timestamps: false
        }
    )

    Genero.associate = (models) => {
        // mais de um genero pode ser associado a mais de um livro
        Genero.hasMany(models.Livro, {as:"livros", foreignKey: 'genero_id'})

    }
    
    return Genero;
}