const express = require('express')
const router = express.Router()

const estoqueController = require('../controllers/estoqueController')

router.get('/api/produtos', estoqueController.getProdutos)
router.get('/api/produtos/:id', estoqueController.getProdutoId)
router.post('/api/produto/cadastrar', estoqueController.postCadastrarProduto)
router.post('/api/produto/atualizar', estoqueController.postAtualizarProduto)
router.post('/api/produto/excluir', estoqueController.postExcluirProduto)

module.exports = router