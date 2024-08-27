const express = require('express')
const router = express.Router()

const estoqueViewController = require('../controllers/estoqueViewController')

router.get('/produtos', estoqueViewController.getViewProdutos)

module.exports = router