const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'http://158.110.146.227:9000',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '*',
    createProxyMiddleware(proxy)
  );
};