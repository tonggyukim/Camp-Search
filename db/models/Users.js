module.exports= function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        uuid: {
            type: DataTypes.UUID,
            allowNull: false
        },
        trips: {
            type: DataTypes.STRING,
            allowNull: true
        },
        invitedTo: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    return User;
}