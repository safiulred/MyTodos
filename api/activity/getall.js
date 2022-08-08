const {Activity} = require('../../models')

module.exports = (req, res) => {
    Activity.findAll({
        order :[['id','ASC']]
    })
    .then(result=>{
        res.status(200).send({status:"Success", message:'Success', data:result})
    })
    .catch(err=>{
        res.status(500).send({status:"Failed", message:'Failed'})
    })
}