const express = require('express');
const db = require('../models/db.js');
const jwt = require('../models/jwt.js');

const router = express.Router();

router.get('/', function(req, res) {
  const token = req.cookies['token'];
  if (token === undefined) {
    return res.json('You don\'t have a token');
  }
  const payload = jwt.verifyToken(token);
  res.json(payload);
});

router.post('/signin', async (req, res) => {
  const { id, password } = req.body;
  if (await db.signIn(id, password)) {
    const token = jwt.createToken(id);
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json(token);
  }
  else {
    res.status(401).json({ });
  }
});

router.post('/signup', async (req, res) => {
  const { id, password } = req.body;
  if (await db.isIdDuplicate(id)) {
    return res.json(`You're id is duplicated.`);
  }
  const test = await db.signUp(id, password);
  res.json(test)
});

module.exports = router;
