const express = require('express');
const controller = require('../controllers/Documents.controller')
const router = new express.Router();


/*****************
** REST API ******
******************/


//@ GET /create-pdf
router.get('/workflow/categorization-commission', controller.fetchCommissionOrderPdf);

//@ CREATE /fetch-pdf
router.post('/workflow/categorization-commission', controller.createCommissionOrderPdf);



module.exports = router