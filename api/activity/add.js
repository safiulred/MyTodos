const {Activity} = require('../../models')

module.exports = (req, res) => {
    const arg = Object.keys(req.body)
    const raw = arg[0].replace(/\n/gi, '')
    
    let payload = JSON.parse(raw)
    let {email, title} = payload
    if (!email || !title) {
        res.status(400).send({status:'Not Found', message:"Not Found", data:{}})
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
            res.status(400).send({status:"Not Found", message : "Not Found", data: {}})
        })
    }
}