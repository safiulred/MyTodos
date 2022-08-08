const {Activity} = require('../../models')

module.exports = (req, res) => {
    const id = req.params.groupId

    Activity.destroy({where:{id}})
    .then(result=>{
        res.status(200).send({status:'Success', message:'Success', data: result})
    })
    .catch(err=>{
        res.status(500).send({status:"Failed"})
    })
}