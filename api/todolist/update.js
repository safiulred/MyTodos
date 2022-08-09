const {Todo} = require('../../models')

module.exports = (req, res) => {
    const id = req.params.todoId

    if (!id) {
        res.status(404).send({status:'Not Found', message:`Todo with ID ${id} Not Found`, data: {}})
    }
    else {
        Todo.update({...req.body},{where:{id}})
        .then(async result=> {
            if (result.includes(0)) {
                res.status(404).send({status:'Failed', message:'Failed', data: {}})
            }
            else {
                const todo = await Todo.findOne({id})
                res.status(200).send({status:'Success', message:'Success', data: todo})
            }
        })
        .catch(err=>{
            res.status(500).send({status:"Failed"})
        })
    }
}