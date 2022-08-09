const {Activity} = require('../../models')
const url = require('url');

module.exports = (req, res) => {
    const id = req.params.groupId
    const url_parts = url.parse(req.url, true);
    const query = url_parts.query;
    
    console.log('[QUERY] ', query)
    let where = {
        ...query,
        id : id,
    }
    if (query['email']) {
        const email = encodeURIComponent(query['email'])
        where = {
            ...where,
            email
        }
    }
    
    console.log('[GET ACTIVITY] ', where)
    Activity.findOne({
        where : where,
        order : [['id', 'ASC']]
    })
    .then(result=>{
        if (result) {
            res.status(200).send({status:"Success", data:result})
        }
        else {
            res.status(404).send({
                status: "Not Found",
                message: `No record found for id ${id}`,
                code: 404,
                "errors": {}
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