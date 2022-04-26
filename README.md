# blog-app

A blog app API where people can create posts and comments

Docker image link: [https://hub.docker.com/repository/docker/mohamedelsharkawy/blog](https://hub.docker.com/repository/docker/mohamedelsharkawy/blog).

Heroku deployment link: [https://sfe-blog-app.herokuapp.com](https://sfe-blog-app.herokuapp.com)

## Routes:

| Route                                  | Method | Body                     | Description          |
| -------------------------------------- | ------ | ------------------------ | -------------------- |
| /api/posts                             | POST   | {"content": "anything" } | Creates a post       |
| /api/posts/:postId                     | PUT    | {"content": "anything" } | Updates a post       |
| /api/posts                             | GET    |                          | Gets all posts       |
| /api/posts/:postId                     | GET    |                          | Gets a post          |
| /api/posts                             | DELETE |                          | Deletes all posts    |
| /api/posts/:postId                     | DELETE |                          | Deletes a post       |
| /api/posts/:postId/comments            | POST   | {"content": "anything" } | Creates a comment    |
| /api/posts/:postId/comments/:commentId | PUT    | {"content": "anything"}  | Updates a comment    |
| /api/posts/:postId/comments            | GET    |                          | Gets all comments    |
| /api/posts/:postId/comments/:commentId | GET    |                          | Gets a comment       |
| /api/posts/:postId/comments            | DELETE |                          | Deletes all comments |
| /api/posts/:postId/comments/:commentId | DELETE |                          | Deletes a comment    |
