import express from "express";
import cors from "cors";
import { connectClient } from "./db";
const router = express.Router();
router.use(cors());


router.get("/contests" , async(req,res) => {
    //getting data from mongodb
    const client = await connectClient();
    const contests=await client.collection("contests")
    .find()
    .project({
        id:1,
        categoryName:1,
        contestName:1,
        _id:0,
    }).toArray();
    res.send({contests});
})

router.get("/contests/:id" , async(req,res) => {
    //getting data from mongodb
    const client = await connectClient();
    const contest=await client.collection("contests")
    .findOne({id: req.params.id});
    res.send({contest});
})

export default router;