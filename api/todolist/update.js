const {Todo} = require('../../models')

module.exports = async (req, res) => {
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
        Todo.update({...req.body},{where:{id:params.id}})
        .then(async result=> {
            console.log(result)
            if (result[0]===0) {
                res.status(404).send({
                    status:'Not Found',
                    message : `Todo with ID ${params.id} Not Found`,
                    code:404
                })
            }
            else {
                const todo = await Todo.findOne({where:{id:params.id}})
                res.status(200).send({
                    status:"Success", 
                    code:200,
                    data: todo
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
    
    // const cekData = await Activity.findOne({where:{id:params.id}})
    // if (!cekData) {
    //     res.status(404).send({
    //         status: "Not Found",
    //         message: `Todo with ID ${params.id} Not Found`,
    //         code: 404
    //     })
    // }
    // else {
    //     Todo.update({...req.body},{where:{id:params.id}})
    //     .then(async result=> {
    //         const todo = await Todo.findOne({where:{id:params.id}})
    //         res.status(200).send({
    //             status:"Success", 
    //             code:200,
    //             data: todo
    //         })
    //     })
    //     .catch(err=>{
    //         res.status(400).send({
    //             status:"Bad Reques", 
    //             code:400,
    //             message : err.message,
    //             data: {}
    //         })
    //     })
    // }
}