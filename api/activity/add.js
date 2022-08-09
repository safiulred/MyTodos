const {Activity} = require('../../models')

module.exports = (req, res) => {
    let payload = req.body
    console.log('[INSERT BODY]', payload)
    let {email, title} = payload
    let dataInsert = {
        title:title,
    }
    
    if (!title) {
        return res.status(400).send({
            status:"Bad Request", 
            code:400,
            message: 'title cannot be null'
        })
    }

    if (email) {
        let arr = email.split('@')
        dataInsert = {
            ...dataInsert,
            email: `${encodeURIComponent(arr[0])}${arr[1]}`
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
            status:"Bad Request",
            message : err.message,
            code:400,
            data: {}
        })
    })
}