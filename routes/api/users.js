const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

// User Model
const User = require('../../models/User');


router.post('/test', (req, res) => {
  console.log(req.body)
})

// @route GET api/user
// @desc Get All users
// @access Public
router.get('/', (req, res) => {
    User.find()
    .sort({ date: -1 })
    .then(users => res.send(res.json(users)));
});


// @route   POST api/user
// @desc    Register new user
// @access  Public
router.post('/register', (req, res) => {
  const { fullname, nickname, email, password,country, prefix, phone, birthday } = req.body;

  // Simple validation
  if(!fullname || !nickname || !email || !password || !country || !prefix || !phone || !birthday) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({ msg: 'User already exists' });
      
      admin.auth().createUser({
        email: email,
        emailVerified: false,
        password: password,
        displayName: nickname,
        photoURL: 'https://library.kissclipart.com/20180901/krw/kissclipart-user-thumbnail-clipart-user-lorem-ipsum-is-simply-bfcb758bf53bea22.jpg',
        disabled: false
      })
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log(userRecord)
          console.log('Successfully created new user:', userRecord.uid);
          const newUser = new User({
            uid: userRecord.uid,
            fullname,
            nickname,
            email,
            password,
            country: country.label,
            prefix,
            phone,
            birthday
          });

          newUser.save();
        })
        .catch(function(error) {
          console.log('Error creating new user:', error);
        });
      
    })
});

module.exports = router;