'use strict'
module.exports = (sequelize, DataTypes) => {
    const Activity = sequelize.define('Activity',{
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
        }
    },{
        paranoid:true
    })

    Activity.associate = function(models) {
        Activity.hasMany(models.Todo,{
            as : 'todo_items',
			foreignKey:'activity_group_id'
		})
	}

    return Activity
}