const express = require('express');
const controller = require('../controllers/itAssets.controller')

// new express.Router()
const router = express.Router();

//Example route (where) and .get/.delete methods
//router.route('/path').get((req,res)=> {
// })


//REST API 
//@ GET
router.get('/', controller.getAsset);

//@ GET by ID
// router.get('/:id', controller.getTest);

//was .put
//@ EDIT by ID
router.patch('/:id', controller.updateAsset);

//@ CREATE new ID
router.post('/', controller.createAsset);

//@ DELETE
router.delete('/:id', controller.deleteAsset);

module.exports = router;