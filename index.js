import express from "express"

const app=express();
const port=3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.get("/creat-post",(req,res)=>{
    res.render("create-post.ejs")
})

app.post("/creat-post",(req,res)=>{
    res.render("create-post.ejs")
})


app.listen(port,()=>{
    console.log(`the server listening on port ${port}`)
});