const {Activity} = require('../../models')

module.exports = (req, res) => {
    const id = req.params.groupId

    Activity.update({...req.body},{where:{id}})
    .then(async result=> {
        if (result.includes(0)) {
            res.status(200).send({status:'Success', message:'Success', data: null})
        }
        else {
            const activity = await Activity.findOne({id})
            res.status(200).send({status:'Success', message:'Success', data: activity})
        }
    })
    .catch(err=>{
        res.status(500).send({status:"Failed"})
    })
}