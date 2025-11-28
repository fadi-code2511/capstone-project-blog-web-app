import express from "express"

const app=express();
const port=3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts=[];  // array used here because we are not using a database.
// console.log(posts)

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.get("/create-post",(req,res)=>{
    res.render("create-post.ejs");
})

app.post("/",(req,res)=>{
    posts.push({
        title:req.body["title"],
        post:req.body["post"]
    })
    console.log(posts)
    res.redirect("/");
})

app.get("/view-post",(req,res)=>{
    res.render("view-post.ejs",{ posts: posts });
})

app.post("/delete-post:id",(req,res)=>{
    const id=req.params.id;
    posts.splice(id,1);
    res.redirect("/view-post")
})

app.listen(port,()=>{
    console.log(`the server listening on port ${port}`);
});