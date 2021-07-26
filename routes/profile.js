const router = require("express").Router();
const User = require("../db/models/user");
const Cards = require("../db/models/card");
const { findOneAndDelete } = require("../db/models/card");


router.get("/", async (req, res)=>{
    const currentUser = await User.findOne({"_id": req.session.user._id})
    const userCards = await Cards.find({owner:currentUser._id})
    res.render("profile", {user:currentUser, cards:userCards})
});


router.delete("/delete", async(req, res)=>{
    await Cards.findOneAndDelete({_id:req.body.card_id});
    const userCards = await Cards.find({owner:req.session.user._id})
    res.render("profile", {user:req.session.user, cards:userCards, })
})

module.exports = router