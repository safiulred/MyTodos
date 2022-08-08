const {Todo} = require('../../models')

module.exports = (req, res) => {
    const id = req.params.todoId
    Todo.findOne({where:{id}})
    .then(result=>{
        if (result) {
            res.status(200).send({status:"Success",message:"Success",data:result})
        }
        else {
            res.status(404).send({status:'Failed', message:'Failed', data: result})
        }
    })
    .catch(err=>{
        res.status(500).send({status:"Failed", message:'Failed'})
    })
}