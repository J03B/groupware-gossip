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
      order: [['id', 'DESC']],
    });

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );
    const loggedIn = req.session.loggedIn;
    res.render('homepage', {
    //res.status(200).json({
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

// GET one post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [
            'username',
          ],
        },
        { 
          model: Comment,
          include: [
            {
              model: User,
              attributes: [ 'username', ],
            }
          ]
        },
      ],
    });

    const post = postData.get({ plain: true });
    const loggedIn = req.session.loggedIn;

    res.render('post', { post, loggedIn });
    //res.status(200).json({post, loggedIn})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one dashboard (all posts for one user)
router.get('/dashboard', async (req, res) => {
  try {
    const userId = req.session.user;
      const userData = await User.findByPk(userId, {
          attributes: [
              'username',
          ],
          include: [
              {
                model: Post,
                include: [
                    {
                        model: User,
                        attributes: [ 'username', ],
                    },
                ],
                order: [['id', 'DESC']],
              },
          ],
      });

      const user = userData.get({ plain: true });
      const loggedIn = req.session.loggedIn;
      
      res.render('dashboard', { user, loggedIn });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

module.exports = router;
