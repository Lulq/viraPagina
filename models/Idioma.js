module.exports = (sequelize, DataTypes) => {
    const Idioma = sequelize.define(
        'Idioma',{
            idioma: DataTypes.STRING
        }, {
            tableName: "idioma",
            timestamps: false
        }
    );
    return Idioma;
}