const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/auth',
    createProxyMiddleware({
      target: 'https://bavrim.madilink.net',
      changeOrigin: true,
    })
  );
};