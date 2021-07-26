const router = require('express').Router();
const UserBD = require("../db/models/user");

router.get("/", (req, res) => {
  res.render("updateInfo", { user: req.session.user })
})

router.post("/", async (req, res) => {
  let user;
  if (req.body.city) {
    user = await UserBD.findOneAndUpdate({ _id: req.session.user._id },
      { city: req.body.city })
    req.session.user.city = req.body.city
  }
  if (req.body.name) {
    user = await UserBD.findOneAndUpdate({ _id: req.session.user._id },
      { username: req.body.name })
    req.session.user.username = req.body.name
  }
  res.redirect('/profile')
})


module.exports = router;
