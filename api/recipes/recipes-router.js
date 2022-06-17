const router = require('express').Router();
const Recipe = require('./recipes-model');

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(err => {
            next(err);
        });
})

router.use((req, res, next) => {
    res.status(500).json({ message: 'something went wrong' });
})

module.exports = router;