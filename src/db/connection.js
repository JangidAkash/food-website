const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://akashjangid8068:akash123@cluster0.qmslzrw.mongodb.net/food-factory",{
  
}).then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})


