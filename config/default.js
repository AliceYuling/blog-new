module.exports = {
  port: 80,
  session: {
    secret: 'blog',
    key: 'blog',
    maxAge: 259200000
  },
  mongodb: 'mongodb://localhost:27017/blog',
  db: 'blog'
}