const {Activity} = require('../../models')

module.exports = (req, res) => {
    const id = req.params.groupId
    const query = req.query
    
    if (!id) {
        res.status(404).send({status:'Not Found', message:`Not Found`, data: {}})
    }
    else {
        let where = {
            id,
            query
        }
        Activity.findOne({
            where : {where},
            order : [['id', 'ASC']]
        })
        .then(result=>{
            if (result) {
                res.status(200).json({status:'Success', message:'Success', data: result})
            }
            else {
                res.status(404).send({status:'Not Found', message:'Not Found', data: {}})
            }
        })
        .catch(err=>{
            console.log('Err : ', err)
            res.status(404).send({status:'Failed', message : "Failed", data:{}})
        })
    }
}