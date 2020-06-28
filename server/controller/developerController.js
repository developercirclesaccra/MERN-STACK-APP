const Developer = require('../model/Developer');

exports.createDeveloper =  ( req , res) => {
   console.log(req.body)

    const newDev = new Developer(req.body);

    newDev.save(( err, developer) => {
        if(err){
            res.send(err)
        }
         res.json(developer)
    })
}

exports.getDevelopers = (req, res) => {
    Developer.find({}, (err, developers) => {
        if(err){
            res.send(err)
        }

        res.json(developers)
    })
}

exports.getDevelopersByID = (req, res) => {
    Developer.findById(req.params.id, (err, developer) => {
        if(err){
            res.send(err)
        }

        res.json(developer)
    })
}

exports.updateDeveloper = (req, res) => {
    Developer.findByIdAndUpdate({_id : req.params.id},req.body,{new: true}, (err , developer) => {
        if(err){
            res.send(err)
        }

        res.json(developer)
    })
}


exports.deleteDeveloper = (req, res) => {
    Developer.remove({_id: req.params.id}, (err, developer) => {
        if(err){
            res.send(err)
        }
        res.json(developer)
    })
}