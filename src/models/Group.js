const { Model, DataTypes} = require('sequelize');

class Group extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            location: DataTypes.STRING,
            breeds:DataTypes.ARRAY(DataTypes.STRING),
            phone:DataTypes.STRING
        },{
            sequelize
        })
    }
}
module.exports = Group