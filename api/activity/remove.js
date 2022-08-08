const {Activity} = require('../../models')

module.exports = (req, res) => {
    const id = req.params.groupId

    Activity.destroy({where:{id}})
    .then(result=>{
        if (result===0) {
            res.status(404).send({status:'Failed', message:'Failed', data: null})
        }
        else {
            res.status(200).send({status:'Success', message:'Success', data: null})
        }
    })
    .catch(err=>{
        res.status(500).send({status:"Failed"})
    })
}