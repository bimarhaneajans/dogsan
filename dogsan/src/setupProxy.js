 const { createProxyMiddleware } = require('http-proxy-middleware');
//const proxy = require('http-proxy-middleware');

  module.exports = function(app) {
  app.use(
    '/api/auth',
    createProxyMiddleware({
      target: 'https://bavrim.madilink.net',
      changeOrigin: true,
    })
  );
};  

/* module.exports = function(app) {
  app.use(proxy('/api/auth', { target: 'https://bavrim.madilink.net/' }));
};
  */