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
        ids = [...todoId.split(',')]
    }
    const where = {id:{
        [Op.in] : ids
    }}

    console.log('[DEL ACTIVITY] ', where)
    Activity.destroy({where})
    .then(result=>{
        res.status(200).send([{}])
        // if (result===0) {
        //     res.status(404).send({
        //         status: "Not Found",
        //         message: `No record found for id ${ids}`,
        //         code: 404
        //     })
        // }
        // else {
        // }
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