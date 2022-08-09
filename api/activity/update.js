const {Activity} = require('../../models')

module.exports = (req, res) => {
    const id = req.params.groupId
    if (!id) {
        res.status(404).send({status:'Not Found', message:`Activity with ID ${id} Not Found`, data: {}})
    }
    else {
        Activity.update({...req.body},{where:{id}})
        .then(async result=> {
            if (result.includes(0)) {
                res.status(404).send({status:'Not Found', message:`Activity with ID ${id} Not Found`, data: {}})
            }
            else {
                const activity = await Activity.findOne({where:{id}})
                res.status(200).send({status:'Success', message:'Success', data: activity})
            }
        })
        .catch(err=>{
            console.log('Err : ', err)
            res.status(500).send({status:"Failed"})
        })
    }
}