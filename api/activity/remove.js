const {Activity} = require('../../models')

module.exports = (req, res) => {
    const id = req.params.groupId

    if (!id) {
        res.status(404).send({status:'Not Found', message:`Activity with ID ${id} Not Found`, data: {}})
    }
    else {
        Activity.destroy({where:{id}})
        .then(result=>{
            if (result===0) {
                res.status(404).send({status:'Not Found', message:`Activity with ID ${id} Not Found`, data: {}})
            }
            else {
                res.status(200).send({status:'Success', message:'Success', data: {}})
            }
        })
        .catch(err=>{
            console.log('Err : ', err)
            res.status(500).send({status:"Failed"})
        })
    }
}