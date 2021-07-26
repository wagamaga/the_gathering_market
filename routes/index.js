

const router = require('express').Router()
const Card = require('../db/models/card')
const User = require('../db/models/user')
router.get('/', async (req, res) => {
  let cards;
  const { user } = req.session


  try {
    cards = await Card.find();
  } catch (error) {
    return res.render('error', {
      message: 'Не удалось получить записи из базы данных.',
      error: {},
    });
  }

  return res.render('index', { cards, user });

});

router.get('/signup', (req, res) => {
  if (req.session.user) {
    res.redirect('/');
  } else {
    res.render('signup');
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', async (req, res, next) => {
  if (req.session.user) {
    try {
      req.session.destroy();
      res.clearCookie("user_sid"); 
      res.redirect('/');
    } catch (error) {
      next(error);
    }
  } else {
    res.redirect("/login");
  }
});

router.post('/search', async (req, res) => {
  const { search } = req.body
  const { user } = req.session
  const cards = await Card.find({ city: search })
  res.render('search', { search, cards, user })
})

module.exports = router;
