const {Todo} = require('../../models')

module.exports = (req, res) => {
    const id = req.params.todoId
    if (!id) {
        res.status(404).send({status:'Not Found', message:`Todo with ID ${id} Not Found`, data: {}})
    }
    else {
        Todo.findOne({where:{id}})
        .then(result=>{
            if (result) {
                res.status(200).send({status:"Success",message:"Success",data:result})
            }
            else {
                res.status(404).send({status:'Not Found', message:`Todo with ID ${id} Not Found`, data: {}})
            }
        })
        .catch(err=>{
            res.status(404).send({status:"Failed", message:'Failed', data:{}})
        })
    }
}