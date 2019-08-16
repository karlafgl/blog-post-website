const postsCtrl = {};

const mysqlConnection = require('../database');

//Get all Posts
postsCtrl.getPosts = (req, res) => {
  mysqlConnection.query('SELECT * FROM post', (err, rows, fields) => {
    if(!err) {
      res.json(rows)
    } else {
      console.log(err)
    }
  })
}

//Get just 1 post
postsCtrl.getPost = (req, res) => {
  const { id } = req.params
  console.log(id)
  mysqlConnection.query(`SELECT * FROM post WHERE id_post = ${id}`, (err, rows, fields) => {
    if(!err) {
      res.json(rows[0])
    } else {
      console.log(err)
    }
  })
}

//Create a new post
postsCtrl.createPost = (req, res) => {
  const { id_post, title, post_content, created_at} = req.body;
  const query = `INSERT INTO post (title, post_content) VALUES ('${title}', '${post_content}')`;
  mysqlConnection.query(query, (err, rows, fields) => {
    if(!err) {
      res.json(rows)
    } else {
      console.log(err)
    }
  })
};

//Updating a post
postsCtrl.updatePost = (req, res) => {
  const { title, post_content } = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE post 
                        SET title = ${title}, post_content = ${post_content}  
                        WHERE id_post = ${id}
                        `, (err, rows, fields) => {
    if(!err) {
      res.json({STATUS: 'post actualizado'})
    } else {
      console.log(err)
    }
  })
}

//Delete a post
postsCtrl.deletePost = (req, res) => {
  const {id} = req.params;
  mysqlConnection.query(`DELETE FROM post WHERE id_post=${id}`, (err, rows, fields) => {
    if(!err) {
      res.json({STATUS: 'post delete'})
    } else {
      console.log(err)
    }
  })
}

module.exports = postsCtrl;