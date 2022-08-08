const Router = require('express').Router()
const GetAll = require('./getall')
const Get = require('./get')
const Add = require('./add')
const Update = require('./update')
const Remove = require('./remove')

Router.get('/', GetAll)
Router.get('/:todoId', Get)
Router.post('/', Add)
Router.patch('/:todoId', Update)
Router.delete('/:todoId', Remove)

module.exports = Router