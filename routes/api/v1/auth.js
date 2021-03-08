const express = require('express');
const router = express.Router();
const User = require('../../../models/User');
const authController = require('../../../controllers/auth');
const passport = require('passport');
const { check, body } = require('express-validator');

/**
 * @route POST api/${version}/auth/register
 * @desc Register the user
 * @access Public
 */

router.post(
   '/register',
   [
      check('email_address')
         .not()
         .isEmpty()
         .isEmail()
         .trim()
         .withMessage('Please enter a valid email')
         .custom((value, { req }) => {
            // console.log('value', value);
            return User.findOne({ email: req.body.email }).then((userDoc) => {
               if (userDoc) {
                  return Promise.reject('E-mail already in use');
               }
            });
         })
         .normalizeEmail(),
      check('password')
         .not()
         .isEmpty()
         .trim()
         .withMessage('Please enter a password'),
   ],
   authController.register
);

/**
 * @route POST api/${version}/auth/login
 * @desc Login the user
 * @access Public
 */
router.post(
   '/login',
   [
      check('password')
         .not()
         .isEmpty()
         .trim()
         .withMessage('Please enter a password'),
   ],
   authController.login
);

/**
 * @route POST api/users/profile
 * @desc Return the User's Data
 * @access Private
 */

router.get(
   '/profile',
   passport.authenticate('jwt', { session: false }),
   authController.profile
);
module.exports = router;
