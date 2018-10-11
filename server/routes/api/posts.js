const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get posts
router.get('/', (req,res) => {
  res.send('Hello');
});
//Add post

//Delete Post

module.exports = router;