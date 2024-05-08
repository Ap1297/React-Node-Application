import express from "express";
import config from "./config";
import router from "./api-router";
import serverRender from "./render";

const server = express()

server.use(express.static("dist"));

server.set("view engine","ejs");

server.use("/api", router);


server.get(["/","/contest/:id"], async(req,res) => {

    const {initialMarkup,initialData} = await serverRender(req);
    res.render("index",{
         initialMarkup,
         initialData,
    });
});
 
server.listen(config.PORT,config.HOST, () => {
    console.info(`Express server started on ${config.SERVER_URL}`);
})