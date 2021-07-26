const router = require('express').Router();
const Card = require('../db/models/card');
const User = require('../db/models/user');
const mailer = require('../nodemailer');

router.get('/', async (req, res) => {
  const user = await User.findOne({ _id: req.session.user._id }).populate('cart');
  res.render('cart', { card: user.cart, user: req.session.user});
});

router.get('/:id/add', async (req, res) => {
  const cardID = req.params.id;
  await User.findOneAndUpdate({ _id: req.session.user._id }, { $push: { cart: cardID } }).populate('cart');
  res.redirect('/');
});

router.get('/:id/delete', async (req, res) => {
  const user = await User.findOne({ _id: req.session.user._id });
  const cardID = req.params.id;
  const remainCards = user.cart.filter((el) => el != cardID);
  user.cart = remainCards;
  await user.save();
  res.redirect('/cart');
});

router.get('/:id/buy', async (req, res) => {
  const card = await Card.findOne({ _id: req.params.id });
  const owner = await User.findOne({ _id: card.owner });
  console.log(owner);
  const message = {
    to: owner.email,
    subject: 'Wizzard market',
    html: `
    <img src="https://cdn.custom-cursor.com/cursors/pack2082.png">
    <h1>${owner.username}, вашу карточку купили</h1>
    <a href="https://gathering-market.herokuapp.com"><button>перейти на сайт</button></a>`,
  };
  mailer(message);
  const user = await User.findOne({ _id: req.session.user._id });
  const cardID = req.params.id;
  const remainCards = user.cart.filter((el) => el != cardID);
  user.cart = remainCards;
  await user.save();
  await Card.findOneAndDelete({_id: req.params.id })
  res.redirect('/cart')
});

module.exports = router;
