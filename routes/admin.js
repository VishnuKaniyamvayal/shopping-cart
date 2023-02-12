var express = require('express');
var router = express.Router();
var productHelper = require("../helpers/product-helpers")

/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelper.getAllProducts().then((products)=>{

    res.render("admin/view-products",{products,admin:true})
  })
});
router.get("/add-product",function(req,res){

res.render("admin/add-product")
})

router.post("/add-product",(req,res)=>{
  console.log(req.body);
  productHelper.addproduct(req.body,(id)=>{
    let image = req.files.image
    image.mv("./public/images/product-images/"+id+".jpg",(err,done)=>{
      if(!err){
        res.render("admin/add-product")

      }
      else{
        console.log(err)
      }
    })
  })

  })

module.exports = router;
