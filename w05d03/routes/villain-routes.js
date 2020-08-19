const express = require('express');
const router = express.Router();
const { getVillains, getVillainById } = require('../db/villain-queries');

router.get('/', (req, res) => {
  getVillains((villains) => {
    res.render('villains', { villains });
  });
});

router.get('/:id', (req, res) => {
  getVillainById(req.params.id)
    .then((villain) => {
      res.render('villain', { villain });
    });
});

module.exports = router;
