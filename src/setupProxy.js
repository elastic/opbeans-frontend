// This file is used to proxy requests to the backend server
// see https://github.com/facebook/create-react-app/blob/main/docusaurus/docs/proxying-api-requests-in-development.md#configuring-the-proxy-manually
const { createProxyMiddleware } = require('http-proxy-middleware');
var paths = require('react-scripts/config/paths');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: process.env.ELASTIC_OPBEANS_API_SERVER || require(paths.appPackageJson).proxy,
            changeOrigin: true,
        })
      );
};