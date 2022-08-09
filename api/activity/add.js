const {Activity} = require('../../models')

module.exports = (req, res) => {
    let payload = req.body
    let {email, title} = payload
    if (!email || !title) {
        res.status(400).send({status:'Failed', message:"Missing paramater", data:{}})
    }
    else {
        if (email) {
            email = encodeURIComponent(req.body.email)
            payload = {
                ...payload,
                email
            }
        }
        Activity.create(payload)
        .then(result=>{
            res.status(201).send({status:'Success', message:'Success', data: result})
        })
        .catch(err=>{
            console.log('Err : ', err)
            res.status(400).send({status:"Failed", message : "Failed", data: {}})
        })
    }
}