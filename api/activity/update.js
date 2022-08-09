const {Activity} = require('../../models')

module.exports = (req, res) => {
    const id = req.params.groupId
    const body = req.body

    console.log('[UPDATE ACTIVITY] ', body)
    Activity.update({...body},{where:{id:id}})
    .then(async result=> {
        if (result.includes(0)) {
            res.status(404).send({
                status: "Not Found",
                message: `No record found for id ${id}`,
                code: 404
            })
        }
        else {
            const activity = await Activity.findOne({where:{id:id}})
            res.status(200).send({status:"Success", data: activity})
        }
    })
    .catch(err=>{
        console.log('Err : ', err)
        res.status(400).send({
            status:"Bad Request", 
            code:400,
            message : err.message,
            data: {}
        })
    })
}