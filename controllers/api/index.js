const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./BlogRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/Blogs', blogRoutes);
router.use('/Comments', commentRoutes);
router.use('/Users', userRoutes);

module.exports = router;