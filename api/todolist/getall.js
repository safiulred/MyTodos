const {Todo ,Activity} = require('../../models')

module.exports = (req, res) => {
    const {activity_group_id} = req.query
    Todo.findAll({
        where : {activity_group_id:activity_group_id},
        order :[['id','ASC']]
    })
    .then(result=>{
        res.status(200).send({status:"Success",message:"Success",data:result})
    })
    .catch(err=>{
        res.status(500).send({status:"Failed", message:'Failed'})
    })
}