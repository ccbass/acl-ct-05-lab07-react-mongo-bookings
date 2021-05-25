const { Router } = require('express');

const Place = require('../models/Place');

module.exports = Router()
  .get('/', async (req, res, next) => {
    const places = await Place.find().exec();
    res.json(places);
  })
  .get('/:id', async (req, res, next) => {
    const place = await Place.findOne({ _id: req.params.id });
    res.json(place);

  });
