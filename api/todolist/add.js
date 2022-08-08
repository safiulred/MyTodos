const {Todo} = require('../../models')

module.exports = (req, res) => {
    let payload = req.body
    let {email} = payload
    if (email) {
        email = encodeURIComponent(req.body.email)
        payload = {
            ...payload,
            email
        }
    }
    Todo.create(payload)
    .then(result=>{
        res.status(200).send({status:'Success', message:'Success', data: result})
    })
    .catch(err=>{
        res.status(500).send({status:"Failed"})
    })
}