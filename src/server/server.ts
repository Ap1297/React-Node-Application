import express from "express";

const server = express()

server.use(express.static("dist"));

server.set("view engine","ejs");


server.use("/", (req,res) => {
    res.render("index",{
        contents : "Hello Ankit!!"
    });
});

server.listen("8080","localhost", () => {
    console.info("Express server started on http://localhost:8080");
})