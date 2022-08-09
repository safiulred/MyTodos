const {Todo} = require('../../models')

module.exports = (req, res) => {
    const id = req.params.todoId
    Todo.findOne({where:{id:id}})
    .then(result=>{
        if (result) {
            res.status(200).send({status:"Success", data:result})
        }
        else {
            res.status(404).send({
                status: "Not Found",
                message: `No record found for id ${id}`,
                code: 404,
                "errors": {}
            })
        }
    })
    .catch(err=>{
        res.status(400).send({
            status:"Bad Request", 
            code:400,
            message : err.message,
            data: {}
        })
    })
}