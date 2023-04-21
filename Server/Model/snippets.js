const mongoose = require("mongoose");

const snippetsschema = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    detail : {
        type : String,
        required : true
    }
},{
    timestamps : true
});

const snippets = mongoose.model("Snippets",snippetsschema);

module.exports = snippets;

