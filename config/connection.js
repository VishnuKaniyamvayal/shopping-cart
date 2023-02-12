const mongoose = require("mongoose")




module.exports.connectToDb = ()=>{

    mongoose.connect('mongodb://localhost:27017/Shopping_cart', {
        useNewUrlParser: true,
        useUnifiedTopology: true
        
      });
}
const db = mongoose.connection
module.exports.get = ()=>db


    
