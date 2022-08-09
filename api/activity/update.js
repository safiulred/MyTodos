const {Activity} = require('../../models')

module.exports = async (req, res) => {
    const id = req.params.groupId
    const body = req.body

    console.log('[UPDATE ACTIVITY] ', body)
    const cekData = await Activity.findOne({where:{id:id}})
    if (!cekData) {
        res.status(404).send({
            status: "Not Found",
            message: `Activity with ID ${id} Not Found`,
            code: 404
        })
    }
    else {
        Activity.update({...body},{where:{id:id}})
        .then(async result=> {
            const activity = await Activity.findOne({where:{id:id}})
            res.status(200).send({
                status:"Success", 
                code:200,
                data: activity
            })
        })
        .catch(err=>{
            console.log('Err : ', err)
            res.status(400).send({
                status:"Bad Reques", 
                code:400,
                message : err.message,
                data: {}
            })
        })
    }
}