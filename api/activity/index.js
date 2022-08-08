const Router = require('express').Router()

const GetAll = require('./getall')
const Get = require('./get')
const Add = require('./add')
const Update = require('./update')
const Remove = require('./remove')

Router.get('/', GetAll)
Router.get('/:groupId', Get)
Router.post('/', Add)
Router.patch('/:groupId', Update)
Router.delete('/:groupId', Remove)

module.exports = Router