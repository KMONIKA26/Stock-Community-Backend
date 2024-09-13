const Post = require('../models/Post');

// Create post
exports.createPost = async (req, res) => {
  const { stockSymbol, title, description, tags } = req.body;
  try {
    const post = new Post({ user: req.user.id, stockSymbol, title, description, tags });
    await post.save();
    res.json({ msg: 'Post created', post });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all posts (with filters and sorting)
exports.getPosts = async (req, res) => {
  const { stockSymbol, tags, sortBy } = req.query;
  let query = {};
  if (stockSymbol) query.stockSymbol = stockSymbol;
  if (tags) query.tags = { $in: tags };

  let sortOptions = {};
  if (sortBy === 'likes') sortOptions.likes = -1;
  else sortOptions.createdAt = -1;

  try {
    const posts = await Post.find(query).sort(sortOptions);
    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
