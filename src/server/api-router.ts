import express from "express";

import testData from "../local.contests.json";

const router = express.Router();
router.get("/contests" , (req,res) => {
    //getting data from mongodb

    res.send([testData]);
})
router.get("api/contest")

export default router;