module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define(
        'Endereco',{
            rua: DataTypes.STRING,
            complemento: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
            usuario_id: DataTypes.INTEGER,
            cep: DataTypes.STRING
        }, {
            tableName: "endereco_usuario",
            timestamps: false
        }
    )
    Endereco.associate = (models) => { //models recebe todos os models da pasta models
        // 1 usuário pode ter vários livros: relação 1:N
        // cria a relação de usuários com livros:
        Endereco.belongsTo(models.Usuario, {as: "endereco_usuario", foreignKey: 'usuario_id'}) 
        
    }
    
    return Endereco;
}


