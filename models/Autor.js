module.exports = (sequelize, DataTypes) => {
    const Autor = sequelize.define(
        'Autor',{
            autor: DataTypes.STRING
        }, {
            tableName: "autor",
            timestamps: false
        }
    );
    return Autor;
}


