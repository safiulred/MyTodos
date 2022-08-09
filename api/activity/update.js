const {Activity} = require('../../models')

module.exports = (req, res) => {
    const id = req.params.groupId
    
    const arg = Object.keys(req.body)
    const raw = arg[0].replace(/\n/gi, '')
    let payload = JSON.parse(raw)

    if (!id) {
        res.status(404).send({status:'Not Found', message:`Not Found`, data: {}})
    }
    else {
        Activity.update({...payload},{where:{id}})
        .then(async result=> {
            if (result.includes(0)) {
                res.status(404).send({status:'Not Found', message:`Not Found`, data: {}})
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