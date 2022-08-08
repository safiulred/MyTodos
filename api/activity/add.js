const {Activity} = require('../../models')

module.exports = (req, res) => {
    let payload = req.body
    let {email, title} = payload
    if (!email || !title) {
        res.status(404).send({status:'Failed', message:"Missing paramater"})
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
            res.status(200).send({status:'Success', message:'Success', data: result})
        })
        .catch(err=>{
            res.status(500).send({status:"Failed"})
        })
    }
}