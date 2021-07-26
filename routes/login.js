const router = require("express").Router();
const UserBD = require("../db/models/user");
const bcrypt = require("bcrypt");


router.post("/", async(req, res)=>{
    const emailGet = req.body.email;
    const passwordGet = req.body.password;
    const currentUser = await UserBD.findOne({email: emailGet})

    if(!currentUser) {
      return res.status(400).render('login', { message: 'Такой пользователь не найден'})
    }
    if(!(currentUser && (await bcrypt.compare(passwordGet, currentUser.password)))) {
      return res.status(400).render('login', { message: 'Неправильный email или пароль'})
    }
    if (currentUser && (await bcrypt.compare(passwordGet, currentUser.password))){
        req.session.user = currentUser;
        res.redirect('/');
    }

})
module.exports = router;
