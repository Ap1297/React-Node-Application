import express from "express";
import cors from "cors";

const router = express.Router();
router.use(cors());


import testData from "../local.contests.json";
router.get("/contests" , (req,res) => {
    //getting data from mongodb

    res.send({contests: testData});
})


export default router;