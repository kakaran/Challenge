const snippets = require('../Model/snippets');

const snippetsAdd = async (req,res) =>{
    try {
        const {name , detail} = req.body;

        if(!name){
            return res.status(400).send("Name is Required")
        }else if(!detail){
            return res.status(400).send("Detail is required");
        }

        const searchdata = await snippets.find({name : name});
        if(!searchdata.length){
            const snippets_data = await new snippets(req.body);
            await snippets_data.save();
            return res.status(200).send({
                message : "snippet is created",
                data : snippets_data
            })
        }

    } catch (error) {
        console.log(error);
    }
}


const snippetsDisplay = async (req,res)=>{
    try {
        const data = await snippets.find();
        if(data){
            return res.status(200).send(data);
        }else{
            return res.status(400).send("data not found");
        }
    } catch (error) {
        console.log(error);
    }
}

const snippets_delete = async (req,res)=>{
    try {
        const {_id} = req.params;
        console.log(_id);

        const data = await snippets.findOne({_id})

        if(data) {
            await snippets.findByIdAndDelete({_id});
            return res.send("deleted")
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    snippetsAdd,
    snippetsDisplay,
    snippets_delete
}