const express = require('express');
const app = express();
const dbconnect = require("./config/mongodb");
const morgan = require("morgan");
const Router = require("./Routes/snippetsRoutes");
const cors = require('cors');


dbconnect();


// app.use(express.json());
app.use(cors({origin: true, credentials: true}));
app.use(morgan("dev"));
app.use(express.urlencoded({limit:  "100mb",extended : true}));
app.use("/",Router);


app.listen(5000,(err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("Server succeefully conected 5000");
    }
})