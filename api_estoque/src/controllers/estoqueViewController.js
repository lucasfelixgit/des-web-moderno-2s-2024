const Produto = require('../models/produto')

async function getViewProdutos(req, res){
    let produtos = await Produto.findAll()
    res.render('produtos.html', {produtos})
}

module.exports = {
    getViewProdutos,
}