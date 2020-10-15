const {Router} = require('express');
const CounterController = require('./../controllers/counter');

const counterRouter = Router();
counterRouter.post('/', CounterController.create);
counterRouter.get('/', CounterController.getLast);

module.exports = counterRouter;
