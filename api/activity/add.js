const {Activity} = require('../../models')

module.exports = (req, res) => {
    let body = req.body
    console.log('[INSERT BODY]', body)
    let {email, title} = body
    let dataInsert = {
        title:title,
    }
    
    if (!title) {
        return res.status(400).send({
            status:"Bad Reques", 
            code:400,
            message: 'title cannot be null'
        })
    }

    if (email) {
        dataInsert = {
            ...dataInsert,
            email: encodeURIComponent(body.email)
        }
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
            message : err.message,
            code:400,
            data: {}
        })
    })
}