const {Router} = require('express');
const counterRouter = require('./routes/counter');

const router = Router();
router.use('/counter', counterRouter);

module.exports = router;
