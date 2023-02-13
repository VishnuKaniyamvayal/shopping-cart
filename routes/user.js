var express = require('express');
const productHelper = require('../helpers/product-helpers');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  productHelper.getAllProducts().then((products)=>{

    res.render("user/view-products",{products})
  })
});

router.get("/login",(req,res)=>{
  res.render("user/login")

})

router.get("/signup",(req,res)=>{
  res.render("user/signup")

})
router.post("/signup",(req,res)=>{
  

})
module.exports = router;
