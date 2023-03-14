const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// GET one post
router.get('/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: [
              'username',
            ],
          },
          { model: Comment, },
        ],
      });
  
      const post = postData.get({ plain: true });
      const loggedIn = req.session.loggedIn;
      res.render('post', { post, loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});
  
// GET one dashboard (all posts for one user)
router.get('/user/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            attributes: [
                'username',
            ],
            include: [
                {
                model: Post,
                },
            ],
        });

        const user = userData.get({ plain: true });
        const loggedIn = req.session.loggedIn;
        console.log(user);

        res.render('dashboard', { user, loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// CREATE a new post for a user
router.post('/user/:id', async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            date_posted: req.body.datePosted,
            user_id: req.params.id,
        });

        const loggedIn = req.session.loggedIn;
        console.log(postData);

        res.status(200).json({ postData, loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;