const express = require('express');
const Post = require('../models/blog');

const router = express.Router();

router.get('/', (req, res) => {
  Post.find().then((result) => {
    res.send(result);
  });
});

router.get('/:postId', (req, res) => {
  const postId = req.params.postId;

  Post.findById(postId)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => console.log(error));
});

router.post('/', (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  post
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
