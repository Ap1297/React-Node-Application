import express from "express";
import config from "./config";
const server = express()

server.use(express.static("dist"));

server.set("view engine","ejs");



server.use("/", (req,res) => {
    res.render("index",{
        contents : "<B>Hello Ankit!!<B>"
    });
});

server.listen(config.PORT,config.HOST, () => {
    console.info(`Express server started on ${config.SERVER_URL}`);
})