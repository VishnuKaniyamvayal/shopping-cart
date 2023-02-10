const {db} = require("../config/connection")


module.exports = {
    addproduct :(product,callback)=>{
        db.collection("product").insertOne(product).then((data)=>{
            callback(true)
        })

    }
}