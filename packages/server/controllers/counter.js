const {Count} = require('./../models');

module.exports.create = async (req, res, next) => {
    const {body} = req;
    try {
        const createdCount = await Count.create(body);
        res.status(201).send({
            data: body,
        });
    } catch (err) {
        res.status(400).send({
            errors: [{
                title: err.message
            }]
        });
    }
};

module.exports.getLast = async (req, res, next) => {
    try {
        const countId = await Count.max('id');
        const count = await Count.findByPk(countId);
        res.status(200).send({
            data: count
        });
    } catch (err) {
        res.status(404).send({
            errors: [{
                title: err.message
            }]
        });
    }
};
