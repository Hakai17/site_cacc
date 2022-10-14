const User = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        name: DataTypes.STRING(40),
        email: DataTypes.STRING(40),
        password: DataTypes.STRING(16)
    }, {
        tableName: 'users'
    })
}

module.exports = User