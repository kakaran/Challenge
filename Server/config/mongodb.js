const mongoose = require('mongoose');

const dbconect = async () =>{
    try {
       await mongoose.connect("mongodb://0.0.0.0:27017/myways");
        console.log("Mongodb Connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbconect;

