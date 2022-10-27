// Outline for the routes once files are built

const router = require('express').Router();

const userRoutes = require('./user-route');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
