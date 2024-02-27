import express from "express"

const app = express();

// app.get("/", (req, res)=>{
//     res.send("Server is ready");
// })

// get list of 5 jokes
app.get('/jokes', (req,res)=>{

    res.json({"name":"Saran Pariyar"})
})


// we always need to use environment var in real life, writing 3000 for exception
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
})