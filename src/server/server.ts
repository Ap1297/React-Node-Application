import express from "express";
import config from "./config";
import router from "./api-router";
import serverRender from "./render";

const server = express()

server.use(express.static("dist"));

server.set("view engine","ejs");

server.use("/api", router);


server.get("/", async(req,res) => {

    const {initialMarkup} = await serverRender();
    res.render("index",{
         initialMarkup,
    });
});
 
server.listen(config.PORT,config.HOST, () => {
    console.info(`Express server started on ${config.SERVER_URL}`);
})