const postsCtrl = {};

postsCtrl.getPosts = (req, res) => res.json({message: []});

postsCtrl.createPost = (req, res) => res.json({message: 'POST saved'});

postsCtrl.getPost = (req, res) => res.json({title: 'post1'});

postsCtrl.updatePost = (req, res) => res.json({message: 'POST updated'});

postsCtrl.deletePost = (req, res) => res.json({message: 'POST DELETED'});

module.exports = postsCtrl;