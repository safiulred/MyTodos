const {Todo} = require('../../models')

module.exports = (req, res) => {
    const arg = Object.keys(req.body)
    const raw = arg[0].replace(/\n/gi, '')
    
    let payload = JSON.parse(raw)
    let {title, activity_group_id} = payload
    if (!title || !activity_group_id) {
        res.status(400).send({status:'Bad Request', message:"Bad Request", data: {}})
    }
    else {
        Todo.create({...payload})
        .then(result=>{
            res.status(201).send({status:'Success', message:'Success', data: result})
        })
        .catch(err=>{
            console.log('Err : ', err)
            res.status(400).send({status:"Bad Request", message: "Bad Request"})
        })
    }
}