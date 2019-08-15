CREATE DATABASE posts_blog;

USE posts_blog;

CREATE TABLE post(
  id_post INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100),
  post_content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESC post;

INSERT INTO post(title, post_content) values('my title', 'post content');

SELECT * FROM post;