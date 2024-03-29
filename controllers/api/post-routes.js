const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// CREATE a new post for a user
router.post('/user', async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            date_posted: req.body.datePosted,
            user_id: req.session.user,
        });
  
        const loggedIn = req.session.loggedIn;
  
        res.status(200).json({ postData, loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// DELETE a post for a given user
router.delete('/user/post', async (req, res) => {
    // req.body needs postId
    try {
        const postID = req.body.postId;
        const getPostData = await Post.findByPk(postID, { raw: true } );
        if (getPostData.user_id == req.session.user) {
            const delPostData = await Post.destroy({
                where: {
                    id: postID
                }
            });

            res.status(200).json({delPostData, message: "Post deleted successfully"});
        }

        else {
            res.status(400).json({message: "Error: The signed in user does not own the post being deleted."});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// CREATE a new comment for a post
router.post('/comment', async (req, res) => {
    try {
        const commentData = await Comment.create({
            content: req.body.commentContent,
            date_posted: req.body.datePosted,
            user_id: req.session.user,
            post_id: req.body.postId
        });

        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;