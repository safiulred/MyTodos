'use strict'
module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
		title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
		is_active: {
			type:DataTypes.BOOLEAN,
			defaultValue:true
		},
		priority: {
			type : DataTypes.ENUM(['very-high', 'hight','normal', 'low', 'very-low']),
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