const router = require('express').Router();
const { Comment } = require('../../models');

const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try{
        const commentData = Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try{
        const commentData = Comment.findByPk(req.params.id);

        if(!commentData) {
            res.status(404).json({message: 'No comment found with this id!'});
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err)
    }
});


router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deleteComment = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!deleteComment) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(deleteComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;