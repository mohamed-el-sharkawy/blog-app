# blog-app

A blog app API where people can create posts and comments

Docker image link: [https://hub.docker.com/repository/docker/mohamedelsharkawy/blog](https://hub.docker.com/repository/docker/mohamedelsharkawy/blog).

Heroku deployment link: [https://sfe-blog-app.herokuapp.com](https://sfe-blog-app.herokuapp.com)

## Routes:

| Route              | Method | Body                     | Description    |
| ------------------ | ------ | ------------------------ | -------------- |
| /api/posts         | POST   | {"content": "anything" } | Creates a post |
| /api/posts/:postId | Put    | {"content": "anything" } | Updates a post |
| /api/posts         | GET    |           {}             | Gets posts     |
| /api/posts/:postId | GET    |           {}             | Gets a post    |
 
