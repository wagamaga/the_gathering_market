const router = require("express").Router();
const cardModel = require("../db/models/card");
const Cards = require("../db/models/card");
const path = require("path");
const fs = require("fs")
const multer  = require("multer");
const upload = multer({dest:"./public/uploads"});


router.get("/", (req, res)=>{
    res.render("addCard", {user:req.session.user})
})





router.post("/", upload.single("image"), async(req, res)=>{
    const getCardTitle = req.body.cardTitle;
    const getCardQuality = req.body.cardQuality;
    const getCardPrice = req.body.cardPrice;
    const getDescription = req.body.cardDescription;
    let filedata = req.file;
    fs.renameSync(filedata.path, `${filedata.path}.jpg`)
    const imgPath = `${filedata.path}.jpg`.slice(6)
    const card = new cardModel({
    name: getCardTitle,
    description:getDescription, 
    img :imgPath,
    quality : getCardQuality,
    owner : req.session.user._id,
    price: Number(getCardPrice),
    city: req.session.user.city,
    })
    await card.save();
    const userCards = await Cards.find({owner:req.session.user._id})
    res.redirect("profile")
})

module.exports = router;
