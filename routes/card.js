const router = require("express").Router();
const { localsAsTemplateData } = require("hbs");
const Card = require("../db/models/card");
const User = require("../db/models/user");

router.get("/:id", async (req, res)=>{
 
    
      const card = await Card.findOne({_id: req.params.id});
      const ownerName = await User.findOne({_id:card.owner});
      let btn;
      if (req.session.user) btn = ownerName._id == req.session.user._id;
      else btn = false;
      res.render("card", {card, ownerName, btn, user:req.session.user});  
 

})

module.exports = router;
