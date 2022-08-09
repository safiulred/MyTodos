const {Todo} = require('../../models')
const {Op} = require('sequelize')

module.exports = (req, res) => {
    const params = req.params
    console.log(params)

    if (params.id===":id"){
        res.status(404).send({
            status:'Not Found',
            message : `Todo with ID ${params.id} Not Found`,
            code:404
        })
    }
    else {
        Todo.findOne({where:{id:params.id}})
        .then(result=>{
            if (result) {
                res.status(200).json({
                    status:"Success", 
                    data:result
                })
            }
            else {
                res.status(404).send({
                    status: "Not Found",
                    message: `Todo with ID ${params.id} Not Found`,
                    code: 404
                })
            }
        })
        .catch(err=>{
            res.status(400).send({
                status:"Bad Reques", 
                code:400,
                message : err.message,
                data: {}
            })
        })

    }
}