const {Todo} = require('../../models')

module.exports = (req, res) => {
    let {title, activity_group_id} = req.body
    if (!title || !activity_group_id) {
        res.status(404).send({status:'Failed', message:"Missing paramater"})
    }
    else {
        Todo.create({...req.body})
        .then(result=>{
            res.status(200).send({status:'Success', message:'Success', data: result})
        })
        .catch(err=>{
            console.log('Err : ', err)
            res.status(500).send({status:"Failed"})
        })
    }
}