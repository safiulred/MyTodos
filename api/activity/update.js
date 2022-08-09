const {Activity} = require('../../models')

module.exports = async (req, res) => {
    // const id = req.params.groupId
    const params = req.params
    const body = req.body

    console.log('[UPDATE ACTIVITY] ', body)
    console.log(params)
    Activity.update({...req.body},{where:{id:params.id}})
    .then(async result=> {
        if (result[0]===0) {
            res.status(404).send({
                status:'Not Found',
                message : `Activity with ID ${params.id} Not Found`,
                code:404
            })
        }
        else {
            const activity = await Activity.findOne({where:{id:params.id}})
            res.status(200).json({
                status:"Success", 
                data: activity,
                code:200
            })
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