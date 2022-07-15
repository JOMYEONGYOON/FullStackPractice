const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://3.101.146.109:8080",
      changeOrigin: true,
    })
  );
};
