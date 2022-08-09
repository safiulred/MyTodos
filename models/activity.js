'use strict'
module.exports = (sequelize, DataTypes) => {
    const Activity = sequelize.define('Activity',{
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        paranoid:true
    })

    Activity.associate = function(models) {
        Activity.hasMany(models.Todo,{
			foreignKey:'activity_group_id'
		})
	}

    return Activity
}