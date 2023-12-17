import express from "express";
import config from "./config";
import router from "./api-router";

const server = express()

server.use(express.static("dist"));

server.set("view engine","ejs");

server.use("/api", router);


server.use("/", (req,res) => {
    res.render("index",{
        initialContent : "loading.."
    });
});

server.listen(config.PORT,config.HOST, () => {
    console.info(`Express server started on ${config.SERVER_URL}`);
})