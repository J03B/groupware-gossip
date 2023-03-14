const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// GET all posts for the homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: [ 'username' ],
        },
      ],
    });

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );
    const loggedIn = req.session.loggedIn;
    res.render('homepage', {
      posts,
      loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
