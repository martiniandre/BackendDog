const { Model, DataTypes} = require('sequelize');

class Dog extends Model{
    static init(sequelize){
        super.init({
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            name: DataTypes.STRING,
            breed:DataTypes.STRING,
            age:DataTypes.INTEGER,
            location: DataTypes.STRING,
        },{
            sequelize
        })
    }
}
module.exports = Dog