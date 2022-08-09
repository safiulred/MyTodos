const {Todo} = require('../../models')

module.exports = (req, res) => {
    let payload = req.body
    console.log('[BODY ADD TODO] ', payload)
    
    Todo.create({...payload})
    .then(result=>{
        res.status(201).send({status:"Success", data:result})
    })
    .catch(err=>{
        console.log('[ERR ADD TODO] ', err)
        res.status(400).send({
            status:"Bad Request", 
            code:400,
            message : err.message,
            data: {}
        })
    })
}