// Add comment
exports.addComment = async (req, res) => {
    const { comment } = req.body;
    try {
      const post = await Post.findById(req.params.postId);
      post.comments.push({ user: req.user.id, comment });
      await post.save();
      res.json({ msg: 'Comment added', post });
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  };
  