var express = require('express');
var router = express.Router();
var productHelper = require("../helpers/product-helpers")
var {connectToDb} = require("../config/connection")

/* GET users listing. */
router.get('/', function(req, res, next) {

  let products = [
    {
      name:"Iphone 11",
      category:"mobile",
      description:"this is iphone 11",
      imageUrl:"https://img4.gadgetsnow.com/gd/images/products/additional/large/G390830_View_1/mobiles/smartphones/apple-iphone-14-pro-256-gb-deep-purple-6-gb-ram-.jpg"

    },
    {
      name:"Redmi 11pro", 
      category:"mobile",
      description:"this is nice phone",
      imageUrl:"https://m.media-amazon.com/images/I/71u-1krs2XL._SX679_.jpg"
      
    },
    {
      name:"Oppo reno 8", 
      category:"mobile",
      description:"this is nice phone",
      imageUrl:"https://m.media-amazon.com/images/I/21nVxZCBiqL._AC_UY327_FMwebp_QL65_.jpg"
      
    },
    {
      name:"samsung s22 ultra", 
      category:"mobile",
      description:"this is nice phone",
      imageUrl:"https://m.media-amazon.com/images/I/71qZERyxy6L._AC_UY327_FMwebp_QL65_.jpg"
      
    }
  ]

  res.render("admin/view-products",{products,admin:true})
});
router.get("/add-product",function(req,res){

res.render("admin/add-product")
})

router.post("/add-product",(req,res)=>{

  connectToDb()

  })

module.exports = router;
