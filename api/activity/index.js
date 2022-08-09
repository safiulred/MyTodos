const Router = require('express').Router()

const GetAll = require('./getall')
const Get = require('./get')
const Add = require('./add')
const Update = require('./update')
const Remove = require('./remove')

Router.get('/', GetAll)
Router.get('/:id', Get)
Router.post('/', Add)
Router.patch('/:id', Update)
Router.delete('/:id', Remove)

module.exports = Router