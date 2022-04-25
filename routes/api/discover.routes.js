const router = require('express').Router();
const { checkToken } = require('../../helpers/middlewares');
const locationModel = require('../../models/locations.model');

//GET ALL LOCATIONS

router.get('/locations', checkToken, async (req, res) => {
    try {
        const [location] = await locationModel.getAll();
        res.json(location);
    } catch (error) {
        res.json(error)
    }
})
module.exports = router;