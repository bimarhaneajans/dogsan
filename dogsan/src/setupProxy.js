 const { createProxyMiddleware } = require('http-proxy-middleware');
//const proxy = require('http-proxy-middleware');

  module.exports = function(app) {
  app.use(
    '/api/auth',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
};  

/* module.exports = function(app) {
  app.use(proxy('/api/auth', { target: 'http://localhost:3000/' }));
};
  */