module.exports = (sequelize, DataTypes) => {
    const Genero = sequelize.define(
        'Genero',{
            genero: DataTypes.STRING
        }, {
            tableName: "genero",
            timestamps: false
        }
    );
    return Genero;
}