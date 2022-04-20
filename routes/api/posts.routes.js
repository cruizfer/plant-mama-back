const router = require('express').Router();
const usersModel = require('../../models/users.model');
const postModel = require('../../models/posts.model');
const { checkToken } = require('../../helpers/middlewares');
const res = require('express/lib/response');



//SAVING SELECTED POSTS BY A USER
router.post('/saved', checkToken, async (req, res) => {
    /* res.json(req.user); */
    try {
        const [savedPost] = await postModel.savedPostbyUser(req.body.post_id, req.user.id);
        res.json(savedPost);
    } catch (error) {
        res.json(error)
    }
});

//GET POST BY ID

router.get('/id', checkToken, async (req, res) => {
    try {
        const [posts] = await postModel.getPostByID(req.body.id);
        res.json(posts);
    } catch (error) {
        res.json(error)
    }
})

//GET SELECTED POST BY USER

router.get('/bookmark', checkToken, async (req, res) => {
    try {
        const [bookmark] = await postModel.getPostsByUser(req.user.id);
        res.json(bookmark);
    } catch (error) {
        res.json(error);
    }

});


module.exports = router;
