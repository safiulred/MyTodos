const {Activity} = require('../../models')
const url = require('url');

module.exports = (req, res) => {
    const url_parts = url.parse(req.url, true);
    let query = url_parts.query;

    if (query['email']) {
        const email = encodeURIComponent(query['email'])
        query = {
            ...query,
            email
        }
    }

    console.log('[QUERY ALL ACTIVITY] ', query)
    Activity.findAll({
        where : query,
        order :[['id','ASC']]
    })
    .then(result=>{
        res.status(200).send({status:"Success", message:'Success', data:result})
    })
    .catch(err=>{
        console.log('Err : ', err)
        res.status(400).send({
            status:"Bad Requestt", 
            message: err.message,
            code : 400
        })
    })
}