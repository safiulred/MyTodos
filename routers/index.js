const Router = require('express').Router()

const Activity = require('../api/activity')
const Todolist = require('../api/todolist')

Router.use('/activity-groups', Activity)
Router.use('/todo-items', Todolist)

module.exports = Router