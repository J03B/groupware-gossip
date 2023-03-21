const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/signup', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Sets up sessions with the 'loggedIn' variable
    req.session.user = dbUserData.id;
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // Email did not exist - check if username exists
    if (!dbUserData) {
      dbUserData = await User.findOne({
        where: {
          username: req.body.emailOrUsername,
        },
      });
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect credentials. Please try again!' });
        return;
      }
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.user = dbUserData.id;
    req.session.save(() => {
      // Once the user successfully logs in, set up sessions with the 'loggedIn' variable
      req.session.loggedIn = true;
      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  // When the user logs out, the session is destroyed
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/getUsernameById/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: [
        'username',
      ],
    });
    res.status(200).json(userData.username);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;
