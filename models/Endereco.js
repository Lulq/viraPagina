module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define(
        'Endereco',{
            rua: DataTypes.STRING,
            complemento: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
            cep: DataTypes.STRING
        }, {
            tableName: "endereco_usuario",
            timestamps: false
        }
    );
    return Endereco;
}


