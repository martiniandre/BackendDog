const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')
class User extends Model {
    static init(sequelize){
        super.init({
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            name:DataTypes.STRING,
            email:DataTypes.STRING,
            hash_pass:DataTypes.STRING,
            location:DataTypes.STRING,
        },{
            sequelize
        })
  };
}

module.exports = User;