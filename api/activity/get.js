const {Activity, Todo} = require('../../models')

const url = require('url');

module.exports = (req, res) => {
    const url_parts = url.parse(req.url, true);
    const query = url_parts.query;
    const params = req.params
    
    let where = {
        id:params.id,
        ...query
    }
    
    console.log('[GET ACTIVITY] ', where)
    Activity.findOne({
        where : where,
        order : [['id', 'ASC']]
    })
    .then(result=>{
        if (result) {
            res.status(200).json({
                status:"Success", 
                code : 200,
                data:result
            })
        }
        else {
            res.status(404).send({
                status: "Not Found",
                message: `Activity with ID ${params.id} Not Found`,
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