const routes = require('express').Router()

const {
    findAll,
    save
}=require('./../controllers/controll-book')


routes.get('/',findAll)
routes.post('/:id',save)

module.exports = routes