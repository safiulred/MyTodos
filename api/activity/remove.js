const {Activity} = require('../../models')
const {Op} = require('sequelize')

const url = require('url');
module.exports = (req, res) => {
    const url_parts = url.parse(req.url, true);
    const query = url_parts.query;
    const params = req.params
    console.log('[groupId] ', params)
    console.log('[query] ', query)

    let ids = []
    if (query.id) {
        ids = [...query.id.split(',')]
    }
    else {
        ids = [...params.id.split(',')]
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
                message: `Activity with ID ${params.id?params.id:query.id} Not Found`,
                code: 404
            })
        }
        else {
            res.status(200).send({
                status:'Success', 
                data:{}
            })
        }
    })
    .catch(err=>{
        console.log('Err : ', err)
        res.status(400).send({
            status:"Bad Request",
            code:400,
            message : err.message,
            data: {}
        })
    })
}