const express = require('express');
const router = require('./router');

//  create express app instance
const app = express();
//  mount json body parser mw
app.use(express.json());
//  mount routing
app.use('/api', router);
//  error handler
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return;
    }
    res.status(500).send(err);
});

module.exports = app;
