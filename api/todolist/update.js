const {Todo} = require('../../models')

module.exports = (req, res) => {
    const id = req.params.todoId

    Todo.update({...req.body},{where:{id}})
    .then(async result=> {
        if (result.includes(0)) {
            res.status(200).send({status:'Success', message:'Success', data: null})
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