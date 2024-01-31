const mongoose = require('mongoose')
const connectdb=async()=>{
    try {
    await mongoose.connect('mongodb+srv://isramadssia23:yiWg0iN963GFEDo8@cluster0.2j1fjtv.mongodb.net/?retryWrites=true&w=majority')
    console.log("database is connected")
    } catch (error) {
        console.log("database is not connected", error)
        
    }
}
module.exports = connectdb