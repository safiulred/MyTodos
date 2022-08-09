const {Todo} = require('../../models')

module.exports = (req, res) => {
    let payload = req.body
    const {title, activity_group_id} = payload
    console.log('[BODY ADD TODO] ', payload)
    
    if (!title) {
        return res.status(400).send({
            status:"Bad Reques", 
            code:400,
            message: 'title cannot be null'
        })
    }
    
    if (!activity_group_id) {
        return res.status(400).send({
            status:"Bad Reques", 
            code:400,
            message: 'activity_group_id cannot be null'
        })
    }
    Todo.create({...payload})
    .then(result=>{
        return res.status(201).send({status:"Success", data:result})
    })
    .catch(err=>{
        console.log('[ERR ADD TODO] ', err)
        return res.status(400).send({
            status:"Bad Reques", 
            code:400,
            message : err.message,
            data: {}
        })
    })
}