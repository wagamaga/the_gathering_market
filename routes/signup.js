const router = require('express').Router();
const User = require('../db/models/user');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const mailer = require('../nodemailer');

router
  .route('/')
  .post(
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    async (req, res, next) => {
      try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.status(400).render('signup', {
            errors: errors,
            message: 'Некорректные данные при регистрации'
          });
        }

        const { name, email, password, city } = req.body;

        const candidate = await User.findOne({ email });

        if (candidate) {
          return res.status(400).render('signup', { message: 'Такой пользователь уже есть' });
        }
        const message = {
          to: email,
          subject: 'Congratulations! You are successfully registred on our site',
          html: `
          <h2>Поздравляем, Вы успешно зарегистрировались на нашем сайте!</h2>
          
          <i>данные вашей учетной записи:</i>
          <ul>
              <li>login: ${email}</li>
              <li>password: ${password}</li>
          </ul>`,
        };
        mailer(message);
        const user = new User({
          username: name,
          email,
          password: await bcrypt.hash(password, 10),
          city,
        });
        await user.save();
        req.session.user = user;
        res.status(200).redirect('/');

      }
      catch (error) {
        res.status(500).render('signup', { message: 'Что-то пошло не так, попробуйте снова' });
      }
    });

module.exports = router;
