const {Activity} = require('../../models')

module.exports = (req, res) => {
    let body = req.body
    console.log('[INSERT BODY]', body)
    let {email, title} = body
    const dataInsert = {
        title:title,
        email: email?encodeURIComponent(body.email):null
    }

    console.log('[INSERT ACTIVITY] ', dataInsert)
    Activity.create(dataInsert)
    .then(result=>{
        res.status(201).send({status:'Success', data: result})
    })
    .catch(err=>{
        console.log('Err : ', err)
        res.status(400).send({
            status:"Bad Reques",
            code:400,
            message : err.message,
            data: {}
        })
    })
}