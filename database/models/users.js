const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {

    let user = sequelize.define('user', {
        firstname: {
            type: DataTypes.STRING,
            required: true,
        },
        lastname: {
            type: DataTypes.STRING,
            required: true,
        },
        username: {
            type: DataTypes.STRING,
            required: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                notEmpty: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        confirm_password: {
            type: DataTypes.VIRTUAL,
        },
    },
        {
        hooks: {
            beforeCreate: function(user) {
                if (user.password != user.confirm_password) {
                    throw ("error password don't match!");
                }

                let salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            }
        }


    });
    return user;
};


