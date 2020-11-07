const { Model, DataTypes } = require('sequelize');

class UserDogs extends Model {
    static init(sequelize){
        super.init({
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            userID:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            dogID:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            favorited:DataTypes.BOOLEAN
        },{
            sequelize
        })
  };
}

module.exports = UserDogs;