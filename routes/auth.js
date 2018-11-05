const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');

let userdat = {};

  router.get('/kakao', passport.authenticate('kakao-login'));
  router.get('/kakao/callback', passport.authenticate('kakao-login', {
      failureRedirect : '/snslogin',
      failureFlash : true // allow flash messages
    }), (req, res, next) => {

      const token = jwt.sign({data: req.user}, config.secret, {expiresIn: 604800}); // 1 week

      userdat = {
        token: 'JWT '+token,
        user: {
          id: req.user._id,
          name: req.user.name,
          address: req.user.address,
          username: req.user.username,
          email: req.user.email,
          image: req.user.image
        }
      };

      res.redirect('/conf');
      console.log('login success');
    }
  );

  router.get('/conf', (req, res) => {
    res.json(userdat);
    console.log(userdat);
  });



module.exports = router;
