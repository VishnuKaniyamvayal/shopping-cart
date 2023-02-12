const database = require("../config/connection")
const collections = require("../config/constants")

const db = database.get()


module.exports = {
    addproduct :(product,callback)=>{

        db.collection("products").insertOne(product).then((data)=>{
            console.log(data)
            callback(data.insertedId.toString())
        })

    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            const products = await db.collection(collections.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    }
}