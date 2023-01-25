// This file is used to proxy requests to the backend server
// see https://github.com/facebook/create-react-app/blob/main/docusaurus/docs/proxying-api-requests-in-development.md#configuring-the-proxy-manually
const { createProxyMiddleware } = require('http-proxy-middleware');
var paths = require('react-scripts/config/paths');

function onError(err, req, res, target) {
    res.writeHead(500, {
        'Content-Type': 'application/json',
    });
    res.end('{}');
    console.error('Something went wrong. Check you are running the API server in the correct port. (npm rum mock-api-server or any Opbeans API server))');
}

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: process.env.REACT_APP_ELASTIC_OPBEANS_API_SERVER || require(paths.appPackageJson).proxy,
            changeOrigin: true,
            onError: onError,
            followRedirects: true,
        })
      );
};