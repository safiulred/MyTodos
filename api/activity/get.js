const {Activity} = require('../../models')

module.exports = (req, res) => {
    const id = req.params.groupId
    Activity.findOne({
        where : {id},
        order : [['id', 'ASC']]
    })
    .then(result=>{
        if (result) {
            res.status(200).send({status:'Success', message:'Success', data: result})
        }
        else {
            res.status(404).send({status:'Failed', message:'Failed', data: result})
        }
    })
    .catch(err=>{
        res.status(500).send({status:'Failed'})
    })
}