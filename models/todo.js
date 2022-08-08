'use strict'
module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
		title: DataTypes.STRING,
		is_active: {
			type:DataTypes.BOOLEAN,
			defaultValue:true
		},
		priority: {
			type : DataTypes.ENUM(['very-high', 'hight', 'medium', 'low', 'very-low']),
			defaultValue:'very-high'
		}
	}, {
		paranoid:true
	})

    Todo.associate = function(models) {
		Todo.belongsTo(models.Activity,{
			foreignKey: {
				fields: "activity_group_id"
			}
		})
	}
    return Todo
}