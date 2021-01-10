module.exports = {
  port: process.env.PORT || 3000, 
  production: ((process.env.NODE_ENV === "production") ? true : false),
  secretInstagram: '',
  token: 'ddd'
}