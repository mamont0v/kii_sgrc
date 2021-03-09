const express = require('express');
const controller = require('../controllers/Personnel.controller')

// new express.Router()
const router = express.Router();

//Example route (where) and .get/.delete methods
//router.route('/path').get((req,res)=> {
// })


//REST API 
//@ GET
router.get('/', controller.getPersonnel);

//@ GET by ID
// router.get('/:id', controller.getTest);

//was .put
//@ EDIT by ID
router.patch('/:id', controller.updatePersonnel);

//@ CREATE new ID
router.post('/', controller.createPersonnel);

//@ DELETE
router.delete('/:id', controller.deletePersonnel);

module.exports = router;