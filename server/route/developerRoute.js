const express = require('express')

const router = express.Router();

const{createDeveloper , getDevelopers, getDevelopersByID, updateDeveloper,deleteDeveloper}  = require('../controller/developerController')


router.get('/' , (req , res) => {
    res.json({ msg: 'hello Isaac'})
})

router
   .route('/developer')
   .post(createDeveloper)
   .get(getDevelopers)

router
   .route('/developer/:id')
   .get(getDevelopersByID)
   .put(updateDeveloper)
   .delete(deleteDeveloper)


module.exports = router