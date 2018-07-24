const express = require('express');


function restfulRouter (controller){
    const router = express.Router();

    router.patch('/:id',async  function (req,res){
        controller.updateById(req.params.id,req.body)
            .then(m => res.json(m))
            .catch(err => res.status(500).json({error:err}))
    });

    router.delete('/:id',function (req,res){
        controller.removeById(req.params.id)
            .then(m => res.status(204).send())
            .catch(err => res.status(500).json({error:err}))
    });

    router.post('/', function (req, res) {
        controller.create(req.body.entity)
            .then(d => res.json(d))
            .catch(err => res.status(500).json({error: err}))
    });

    router.get('/', function (req, res) {
            controller.find()
                .sort({checkInDate: 'asc'})
            .then(models => res.json(models))
            .catch(err => res.status(500).json({error: err}))
    });

    router.get('/by/',function(req,res){
        controller.findBy(req.query)
            .sort({checkInDate: 'asc'})
            .then(m => res.json(m))
            .catch(err => res.status(500).json({error: err}))
    });

    return router;
}
module.exports = restfulRouter;