import express from "express"

const app = express();

// app.get("/", (req, res)=>{
//     res.send("Server is ready");
// })

// in real life, we write api link like this:
app.get('/api/jokes', (req,res)=>{
const jokes = [{"id":1,"title":"Joke 1","content":"Joke is funny"},{"id":2,"title":"Joke 2","content":"Joke is funny2"},{"id":3,"title":"Joke 3","content":"Joke is funny3"},{"id":4,"title":"Joke 4","content":"Joke is funny4"}]
    res.send(jokes)
})


// we always need to use environment var in real life, writing 3000 for exception
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
})