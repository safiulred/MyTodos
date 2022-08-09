const {Activity} = require('../../models')
const {Op} = require('sequelize')

const url = require('url');
module.exports = (req, res) => {
    const url_parts = url.parse(req.url, true);
    const query = url_parts.query;
    const groupId = req.params.groupId
    console.log('[groupId] ', req.params)
    console.log('[query] ', query)

    let ids = []
    if (query.id) {
        ids = [...query.id.split(',')]
    }
    else {
        ids = [...groupId.split(',')]
    }
    const where = {
        id:{
            [Op.in] : ids
        }
    }

    console.log('[DEL ACTIVITY] ', where)
    Activity.destroy({where})
    .then(result=>{
        if (result===0) {
            res.status(404).send({
                status: "Not Found",
                message: `Activity with ID ${req.params.id?req.params.id:req.query.id} Not Found`,
                code: 404
            })
        }
        else {
            res.status(200).send({status:'Success', data:result})
        }
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