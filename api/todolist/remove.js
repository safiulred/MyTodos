const {Todo} = require('../../models')

module.exports = (req, res) => {
    const id = req.params.todoId

    if (!id) {
        res.status(404).send({status:'Not Found', message:`Activity with ID ${id} Not Found`, data: {}})
    }
    else {
        Todo.destroy({where:{id}})
        .then(result=>{
            if (result===0) {
                res.status(404).send({status:'Not Found', message:`Activity with ID ${id} Not Found`, data: {}})
            }
            else {
                res.status(200).send({status:'Success', message:'Success', data: {}})
            }
        })
        .catch(err=>{
            res.status(500).send({status:"Failed"})
        })
    }
}