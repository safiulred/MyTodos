'use strict'
module.exports = (sequelize, DataTypes) => {
    const Activity = sequelize.define('Activity',{
        email: DataTypes.STRING,
        title: DataTypes.STRING
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