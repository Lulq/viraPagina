module.exports = (sequelize, DataTypes) => {
    const Endereco_usuario = sequelize.define(
        'Endereco_usuario', {
            rua: DataTypes.STRING,
            numero: DataTypes.INTEGER,
            complemento : DataTypes.STRING,
            bairro : DataTypes.STRING,
            cidade : DataTypes.STRING,
            estado: DataTypes.STRING,
            cep: DataTypes.STRING,
            usuario_id: DataTypes.INTEGER
           
        }, {
            tableName: "endereco_usuario",
            timestamps: false
        }
    )
    Endereco_usuario.associate = (models) => { //models recebe todos os models da pasta models
        // 1 usuário pode ter vários livros: relação 1:N
        // cria a relação de usuários com livros:
        Endereco_usuario.belongsTo(models.Usuario, {as: "endereco_usuario", foreignKey: 'endereco_id'}) ;
        
    }
    
    return Endereco_usuario;

}