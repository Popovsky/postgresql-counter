const {Count} = require('./../models');
const {increment, decrement} = require('./../services');

module.exports.create = async (req, res, next) => {
    const {body: {type, value, step}} = req;
    let newCounterState;
    switch (type) {
        case 'INCREMENT': {
            newCounterState = increment({value, step});
            break;
        }
        case 'DECREMENT': {
            newCounterState = decrement({value, step});
            break;
        }
        default:
            newCounterState = {value, step};
            break;
    }
    try {
        const maxCountId = await Count.max('id');
        if (maxCountId > 10) {
            const minCountId = await Count.min('id');
            const count = await Count.findByPk(minCountId);
            await count.destroy();
        }
        const createdCount = await Count.create(newCounterState);
        res.status(201).send({
            data: createdCount,
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
