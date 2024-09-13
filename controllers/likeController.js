// Like a post
exports.likePost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.postId);
      if (post.likes.includes(req.user.id)) return res.status(400).json({ msg: 'Already liked' });
  
      post.likes.push(req.user.id);
      await post.save();
      res.json({ msg: 'Post liked', post });
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  };
  
  // Unlike a post
  exports.unlikePost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.postId);
      post.likes = post.likes.filter(user => user.toString() !== req.user.id);
      await post.save();
      res.json({ msg: 'Post unliked', post });
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  };
  